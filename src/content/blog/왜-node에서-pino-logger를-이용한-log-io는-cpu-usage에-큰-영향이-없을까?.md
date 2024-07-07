---
author: Gyunseo Lee
title: 왜 Node.js에서 Pino Logger를 이용한 Log I/O는 CPU Usage에 큰 영향이 없을까?
pubDatetime: 2024-07-08T00:06:00+09:00
modDatetime: 2024-07-08T00:06:00+09:00
featured: true
draft: false
tags:
  - Computer-Science
  - Node
description: Node에 대한 깊은 이해를 해 봅시다...
ogImage: ""
---

## Table of contents

## 들어가며

최근에 프로젝트를 운영하면서, 동시에 많은 사용자들이 가입을 시도하려했을 때, 높은 CPU Usage가 찍혀서 서비스가 죽었던 일이 있었습니다.  
I/O가 무거웠기 때문에, CPU Usage가 높게 찍혀서 서비스가 죽었을 것이라고 처음에 생각했는데, 다시 곰곰이 생각해 보니 이는 틀린 이야기였습니다. (병목 구간은 CPU-Intensive한 Argon2 함수였습니다...)  
좌우지간 저의 이런 틀린 생각을 한번 반박해 보겠습니다.

## DISK I/O 시, CPU는 뭘할까?

답: 최신 컴퓨터 시스템은 디스크가 I/O를 할 때 딱히 하는 일이 없다.

요즘은 디스크는 자체적인 프로세서와 펌웨어를 갖추고 있습니다.  
따라서, CPU가 개입하지 않아도 복잡한 작업이 가능합니다.  
또, 자신만의 Buffer와 Register도 있어서, 장치에서 Read한 데이터나, 장치에 저장할 데이터도 buffer와 register에 저장할 수 있어요.

## CPU가 직접 데이터를 복사해야 할까?

장치 제어기는 이제 어느 정도 독립성과 자율성을 갖고, 명령을 받아서 자체적으로 작업이 가능합니다.  
Disk에서 자체 Buffer로 Data를 읽었으면, 이를 CPU가 직접 데이터 전송 명령어를 실행해서, 장치 제어기 버퍼에 있는 데이터를 따로 복사해야 할까요?  
CPU 입장에서 데이터를 직접 복사한다는 건 계산 리소스를 극도로 낭비하는 작업입니다.  
그래서 이런 dirty한 작업을 대신하게 할 수 있는 똑똑한 방식을 고안했습니다.  
바로, Direct Memory Access (DMA)입니다.

## DMA

Disk에서 Memory로 데이터를 읽는 걸 원양 어선 새우 잡이 작업으로 비유해 봅시다.  
새우는 태평양에서 잡혀서, 대양을 건너와 항구로 운송되고, 다시 새우 공장으로 트럭을 타고 운송돼야 합니다.  
CPU가 직접 새우를 부산항에서 공장으로 운반할 수 있지만, CPU는 너무 중요합니다.  
기술적이지 않은 일을 시키는 건 큰 낭비이죠.  
CPU가 해야 될 일은 새우 공장 사무실에 앉아서 명령을 내려서 직원들이 새우를 잡고, 공장으로 운반하게 해줘야 합니다.  
이때 Memory와 외부 장치 사이에서 데이터를 이동시키는 역할을 맡은 게 DMA입니다.  
아무튼 DMA를 이용하면, CPU 개입 없이 장치와 메모리 사이에 직접 데이터를 복사할 수 있게 됩니다.  
자세한 건 DMA에 대해 구글링을 해서 더 찾아 봐야 합니다.

## 프로그래머에게 시사하는 바

소프트웨어 관점에서 보자면, Disk I/O를 일종의 하나의 단독 스레드로 간주하고, CPU가 기계 명령어를 실행하는 것도 또 하나의 단독 스레드로 간주할 수 있습니다.

1. CPU 스레드가 I/O 요청을 시작하면 직접 디스크 스레드를 생성하여 해당 작업을 처리한다.
2. 이후 CPU는 자신이 할 일을 계속한다. CPU 스레드와 디스크 스레드는 병렬적으로 실행이 된다.
3. 디스크 스레드가 I/O를 완료하면, CPU 스레드에 알린다.
   CPU 스레드와 디스크 스레드가 비동기 방식으로 실행된다고 볼 수 있습니다.

## `read` 시스템 콜은 어떻게 file을 읽을까?

```c
char buffer[LEN];
read(buffer);
```

위와 같은 코드가 있다고 가정해 봅시다.  
이는 전형적인 file read 요청입니다.  
위 read 함수는 read system call을 통해 OS에 file 읽기 요청을 보냅니다.  
이 때 커널에서는 Disk가 이해할 수 있는 명령어로 변환합니다.  
그리고, 해당 명령어를 Disk로 전송하죠.  
OS는 귀중한 CPU가 낭비되는 걸 싫어하죠.  
그래서 위 코드를 실행하는 Process는 Blocked됩니다.  
그리고 DMA를 통해서 buffer에다가 Disk Data를 복사하게 되면, 인터럽트를 통해 Blocked된 해당 Process를 깨우고, 다시 CPU에 스케줄링하게 됩니다.  
이 과정을 본다면 CPU는 I/O시 Blocked되는 거 말고 하는 일이 거의 없죠?

## 그럼 왜 Node.js에서 Pino Logger를 이용한 Log I/O는 CPU Usage에 큰 영향이 없을까?

Node.js는 기본적으로 위에서 Single Threaded하고 Blocking한 (위에서 설명한 방식의 I/O 방법을 따르는) V8 엔진과 비동기 API (함수)들을 처리하는 libuv로 이뤄져 있습니다.  
대표적으로 `fs.readFile` 같은 것들이 있죠. (~~참고로 `console.log`는 V8 엔진 메인스레드에서 blocking하게 실행되는 I/O입니다.~~ 가 아니고, `process.stdout`의 경우는 synchronous한지 async한지는 때에 따라 다르다고 하네요! [Node.js API 공식 문서 참고](https://nodejs.org/api/process.html#a-note-on-process-io))  
저도 사실 시간이 없어서 많이 찾아 보지는 않았는데, Pino Logger도 비동기 API랍니다.  
그래서 libuv로 넘어갈테고, libuv에서는 epoll(I/O Multiplexing 방식)을 이용해, file descriptor들을 감시하죠.
그래서 감시 중인 file descriptor들 중에 읽고 쓸 수 있는 fd가 생기면 해당 fd들을 반환받고, 이에 상응하는 작업을 하게 됩니다.  
물론 이때도 logging이라면 결국, read와 write 시스템 콜을 호출하게 될 것이고, cpu의 개입은 결국 거의 없을 것이라는 겁니다.
Node.js API 공식 문서에 이런 말이 있습니다.

> Synchronous writes block the event loop until the write has completed. This can be near instantaneous in the case of output to a file, but under high system load, pipes that are not being read at the receiving end, or with slow terminals or file systems, it's possible for the event loop to be blocked often enough and long enough to have severe negative performance impacts. This may not be a problem when writing to an interactive terminal session, but consider this particularly careful when doing production logging to the process output streams.

요약하자면, 동기식으로 로깅하면 시스템에 로드가 클 때, event loop가 block돼서 심각한 문제가 생길 것이다라고 말하네요.  
즉, 로깅이 많이 되는 것도 Node.js에서는 성능 상에 큰 문제를 야기할 수 있겠군요!
그런데 제가 예상한 것이랑은 다른 이슈긴 하죠? 일단, CPU Usage가 갑자기 튀어서 일어난 서비스 다운인데, Logging 많이 일어나서, 성능 상에 큰 문제가 생기는 건 CPU Usage랑 아무런 관련이 없습니다.  
그리고 결정적으로, Pino Logger는 비동기로 처리됩니다.  
결국 제가 틀린 게 맞습니다.

끄읕

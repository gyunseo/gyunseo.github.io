---
pubDatetime: 2023-09-18T03:11:00Z
title: OSTEP 31 Semaphores
featured: false
draft: false
tags:
  - Computer-Science
  - OS
  - OSTEP
  - Concurrency
  - Semaphores
ogImage: ""
description: OS:TEP 31장 공부한 거 정리
---

## Table of contents

## 들어가며

병행성 문제 해결을 위해서는 lock과 condition variables가 모두 필요하다.
암튼 이 사실을 처음 인지한 양반이 다익스트라 알고리즘으로 유명한, 다익스트라라는 양반인데, 그 양반이 semaphore라는 동기화 기법도 개발했다.
이번 장은 이걸 공부한다.

## 세마포어: 정의

세마포어는 정수 값을 갖는 객체로서 두 개의 루틴으로 조작할 수 있다.
POSIX 표준에서 이 두 루틴은 `sem_wait()`와 `sem_post()`이다.
세마포어는 초기값에 의해 동작이 결정되기 때문에, 사용하기 전 **제일 먼저** 값을 초기화해야 한다.
하기 코드가 그 과정을 나타낸다.

```c
#include <semaphore.h>
sem_t s;
sem_init(&s, 0, 1);
```

상기 코드에서 세마포어 `s`를 선언 후, 3번째 인자로 1을 전달해 세마포어 값을 1로 초기화하낟.
`sem_init()`의 두 번째 인자는 모든 예제에서 0이다.
이 값은 같은 process 내의 thread 간 semaphore를 공유한다는 것을 의미한다.
초기화된 후에는 `sem_wait()`, 또는 `sem_post()`라는 함수를 호출해, semaphore를 다룬다.
두 함수의 동작은 하기 그림에 나온다.
![](/public/image/ostep-31-semaphores-1694974842445.jpeg)
---
pubDatetime: 2023-09-18T01:39:00Z
title: OSTEP 30 Condition Variables
featured: false
draft: false
tags:
  - Computer-Science
  - OS
  - OSTEP
  - Concurrency
ogImage: ""
description: OS:TEP 30장 공부한 거 정리
---

## Table of contents

## 들어가며

지금까지 `lock`의 개념을 학습하면서, hardware와 OS의 지원을 통해 제대로 된 `lock`을 만드는 법을 살펴봤다.
그러나, `lock`만으로는 제대로된 병행 program을 작성할 수 없다.
`thread`가 계속 진행하기 전에 어떤 조건이 참인지 검사해야 하는 경우가 많이 있다.
예를 들어 부모 `thread`가 작업을 시작하기 전에 자식 `thread`가 작업을 끝냈는지 검사하기를 원할 수 있다. (이 과정을 보통 `join()`이라 한다.)
그런 대기문을 어떻게 구현해야 할까?

![](/public/image/ostep-30-condition-variables-1694969269278.jpeg)
우리는 하기와 같은 output을 원한다.

```bash
parent: begin
child
parent: end
```

![](/public/image/ostep-30-condition-variables-1694969372752.jpeg)
상기 그림처럼 공유 변수를 사용해도 된다. 제대로 동작은 하지만은, 부모 `thread`가 회전을 하면서 CPU 시간을 낭비하기 때문에 비효율적이다.
대신, 부모 `thread`가 특정 조건이 참이 될 때 (ex: 자식 `thread`가 실행이 종료되는 것)까지 잠자면서 기다리는 방법이 더 좋다.

## 정의와 루틴들

상기에서 언급한 **조건**이 참이 될 때까지 기다리기 위해 `condition variable`을 활용할 수 있다.
`condition variable`은 일종의 queue data structure라서, 어떤 실행 상태 (또는 어떤 조건)가 원하는 것과 다를 때 조건이 참이 되기를 기다리며, `thread`가 대기할 수 있는 queue이다.
다른 `thread`가 상태를 변경시켰을 때, 대기 중이던 `thread` (하나 이상의 `thread`가 깨어날 수도 있다.)를 깨우고(조건에 따라 시그널을 보내서), 계속 진행할 수 있도록 한다.
`pthread_cond_t c;`라고 써, `c`가 컨디션 변수가 되도록 선언한다. (초기화 과정이 필요하다.)
`condition variable`에는 `wait()`와 `signal()`이라는 두 개의 연산이 있다.
`wait()`는 쓰레드 스스로가 잠자기 위해서 호출되는 것.
`signal()`은 쓰레드가 무엇인가 변경했기 때문에, 조건이 참이 되기를 기다리며 잠자고 있던 쓰레드를 깨울 때 호출되는 것.
POSIX의 사용례는 하기와 같다.

```c
pthread_cond_wait(pthread_cond_t *c, pthread_mutex_t *m);
pthread_cond_signal(pthread_cond_t *c);
```

각각을 간단히 `wait()`와 `signal()`이라 하자.
`wait()`에서 유념할 것은 `mutex`를 매개변수로 사용한다는 것이다.

> `wait()`가 호출될 때, `mutex`는 잠겨있었다 가정한다. `wait()`의 역할은 lock을 해제하고 호출한 thread를 재우는 것이다. 어떤 딴 thread가 signal을 보내, thread가 깨어나면, `wait()`에서 return하기 전에 lock을 재획득해야 한다.

그러니, 조건이 만족돼 잠에서 깨어났더라도 lock을 획득 못하면 다시 sleep 상태로 돌아간다.
이렇게 복잡한 이유는 thread 스스로를 재우려 할 때, race condition의 발생을 막기 위해서이다.
이해를 위해 하기 그림에 나타난 join 문제의 해법을 보자.
![](/public/image/ostep-30-condition-variables-1694972374585.jpeg)
두 가지 경우가 있다.

1. 부모 thread가 자식 thread를 생성하고, 계속 실행해 `thr_join()`을 호출하고 자식 thread가 끝나기를 기다리는 경우. 이 경우에는 부모 thread가 lock을 획득하고, 자식이 끝났는지 검사한 후에 (`done`이 1이 됐는지) 자식이 끝나지 않았으므로, `wait()`를 호출해 스스로를 재운다. (이때 lock을 해제) 자식 thread가 추후에 실행돼, `"child"`라는 msg를 print하고, `thr_exit()`을 호출해 부모 thread를 깨울 것이다. 이 코드는 lock을 획득한 후에, `done`을 1로 설정하고, 부모 thread에 signal을 보내 부모가 일어나도록 한다. (이때까지는 아직 부모 thread는 lock이 없겠죠? ㅎㅎ) 그 다음 마지막으로, 호출되었던 `wait()`에서 자식 thread에서 놓아준 lock을 획득하고, 그 상태로 return하여 부모 thread가 마저 실행될 것이고, 다시 또 lock을 해제하고 `"parent: end"` msg를 print할 것이다.

2. 자식 thread가 생성되면서 즉시 실행되고, `done`을 1로 설정한다. 그리고 자고 있는 thread를 깨우기 위해 signal을 보낸다. 하지만 이때 자고 있는 thread가 없기 때문에, 단순히 return한다. (한 마디로 헛수고한 셈이다.) 이후에 부모 thread가 실행되고, `thr_join()`을 호출하고, `done`이 1인 걸 알게 된다. `done`이 1이므로 while이 실행되지 않고, 대기 없이 바로 return한다.

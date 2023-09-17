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

## 컨디션 변수

지금까지 `lock`의 개념을 학습하면서, hardware와 OS의 지원을 통해 제대로 된 `lock`을 만드는 법을 살펴봤다. 그러나, `lock`만으로는 제대로된 병행 program을 작성할 수 없다.
`thread`가 계속 진행하기 전에 어떤 조건이 참인지 검사해야 하는 경우가 많이 있다. 예를 들어 부모 `thread`가 작업을 시작하기 전에 자식 `thread`가 작업을 끝냈는지 검사하기를 원할 수 있다. (이 과정을 보통 `join()`이라 한다.) 그런 대기문을 어떻게 구현해야 할까?

![](/public/image/ostep-30-condition-variables-1694969269278.jpeg)
우리는 하기와 같은 output을 원한다.

```bash
parent: begin
child
parent: end
```

![](/public/image/ostep-30-condition-variables-1694969372752.jpeg)
상기 그림처럼 공유 변수를 사용해도 된다.

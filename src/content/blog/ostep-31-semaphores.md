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
세마포어는 초기값에

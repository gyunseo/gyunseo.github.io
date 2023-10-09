---
title: OSTEP 26 Concurrency and Threads
postSlug: ostep-26-concurrency-and-threads
pubDatetime: 2023-09-11T02:44:00Z
featured: false
draft: false
tags:
  - OSTEP
  - OS
  - Computer-Science
  - Concurrency
  - Thread
description: OS:TEP 26장 공부한 거 정리
---

## Table of contents

## 병행성: 개요

이번 장에서는 process를 위한 새로운 개념인 thread를 도입한다.
program에서 한 순간에 하나의 명령어만을 실행하는(단일 PC값) 고전적인 관점에서 벗어나, 멀티 쓰레드 프로그램은 하나 이상의 실행 지점(독립적으로 불러 들여지고 실행될 수 있는 여러 개의 PC값)을 가지고 있다.
각 쓰레드는 프로세스와 유사하지만, thread들은 주소 공간을 공유하기 때문에 동일한 값에 접근할 수 있다.
하나의 thread 상태는 process 상태와 매우 유사하다. thread는 PC와 연산을 위한 register들을 갖고 있다.
만약 두 개의 threads가 하나의 processor에서 실행 중이라면, 실행하고자 하는 thread(T2)는 반드시 context switch를 통해서, 실행 중이던 thread(T1)과 교체돼야 한다.

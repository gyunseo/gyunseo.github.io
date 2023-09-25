---
pubDatetime: 2023-09-26T03:52:00Z
title: OSTEP 33 Event-based Concurrency
featured: false
tags:
  - OSTEP
  - Concurrency
  - Computer-Science
  - OS
ogImage: ""
description: OS:TEP 33장 공부한 거 정리
---

## Table of contents

## 들어가며

이제까지 쓰레드를 병행 프로그램을 제작하는 유일한 도구인 것처럼 말했다.
하지만 그렇지 않다.
특히, GUI 기반 프로그램이나 인터넷 서버에서는 다른 스타일의 병행 프로그래밍이 사용된다.
이런 스타일을 event-based concurrency이라 한다.
`node.js`와 같은 서버 프레임워크에서 사용되지만, 그 시작점은 지금부터 다룰 C와 유닉스 시스템이다.
이벤트 기반의 병행성은 두 개의 문제를 갖고 있다.

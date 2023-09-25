---
pubDatetime: 2022-09-26T00:33:00Z
title: OSTEP 32 Concurrency Bugs
featured: false
tags:
  - docs
ogImage: ""
description: OS:TEP 32장 공부한 거 정리
---

## Table of contents

## 들어가며

대부분의 초기 병행성 관련 오류 연구는 `deadlock`에 초점이 맞추어져 있었다.
최근의 연구들은 다른 종류의 병행성 버그들 (비교착 상태 버그)을 다룬다.
이번 장에서 다룰 핵심 문제는 다음과 같다.

> **일반적인 병행성 관련 오류들을 어떻게 처리하는가?**
> 병행성 버그는 몇 가지의 전형적인 패턴을 갖는다.
> 튼튼하고 올바른 병행 코드를 작성하기 위한 가장 첫 단계는 어떤 경우들을 피해야 할지 파악하는 것.

## 오류의 종류

첫 번째 질문은 이것이다.

> **복잡한 병행 프로그램에서 발생하는 병행성 오류들은 어떤 것들이 있는가?**

대표적인 오픈 소스 프로그램 4개를 예로 들어 설명한다.
`MySQL` , `Apache`, `Mozilla`, `OpenOffice`
![](/public/image/ostep-32-concurrency-bugs-1695656687000.jpeg)
병해

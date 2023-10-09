---
title: OSTEP 36 File Devices
pubDatetime: 2023-10-09T22:05:00Z
featured: false
draft: false
tags:
  - OSTEP
ogImage: ""
description: OSTEP 36장 공부한 거 정리
---

## Table of contents

## 들어가며

본론에 들어가기 전에 I/O device의 개념을 소개하고, OS가 이들과 상호 작용하는 방법을 알아 보자.  
당연하겠지만, I/O는 컴퓨터 시스템에서 상당히 중요한 부분이다.  
입력이 전혀 없는 프로그램이나 (늘 같은 결과를 출력하는), 출력이 없는 프로그램을 생각해 보라 (실행이 어떤 의미가 있겠는가?).  
컴퓨터 system을 유용하게 쓰려면 I/O 모두 필요하다는 것은 분명하다. 그러므로 우리가 해결해야 할 문제는 다음과 같다.

> 핵심 질문 : 어떻게 I/O를 시스템에 통합할까?
> 시스템에 I/O를 어떻게 통합해야 하는가? 일반적인 방법은 무엇인가? 어떻게 효율적으로 통합할 수 있을까?

## 시스템 구조

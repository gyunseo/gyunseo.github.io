---
author: Gyunseo Lee
title: C언어로 Worker Thread Pool 구현하기
pubDatetime: 2024-06-14T19:45:00+09:00
modDatetime: 2024-06-14T19:45:00+09:00
featured: false
draft: false
tags:
  - Computer-Science
  - Thread
  - System-Programming
description: Multi Threading 머리 아프다...
ogImage: ""
---

## Table of contents

## 들어가며

이번 시스템 프로그래밍 실습 강의에서 Worker Thread Pool을 이용해서, 다수의 동시 접속자를 핸들링하는 예약 서버를 만들라는 과제를 받았습니다... 🥲  
어떻게 구현해야할지 감이 안 와서, 일단은 Worker Thread Pool을 만들어 보기로 했습니다!!

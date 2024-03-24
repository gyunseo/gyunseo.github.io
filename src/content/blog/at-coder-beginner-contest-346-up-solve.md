---
author: Gyunseo Lee
title: AtCoder Beginner Contest 346 Up Solve
pubDatetime: 2024-03-24T16:20:00+09:00
modDatetime: 2024-03-24T16:20:00+09:00
featured: false
draft: false
tags:
  - At-Coder
  - PS
  - Algorithms
description: AtCoder Beginner Contest 346 업솔빙...
ogImage: ""
---

## Table of contents

## B

### 목표: 무한으로 반복되는 키보드의 부분 문자열들 중에 `W`개의 흰 건반과 `B`개의 검은 건반으로 이뤄진 부분 문자열이 존재하는가?

#### 1. 무한으로 반복되는 키보드가 아니고 1개의 키보드(`wbwbwwbwbwbw`)만 존재한다면?

건반을 앞에서 차례로 훑으면서, 하나의 시작 건반 지점 마다 `W + B`개 range의 중첩 반복문을 돌려서, 흑/백건 건반을 카운트한다. 그리고 카운트된 각각의 흑/백건 건반 카운트가 각각 `W`, `B`와 같은지 확인한다.

#### 2. 그럼 무한으로 반복되는 키보드라면?

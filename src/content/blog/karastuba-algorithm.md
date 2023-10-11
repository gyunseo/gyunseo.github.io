---
title: Karastuba Algorithm (카라추바 알고리즘)
pubDatetime: 2023-10-11T12:29:00Z
featured: false
draft: false
tags:
  - Computer-Science
  - karastuba-algorithm
  - Algorithms
description: Large Integers들을 곱할 때는 어떤 알고리즘을 사용해야 할까...?
---

## Table of contents

## 들어가며

카라추바(Karastuba) 알고리즘은 소련의 수학자 아나톨리 알렉세예비치 카라추바가 1960년에 발견하고, 1962년에 공개한, 큰 정수에 대한 효과적인 곱셈 알고리즘

- `x`: B진법의 `n`자리 수 어떤 값
- `y`: B진법의 `n`자리 수 어떤 값

기본적으로 `x*y`의 곱셈연산은 $O(n^2)$이라는 연산횟수가 필요.

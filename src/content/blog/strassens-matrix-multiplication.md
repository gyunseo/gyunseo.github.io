---
title: Strassen's Matrix Multiplication
pubDatetime: 2023-10-11T14:17:00Z
featured: false
draft: false
tags:
  - Algorithms
  - Computer-Science
  - strassens-matrix-multiplication
description: 행렬 곱셈을 어떻게 해야할까...?
---

## Table of contents

## 들어가며

조건: 행렬이 $n \times n$이며 `n`은 2의 거듭제곱
![](/src/assets/image/strassens-matrix-multiplication-1697001558964.jpeg)
우리가 아는 일반적인 방법:

$$
\begin{align}
C_{00} = A_{00}B_{00} + A_{01}B_{10}
\newline C_{01} = A_{00}B_{01} + A_{01}B_{11}
\newline C_{10} = A_{10}B_{00} + A_{11}B_{10}
\newline C_{11} = A_{10}B_{01} + A_{11}B_{11}
\end{align}
$$

## Strassen's Matrix Multiplication (행렬 곱셈)

- 분할

  - A, B 행렬을 분할

- 정복

  - M1 ~ M7를 구하기 위해 재귀 호출

- 통합
  - 최종 값 C를 구함

## Formulas for Strassen's Algorithm

$$
\begin{align}
M 1 = (A 00 + A11) ∗ (B00 + B11)
M 2 = (A 10 + A11) ∗ B00
M 3 = A00 ∗ (B01 - B11)
M 4 = A11 ∗ (B10 - B00)
M 5 = (A 00 + A01) ∗ B11
M 6 = (A 10 - A00) ∗ (B00 + B01)
M 7 = (A 01 - A11) ∗ (B10 + B11)
\end{align}
$$

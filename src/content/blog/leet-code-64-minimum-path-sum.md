---
author: Gyunseo Lee
title: "LeetCode 64: Minimum Path Sum"
pubDatetime: 2024-06-07T16:20:00+09:00
modDatetime: 2024-06-07T16:20:00+09:00
featured: false
draft: false
tags:
  - DP
  - PS
  - Algorithms
  - LeetCode
description: DP 웰노운인 최소 거리 합 문제를 풀어 보자...
ogImage: ""
---

## Table of contents

## 들어가며

이 문제는 움직일 수 있는 방향이 오른쪽과 아래 방향이어서 쉽게 DP 문제로 생각해 볼 수 있었습니다. 👍

## AC 받은 Python 코드

```python
from typing import List
import sys

input = sys.stdin.readline


class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        len_row = len(grid)
        len_col = len(grid[0])
        for i in range(len_row):
            for j in range(len_col):
                if i == 0 and j == 0:
                    continue

                if i == 0:
                    grid[i][j] = grid[i][j - 1] + grid[i][j]
                elif j == 0:
                    grid[i][j] = grid[i - 1][j] + grid[i][j]
                else:
                    grid[i][j] = min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j]
        return grid[len_row - 1][len_col - 1]


if __name__ == "__main__":
    sol = Solution()
    grid = eval(input().rstrip())
    print(sol.minPathSum(grid))
```

---
author: Gyunseo Lee
title: "LeetCode 207: Course Schedule"
pubDatetime: 2024-07-16T22:37:00+09:00
modDatetime: 2024-07-16T22:37:00+09:00
featured: false
draft: false
tags:
  - PS
  - Algorithms
  - DAG
  - Topological-Sort
  - BFS
  - DFS
  - LeetCode
  - Cycle
  - Kahn
  - Kosaraju
  - Tarjan
description: "이 문제는 푸는 방법이 엄청 많네요 ㅎㅎ"
ogImage: ""
---

## Table of contents

## 들어가며

걸린 시간: 3시간 (50분 안에 못 풀고 cycle 판정에 대해 찾아봤습니다...)

## 접근

WIP

## 구현

WIP

### DFS + 3 state (from CLRS)

```python
class Solution:
    def get_adjacency_list(self, n, edge_lists):
        adj_list = [[] for _ in range(n)]

        for dst, src in edge_lists:
            adj_list[src].append(dst)

        return adj_list

    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adj_list = self.get_adjacency_list(numCourses, prerequisites)

        # 0: not visited yet, -1: now being processed, 1: had been processed
        node_state_list = [0 for _ in range(numCourses)]

        # check cycle
        def DFS(cur_node):

            for next_node in adj_list[cur_node]:
                if node_state_list[next_node] == 1:
                    continue

                if node_state_list[next_node] == -1:
                    return True

                node_state_list[next_node] = -1
                if DFS(next_node):
                    node_state_list[cur_node] = 1
                    return True

            node_state_list[cur_node] = 1
            return False

        for i in range(numCourses):
            if node_state_list[i] == 1:
                continue

            node_state_list[i] = -1
            if DFS(i):
                return False

        return True

```

### Kahn 알고리즘 (위상 정렬)

### Kosaraju 알고리즘 (SCC)

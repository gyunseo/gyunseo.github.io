---
author: Gyunseo Lee
title: Programmers 즐겨찾기가 가장 많은 식당 정보 출력하기 문제 풀이
pubDatetime: 2024-02-27T20:06:00+09:00
modDatetime: 2024-02-27T20:06:00+09:00
featured: false
draft: false
tags:
  - Coding-Test
  - SQL
  - Programmers
description: 서브 쿼리 적극 이용하기
ogImage: ""
---

## Table of contents

## 들어가며

## SQL Query

```sql
SELECT food_type, rest_id, rest_name, favorites
FROM rest_info
WHERE favorites in (
    SELECT MAX(favorites)
    FROM rest_info
    GROUP BY food_type
)
GROUP BY food_type
ORDER BY food_type DESC;
```

## 틀린 첫번째 SQL Query

## 틀린 두번째 SQL Query

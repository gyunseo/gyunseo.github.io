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

해당 문제에서 하기와 같은 SQL Query를 날리면, 아래 표와 같은 결과가 나옵니다.

```sql
SELECT food_type, rest_id, rest_name, favorites
FROM rest_info;
```

| food_type | rest_id | rest_name          | favorites |
| --------- | ------- | ------------------ | --------- |
| 한식      | 00001   | 은돼지식당         | 734       |
| 일식      | 00002   | 하이가쯔네         | 112       |
| 양식      | 00003   | 따띠따띠뜨         | 102       |
| 일식      | 00004   | 스시사카우스       | 230       |
| 일식      | 00005   | 코슌스             | 123       |
| 양식      | 00006   | 지아스나폴리       | 50        |
| 양식      | 00007   | 소마바이           | 65        |
| 분식      | 00008   | 애플우스           | 151       |
| 한식      | 00009   | 숙성돼지           | 143       |
| 한식      | 00010   | 맷돌우리콩감자탕   | 243       |
| 한식      | 00011   | 부암갈비           | 150       |
| 한식      | 00012   | 만다복             | 10        |
| 한식      | 00013   | 은성보쌈           | 10        |
| 한식      | 00014   | 동명항생선숯불구이 | 53        |
| 중식      | 00015   | 만정               | 20        |
| 한식      | 00016   | 오대산산채전문점   | 230       |
| 한식      | 00017   | 방화동쭈꾸미마을   | 80        |
| 분식      | 00018   | 가나안             | 51        |
| 분식      | 00019   | 에버그린           | 130       |
| 한식      | 00020   | 신동태             | 550       |
| 한식      | 00021   | 강수곱창           | 210       |
| 한식      | 00022   | 군자네             | 101       |
| 일식      | 00023   | 싹쓰리             | 42        |
| 한식      | 00024   | 농실가찹쌀순대     | 12        |
| 분식      | 00025   | 별미진             | 10        |

문제에서 원하는 것은 각 음식 종류 별로 가장 즐겨찾기가 많은 레코드를 보여주라는 것입니다.  
일단 제가 제출한 답을 보겠습니다.

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

1. 일단 Sub Query의 결과는 다음과 같습니다.

| MAX(favorites) |
| -------------- |
| 734            |
| 230            |
| 102            |
| 151            |
| 20             |

## 틀린 첫번째 SQL Query

```sql
SELECT food_type, rest_id, rest_name, MAX(favorites) as favorites
FROM rest_info
GROUP BY food_type
ORDER BY food_type DESC;
```

## 틀린 두번째 SQL Query

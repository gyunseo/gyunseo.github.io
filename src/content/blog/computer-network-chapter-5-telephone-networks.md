---
title: Chapter 5 Telephone Networks
pubDatetime: 2023-11-05T03:03:00Z
featured: false
draft: false
tags:
  - Computer-Network
  - Computer-Science
  - WAN
  - Telephone-Networks
description: Telephone networks
---

## Table of contents

## Telephone Networks

- telephone networks는 **plain old telephone system (POTS)** 로 불리며, 회선 교환(circuit switching)을 사용한다.
- telephone networks에는 end offices, tandem offices, regional offices와 같은 여러 레벨의 switching offices가 있다.
- **PSTN**은 **Public Switched Telephone Network** 를 의미하며, 이 단어를 **POTS** 보다 더 많이 쓴다. (사무실에서 쓰는 전화기들이 PSTN이다.)

![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1699121405/image_o1y8l5.png)

![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1699121990/image_edwamq.png)
초기 telephone network의 모습이다.  
그래서 새로운 전화기를 추가하면, 전화선을 mesh형태로 추가를 해야 했다.  
그러면 토목 공사(땅을 파고, 케이블을 묶고)를 해야 하고, 많은 비용이 들었다.  
그래서 한 가지 생각한 방법은 기계를 만들어, 그 기계에 전화기를 연결하는 것이었다.  
그 기계를 switch(교환기)라고 불렀다.  
![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1699122584/image_jgajeh.png)
만약에 한 전화기에 다른 전화기로 전화를 걸고 싶다면, 교환기를 거쳐야 했고, 교환기에 있는 사람이 그 전화를 선으로 연결해 주었다.  
그리고 전화가 종료되면, 그 연결됐던 선을 다시 끊었다.  
그래서 이것을 temporary connection이라고 불렀으며, 기계를 switch라고 하였다.  
그런데 사람이 이 일을 하다 보니 힘들었다.  
그래서 교환기에 software를 집어 넣고, 각 전화기에 번호를 부여했다.  
![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1699122721/image_u3chyk.png)
예를 들어, 11번 전화기에서 13번 전화기로 전화를 걸면, 전자 교환기에서 자동으로 전화를 연결해 주었다.  
그런데 전화 수요가 늘게 되면, 하나의 전자 switch로 전화를 감당할 수 없었고, 새로운switch를 두어서 해결했다.  
그러나 계층을 두지 않고, 초기 telephone network의 전화기들 처럼 switch를 둔다면, 그때와 똑같이 mesh형태로 switch를 연결하는 사태가 발생하게 되기 때문에, 아래의 그림처럼 계층을 두었다.  
![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1699122869/image_qqjsgi.png)
학교 사무실에 있는 전화선을 쫓아 가면 600주년기념관이 나온다.  
또 그 선에서 선을 따라가면 혜화 전화국이 나온다.  
혜화 전화국에 switch(교환기)가 있다.(end office)  
end office와 전화기 사이 선을 local loop 혹은 subscriber(가입자) line(선로)이라고 한다.
Trunk는 (전화)국간 전송로(전화국-전화국)이다.  
Trunk line은 고속 전송로이다.  
local loop은 그렇지 않다.
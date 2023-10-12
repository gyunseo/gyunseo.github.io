---
title: Hello, World!
pubDatetime: 2023-10-12T12:07:00Z
featured: false
draft: false
tags:
  - Computer-Science
  - Computer-Network
  - celluar-telephony
description: Celluar Telephony에 대해서 공부한 거 정리
---

## Table of contents

## Celluar Telephony

- Each celluar service area is divided into small regions called **cell**s
- Each cell contains an antenna and is controlled by a small office, called the **base station (BS) (기지국)**
- Each base station is controlled by a switching office, called a **mobile switching center (MSC)**
- The MSC coordinates communication between all the base stations and the telephone central office
  - it is responsible for <u>connetcing calls, recording call information, and billing</u>

![](/src/assets/image/celluar-telephony-1697080731772.jpeg)

휴대폰의 무선 연결은 BS까지

![](/src/assets/image/celluar-telephony-1697080852481.jpeg)

각 셀마다 주파수를 다른 주파수를 사용한다. (왼쪽 그림은 최소한 네개의 서로 다른 주파수가 있어야 한다.  
그래도 혹시 파란 1번이 회색 1번까지 갈 수 있으니, 오른쪽 그림은 7개 셀을 사용한다.)
위의 설명을 reuse factor라고 한다. (7개 말고도 더 늘릴 수 있다.)

## Transmitting

- the mobile station scans the band
- the base station relays the data to the MSC
- the MSC sends the data on to the telephone central office.
- if the called the party is available, a connection is made and the result is relayed back to the MSC.

## Receiving

- MSC searches for the location of the mobile station by **sending query signals to each cell** in a process called **paging**
- MSC transmits a ringing signal and, **when the mobile station answers**, assigns a voice channel to the call.

## Handoff

- the mobile station moves form one cell to another

### Hard handoff

- break before make connection

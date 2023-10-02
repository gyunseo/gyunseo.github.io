---
title: Data Communications and Networking Chapter 4 LANs Part 2
pubDatetime: 2023-10-02T01:18:00Z
featured: false
draft: false
tags:
  - Computer-Science
  - Computer-Network
  - Ethernet
  - LAN
ogImage: ""
description: Data Communications and Networking Chapter 4 LANs 공부한 거 정리
---

## Table of contents

## Standard Ethernet

### Ethernet Frame

![](/src/assets/image/data-communications-and-networking-chapter-4-lans-part2-1696177248832.jpeg)

#### Physical-layer header

- Preamble: 1과 0이 교대하는 56bits (7B)
- SFD: Start Frame Delimeter, flag (10101011) (1B)

이 헤더의 두 필드는 왜 있냐? Physical Layer에서 처리한다.

Preamble의 역할은 receiving system에 coming frame을 alert하는 것이다. 그리고 receiving system이 동기화돼 있지 않으면, clock을 동기화할 수 있도록 한다.

Destination Address가 날라가는 걸 방지하기 위해 앞에 8B를 넣어 놨다.

#### 앞 2개 field를 뺀 진짜 Ethernet Frame

- Destination Address: 목적지 주소(6B)
- Source Address: 송신지 주소(6B)
- Length/Type: 어떨 때에는 Type으로 해석되고, 또 다른 어떨 때에는 Length로 해석된다.(2B)
- Data and Padding: 최소 Byte보다 적은 게 들어 가면 Padding으로 가짜 Byte들이 들어간다.(46B ~ 1500B)
- CRC: (4B)

Minimum Frame Length: 46B + 18B = 64B
Maximum Frame Length: 1500B + 18B = 1518B

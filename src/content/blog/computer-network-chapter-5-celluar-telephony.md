---
title: Chapter 5 Celluar Telephony
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

![](https://res.cloudinary.com/gyunseo-blog/image/upload/v1698669625/celluar-telephony-1697080731772.jpeg)

휴대폰의 무선 연결은 BS까지

![](https://res.cloudinary.com/gyunseo-blog/image/upload/v1698669625/celluar-telephony-1697080852481.jpeg)

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

### Hard Handoff

- break before make connection
  (통화가 안될 가능성이 생김)

### Soft Handoff

- make before break
  (중간 구역에서는 양다리를 걸친다.)
- 딴 구역으로 들어가는 순간, 이전의 통신을 끊는다.
  현재는 대부분 Soft Handoff를 사용한다.

## Roaming

- Neighboring service providers can provide extended coverage through a roaming contract

예: 호주에 있는 사람이 영국으로 가도 서로 통신이 되는 구조

## First Generation

- it was designed for voice communication using analog signals.
- Advanced Mobile Phone System (AMPS)
  - it uses FMDA to separate channels in a link
  - AMPS operates in the 800MHz band
  - the system uses two separate analog channels for forward and reverse.

![](https://res.cloudinary.com/gyunseo-blog/image/upload/v1698669625/celluar-telephony-1697081996594.jpeg)

상기 그림에서
Each band is 25 MHz,
made of 832 30-kHz analog channels.
이론상 832대가 동시에 통화가 가능하다.
채널을 할당해 주고, 그것으로 소통한다.

![](https://res.cloudinary.com/gyunseo-blog/image/upload/v1698669625/celluar-telephony-1697082165826.jpeg)

## Second Generation (2G)

- IS-136 D-AMPS
- GSM
- IS-95 CDMA

### D-AMPS

![](https://res.cloudinary.com/gyunseo-blog/image/upload/v1698669625/celluar-telephony-1697082325233.jpeg)
digital로 변환하면서 기존에 비해 최대 3배 수용이 가능해졌다.

### GSM

- Global System for Mobile Communcation
- reuse factor: 3

![](https://res.cloudinary.com/gyunseo-blog/image/upload/v1698669625/celluar-telephony-1697082403892.jpeg)
![](https://res.cloudinary.com/gyunseo-blog/image/upload/v1698669625/celluar-telephony-1697082424305.jpeg)
GSM은 8명이 들어올 수 있다.

내부 프레임 구조:
![](https://res.cloudinary.com/gyunseo-blog/image/upload/v1698669625/celluar-telephony-1697082457601.jpeg)

### IS-95

- Interim Standaard 95, based on CDMA and DSSS
- GPS 지원
- pilot channel sends a continuous stream of 1s to mobile station
- IS-95 defines two data rate sets
  - first set: 9600, 4800, 2400, 1200bps
  - second set: 14400, 7200, 3600, 1800bps

![](https://res.cloudinary.com/gyunseo-blog/image/upload/v1698669625/celluar-telephony-1697082584604.jpeg)

- 휴대폰 ESN으로 사용자 식별 (이거와 음성을 섞어 채널로 쏜다.)
  ![](https://res.cloudinary.com/gyunseo-blog/image/upload/v1698669625/celluar-telephony-1697082662309.jpeg)
- 받을 때에도 ESN이 관련된다.

## Third Generation

- provide both digital data and voice communication
- Internet Mobile Communication for 2000 (IMT-2000)

- voice quality comparable to that of the existing public telephone network
- 144Kbps, 384Kbps, 2Mbps
- a band of 2GHz
- 2MHz
- 인터넷 사용가능
  ![](https://res.cloudinary.com/gyunseo-blog/image/upload/v1698669625/celluar-telephony-1697082809953.jpeg)

## Fourth Generation (4G)

- data rate 100Mbps (moving car), 1Gbps for stationary user
- 모든 걸 IP packet으로 바꿔서 보내겠다. All IP, packet-switched, networks

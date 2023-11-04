---
title: Chapter 4 Bluetooth
pubDatetime: 2023-10-05T11:59:00Z
featured: false
draft: false
tags:
  - Computer-Science
  - Computer-Network
  - LAN
  - Wireless-LAN
  - Bluetooth
description: Bluetooth 공부한 거 정리
---

## Table of contents

## Bluetooth

- 전화, 노트북, 컴퓨터, 카메라, 프린터, 커피 제조기 등과 같은 다양한 기능의 기기들을 연결하기 위해 고안된 무선랜 기술.
- <u>A Bluetooth LAN은 ad hoc network(AP가 따로 존재하지 않는다.)이다.</u>
  - 네트워크는 자발적(spontaneously)으로 형성된다.
  - 때때로 gadget이라고 불리는 장치들은 서로를 찾아서 **piconet**라고 불리는 네트워크를 만든다.
- **IEEE 802.15** 표준은 무선 **개인 영역 네트워크(PAN)** 를 정의한다.

## Architecture

- Bluetooth는 **piconet**와 **scatternet**의 두 가지 네트워크 유형을 정의한다.
- 블루투스 장치에는 근거리 무선 송신기가 내장되어 있다.
- 버전 **5.2**의 현재 date rate는 $2.4GHz$ 대역폭을 가진 $2Mbps$이다.
  - 이는 IEEE 802.11be 무선랜과 블루투스 랜 사이에 간섭이 발생할 가능성이 있음을 의미한다.(그래서 frequency hopping이라s는, 무선 주파수를 뛰어 넘는 방법을 사용한다.)

| Bluetooth version     | Maximum range | Date rates | Message capacity | Throughput | Power consumption |
| --------------------- | ------------- | ---------- | ---------------- | ---------- | ----------------- |
| **Bluetooth Classic** | 10m           | 1mbps      | 31bytes          | 700kbps    | Very high         |
| **Bluetooth v4.x**    | 30m           | 1mbps      | 31bytes          | 300kbps    | high              |
| **Bluetooth v5.0**    | 200m          | 2mbps      | 255bytes         | 1400kbps   | low               |
| **Bluetooth v5.2**    | 200m          | 2mbps      | 255bytes         | 1400kbps   | very low          |

- 5.x 버전에서는 거리가 200m까지 가능하다. 그래서 거리를 짧게 쓰면 속도를 높일 수 있다. ($50mbps$까지)
- 거리를 멀리하면 속도가 느려지고...

## Piconets

- piconet은 최대 8개의 station을 가질 수 있으며, 그 중 하나는 **primary(master)** 라고 불리고, 나머지는 **secondary(slaves)** 라고 불린다.(하나는 primary, 나머지 7개는 secondary) (추가적으로 8대를 더 붙일 수 있다. 그렇게 하더라도, active한 station은 8개만 가능하다. 결국 동시에 가능한 거는 8개이다.)
- 모든 secondary station들은 그들의 clock과 hopping sequence를 primary와 동기화한다.
- piconet은 오직 하나의 primary station을 가질 수 있다.
- primary와 secondary 사이의 통신은 1대1 또는 1대多가 될 수 있다.
- piconet은 최대 7개의 secondary station을 가질 수 있지만, **추가로 8개의 secondary station이 parked state에 있을 수 있다.**
- parked state의 secondary station은 parked state로부터 이동될 때까지 통신에 참여할 수 없다.
- **piconet에서 8개의 station만이 활성화될 수 있다.**
  ![piconet](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1699084869/image_po3pgh.png)

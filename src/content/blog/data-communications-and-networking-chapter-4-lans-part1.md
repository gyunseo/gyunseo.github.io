---
title: Data Communications and Networking Chapter 4 LANs Part 1
pubDatetime: 2023-10-02T00:04:00Z
featured: false
draft: false
tags:
  - Computer-Science
  - Computer-Network
  - LAN
  - Ethernet
ogImage: ""
description: Data Communications and Networking Chapter 4 LANs 공부한 거 정리
---

## Table of contents

## 4.1 Ethernet

Local Area Network: a computer network that is designed for <u>a limited geographic area such as a building or a campus</u>

Ethernet: a family of wired computer networking technologies commonly used in LAN

1985년, IEEE에서 <u>다양한 manufacturers의 equipment들 사이의 intercommunication을 가능케하기</u> 위해 Project 802라 불리는 프로젝트를 시작.

ISO에서는 또한 이걸 **ISO 8802** 표준으로 승인.

![](/src/assets/image/data-communications-and-networking-chapter-4-lans-part1-1696173798651.jpeg)

![](/src/assets/image/data-communications-and-networking-chapter-4-lans-part1-1696173925385.jpeg)
각 MAC sublayer는 specific한 media access method (protocol) 을 사용하여 정의한다.

Ethernet LANs의 경우는 CSMA/CD를 media access method로 하여 정의한다.

Token Ring LANs와 Token Bus LANs의 경우는 token-passing method로 하여 정의한다.

Logical Link Control (LLC): <u>flow control, error control, part of the framing duties</u>

LLC는 모든 IEEE LANs를 위해 one single data link control protocol을 제공한다.

LLC는 **protocol data unit (PDU)** 을 정의한다.

- control field: for flow and error control
- DSAP and SSAP fields는 source (보내는 쪽의 어플리케이션이 무엇이다. 한글이냐 곰플레이어냐)와 destination (받는 쪽의 어플리케이션이 무엇이다.)에 있는 upper-layer protocol을 정의한다. (랜카드 위에 올라 가는 application protocol이 무엇이냐?)

근데 most upper-layer protocol들은 LLC를 안 쓴다.

## 4.2

---
title: Network Layer
pubDatetime: 2023-10-19T12:22:00Z
featured: false
draft: false
tags:
  - Computer-Network
  - Computer-Science
  - Network-Layer
description: Network Layer 공부한 거 정리
---

## Table of contents

## 들어가며

- physical and data link(데이터 링크 레이어는 에러 컨트롤): responsible for data delivery
- to solve the problem of delivery through serveral links, the network layer was designed
- the network layer is responsible for host-to-host delivery and for routing the packets through the routers or swithces

a에서 d를 갈 때 어느 route를 골라야할까? (어디로 가는 게 빠를까? 안전할까?)
routing을 전문적으로 해주는 장치인 router가 중요함.
![](/src/assets/image/network-layer-1697686506932.jpeg)
![](/src/assets/image/network-layer-1697686274993.jpeg)

## Services

- Packetizing
	- 상위 계층에서 데이터가 내려온다. 
	- 데이터를 packet으로 만든다. (앞에 header를 붙인다. encapsulating)
	- 목적지에서 그 packet을 까나가야 한다. (decapsulating)
	- router는 packet decapsulating하지 않는다. (data-link는 계층은 hop-by-hop으로 frame에 일정 부분 뗐다 붙였다 하는데 network layer는 그걸 하지 않는다)
- Routing
	- 가능한 routes 중에 best one을 찾는다. (unicast routing)
	- routing tables이 있다. 

![](/src/assets/image/network-layer-1697686506932.jpeg)

![](/src/assets/image/network-layer-1697686563197.jpeg)
목적지 A인 것은 output interface 1번으로 보내라.
목적지 B인 것은 output interface 2번으로 보내라.
상기 그림은 routing table이다.
routing protocol이 하는 일은 routing table을 만드는 일을 한다. (routing tabl는 packet을 forward를 한다, 어느 인터페이스로 보낼지를)


chrome에 www.naver.com -> ip address로 변환 -> pc에 있는 routing table이 있어서, 그것을 참조함. -> 패킷으로 만들어서 보냄 -> 최종 목적지에서는 header를 보고, ip 어드레스를 확인한다.

패킷이 너무 크면, fragmentation을 하여 보낸다.
수신 측에서는 잘라진 것들을 reassembling을 한다.

the network layer at the switch or router is **responsible for routing the packet**

ip packet은 ethernet frame 입장에서는 data이다.


- Error control
	- checksum may prevent any changes or corruptions in the header of the datagram.
	- the internet uses an auxiliary protocol, **ICMP**, that provides some kind of error control
- Flow control
	- it regulates the amount of data a source can send without overwhelming the receiver


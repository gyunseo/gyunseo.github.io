---
title: Chapter 5 Cable Networks
pubDatetime: 2023-11-05T23:19:00Z
featured: false
draft: false
tags:
  - Computer-Network
  - Computer-Science
  - Cable-Networks
description: Cable Networks
---

## Table of contents

## Cable Networks

- Cable television is a system of providing television to consumers via radio frequency signals transmitted to televisions through <u>fixed optical fibers or coaxial cables</u> as opposed to the over-the-air method used in traditional television broadcasting in which a television antenna is required.
- It was called **community antenna TV (CATV)** because an antenna at the top of a tall hill or building received the signals from the TV stations and distributed them, via coaxial cables, to the community.
- The cable TV office, called the **head end**, receives video signals from broadcasting stations and feeds the signals into coaxial cables.
  - Cable television **head end** is <u>a master facility for receiving television signals for processing and distribution</u> over a cable television system.
- 옛날에는 TV를 전파로 쏴 주었다. 그래서 안테나가 TV 전파를 제대로 수신하지 못할 경우(분지에 위치해 있다든지, 건물에 부딪히든지)가 있었다.
- 그래서 TV를 어떻게 잘 볼 수 있게 할 것이냐해서 나온 것이 **community antenna TV**이다.
- 사람들을 위해서 전파가 잘 잡히는 곳에 안테나를 놓고, 그것에서 전파를 받는다.
- 그것을 다시 coaxial cable로 다시 뿌려준다.
- 원칙은 무선으로 받아서, 유선으로 쏘아 주는 것이다.
- cable tv 방송사를 **head end**라고 한다.
  ![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1699263699/image_tnwrz1.png)
- receiving antenna로 깨끗한 방송을 받는다.
- head end에서 동축 케이블(coaxial cable)로 받는다.
- utp 케이블보다 bandwidth가 넓어서, 화질이 더 좋다. 그래서 동축 케이블로 전파를 쏜다.
- 근데 동축 케이블로 쏘면 멀리 못간다.
- 증폭기(amplifier)를 달아서 멀리 보낸다.
- TV를 잘 보기 위해서 꾸민 네트워크이다.
- 증폭해서 가다 보니, 화질이 안 좋아진다.
- 현족하는 매체 중에 noise가 가장 안 끼는 것이 광케이블이다.
- 그래서 광케이블로 대체한다.  
  ![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1699263878/image_gemveo.png)
- 그러면 TV에서도 광케이블로 바꿔야 하는데, 그것을 바꾸려는 가정집은 아무도 없다.
- 그래서 동네 근처까지만 광케이블로 오고, 집에서만 동축 케이블을 쓰게 된다.
- 광 케이블도 쓰고, 동축 케이블도 쓴다하여, **Hybrid fiber-coaxial network (HFC network)** 가 된다.

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

10Mbps의 데이터 속도를 가진 원래의 이더넷 기술을 Standard Ethernet이라고 부른다.
대부분의 implementation은 Ethernet 발전 과정에서 다른 기술로 이동했지만 발전 과정에서 변경되지 않은 Standard Ethernet의 일부 기능이 있다.
다른 세 가지 기술을 이해할 수 있는 길을 마련하기 위해 이 Standard Ethernet에 대해 논의한다.

### Ethernet Frame

![](/src/assets/image/data-communications-and-networking-chapter-4-lans-part2-1696177248832.jpeg)

### Physical-layer Header

- Preamble (7B): 1과 0이 교대하는 56bits
- SFD (1B): Start Frame Delimeter, flag (10101011)

이 헤더의 두 필드는 왜 있냐? Physical Layer에서 처리한다.

Preamble의 역할은 receiving system에 coming frame을 alert하는 것이다. 그리고 receiving system이 동기화돼 있지 않으면, clock을 동기화할 수 있도록 한다.

SFD는 프레임의 시작을 알린다.

간단히 정리하자면, Destination Address가 날라가는 걸 방지하기 위해 앞에 8B를 넣어 놨다.

### 앞 2개 field를 뺀 진짜 Ethernet Frame

- Destination Address (6B): 목적지 주소
- Source Address (6B): 송신지 주소
- Length / Type (2B): 어떤 경우에는 Type으로 해석되고, 또 다른 어떤 경우에는 Length로 해석된다.
  - field의 value가 1518보다 작으면, length field로 해석되고, data field의 length를 정의한다.
  - field의 vlaue가 1536보다 크면, MAC frame을 사용하는 upper-layer protocol을 정의한다. (랜카드 위에 바로 application이 올라가는 게 아니라, network layer가 있는데, network layer protocol의 종류가 엄청 많다. 그래서 그걸 구분하는 용도이다. 그럼 length는? 상위 계층에서 알아서 처리한다.)
- Data and Padding (46B ~ 1500B): 최소 Byte보다 적은 게 들어 가면 Padding으로 가짜 Byte들이 들어간다.
- CRC (Cyclic Redundancy Check) (4B): (나중에 다시 적기)

### Frame Length

Minimum Frame Length: 46B + 18B = 64B
Maximum Frame Length: 1500B + 18B = 1518B

Minimum length restriction이 있는 이유는 올바른 CSMA/CD 동작을 보장하기 위해서이다.

Maximum은 왜 있냐? 만약 1GB가 frame length라고 하면, 1GB를 보내는 동안 다른 station은 보내지를 못한다.
그래서 shared media를 monopolizing을 막기위해서 Maximum Frame Length가 있다.
그리고 랜카드의 메모리 Buffer Size도 줄여야 한다.

### Addressing

각 station은 Ethernet Network에서 자신들만의 Network Interface Card (NIC)를 갖는다.
우리는 NIC 주소를 MAC Address, Ethernet Address, Hardware Address라고 부른다.

`4A:30:10:21:10:1A` 와 같이 6B로 나타낸다.

앞의 3B는 Vendor Address (제조사)

![](/src/assets/image/data-communications-and-networking-chapter-4-lans-part2-1696220119713.jpeg)
전송은 left-to-right byte-to-byte. 하지만 각 byte에서는 LSB가 먼저 보내지고, MSB가 가장 나중에 보내진다.

Unicast Address: only one recipient를 정의한다. (source address는 항상 Unicast Address이다.)
Multicast Address: a group of addresses를 정의한다.
Broadcast Address: recipients가 netwrok에 있는 모든 stations라는 걸 의미한다.

Broadcast Address는 Hexadecimal로 `FF-FF-FF-FF-FF-FF`이다.

![](/src/assets/image/data-communications-and-networking-chapter-4-lans-part2-1696223467557.jpeg)
상기 그림을 기반으로 다음과 결론을 도출할 수 있다.
Source Address의 Byte 1의 LSB는 항상 0이고, Destination Address의 Byte 1 LSB는 Unicast Address일 경우에는 0이고, Multicast이거나 Broadcast Address일 경우에는 1이다.

### Distinguish Between Unicast, Multicast, and Broadcast Transmission

![](/src/assets/image/data-communications-and-networking-chapter-4-lans-part2-1696223903316.jpeg)
상기 그림을 통해 어떻게 Unicast, Multicast, 그리고 Broadcast transmission들이 서로 구분되는지 알아 보자.

Standard Ethernet은 기본적으로 coaxial cable (동축 케이블) 을 이용한 bus topology나 twisted pair cable (UTP or STP)과 hub를 이용한 star topology를 사용한다.

전송 의도가 unicast, multicast, broadcast이든 간에, standard Ethernet에서의 transmission은 항상 broadcast이다.

bus topology에서는 station A가 station B에게 frame 하나를 전송하면, 모든 station들이 수신한다.
star topology에서는 station A가 station B에게 frame 하나를 전송하면, hub가 수신한다.
그리고, 허브가 A를 제외한 모든 station에게 전송해 준다.

- unicast는 받아야 될 recipient만 frame을 받고 나머지 station은 frame을 discard한다.
- multicast도 똑같다.
- broadcast는 sender를 제외한 station이 모두 수신한다.

### Access Method

Standard Ethernet은 1-persistent CSMA/CD를 Media Access Method로 사용한다.
Ehternet에서 slot time은 bits로 정의된다.
slot time은 한 station이 **512 bits**를 보내는 데에 요구되는 시간이다. (Chapter 3의 CSMA/CD에서 왜 **512bits**를 보내는지 그 이유를 다뤘었다. $Minimum\;T_{fr}=2 \times T_p$이기 때문이다. 나중에 해당 블로그 글 링크로 걸기)
그렇다면, 10Mbps의 Standard Ethernet에서는 Time Interval이 51.2μs가 걸린다. (중학교 때 배운 거속시로 계산해 보면 금방 나온다.)
하기 그림을 보며 이해해 보자.
![](/src/assets/image/data-communications-and-networking-chapter-4-lans-part2-1696230966046.jpeg)
그렇다면 collision은 언제 일어날까?
최악의 경우를 생각해 보자.
station A가 있고, frame을 보내려는 destination station B가 있다고 하자.
두 station은 shared media에서 가장 양 끝단에 존재한다고 하자.
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880.529804218703 397.903763069968" width="880.529804218703" height="397.903763069968">

  <!-- svg-source:excalidraw -->

  <defs>
    <style class="style-fonts">
      @font-face {
        font-family: "Virgil";
        src: url("https://excalidraw.com/Virgil.woff2");
      }
      @font-face {
        font-family: "Cascadia";
        src: url("https://excalidraw.com/Cascadia.woff2");
      }
    </style>
    
  </defs>
  <rect x="0" y="0" width="880.529804218703" height="397.903763069968" fill="#ffffff"></rect><g stroke-linecap="round" transform="translate(80.3967444550641 116.2195316642393) rotate(0 65.32817885429944 65.32817885429944)"><path d="M32 0 M32 0 C55.98 -1.58, 82.93 -1.92, 98.66 0 M32 0 C49.41 0.16, 68.92 -0.13, 98.66 0 M98.66 0 C121.64 1.07, 129.38 11.16, 130.66 32 M98.66 0 C118.96 -1.15, 131.03 11.34, 130.66 32 M130.66 32 C132.76 48.35, 131.05 66.49, 130.66 98.66 M130.66 32 C131.35 56.21, 130.06 80.65, 130.66 98.66 M130.66 98.66 C130.52 120.18, 121.42 129.97, 98.66 130.66 M130.66 98.66 C132.52 119.46, 121.53 128.79, 98.66 130.66 M98.66 130.66 C77.38 132.39, 51.26 129.62, 32 130.66 M98.66 130.66 C76.51 130.94, 52.54 130.86, 32 130.66 M32 130.66 C10.67 132.57, 1 120.74, 0 98.66 M32 130.66 C9.19 132.45, 0.21 120.68, 0 98.66 M0 98.66 C0.46 78.46, -1.7 60.41, 0 32 M0 98.66 C0.87 83.02, -0.35 68.56, 0 32 M0 32 C1.43 11.37, 9.36 -0.79, 32 0 M0 32 C-0.19 11.99, 11.52 -1.39, 32 0" stroke="#1e1e1e" stroke-width="1" fill="none"></path></g><g transform="translate(140.72492330936353 169.54771051853874) rotate(0 5 12)"><text x="5" y="0" font-family="LocalFont, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">A</text></g><g stroke-linecap="round" transform="translate(739.8734465101041 127.48301077704951) rotate(0 65.32817885429944 65.32817885429944)"><path d="M32 0 M32 0 C50.07 1.46, 69.76 0.36, 98.66 0 M32 0 C51.43 0.79, 72.18 -0.44, 98.66 0 M98.66 0 C120.78 1.1, 132.32 10.71, 130.66 32 M98.66 0 C119.04 1.62, 128.67 11, 130.66 32 M130.66 32 C131.59 57.24, 131.05 84.11, 130.66 98.66 M130.66 32 C129.9 50.89, 129.81 67.55, 130.66 98.66 M130.66 98.66 C128.71 119.17, 120.4 132.38, 98.66 130.66 M130.66 98.66 C132.01 122, 121.93 129.35, 98.66 130.66 M98.66 130.66 C72.66 129.14, 48.26 132.05, 32 130.66 M98.66 130.66 C78.67 131.52, 58.58 130.51, 32 130.66 M32 130.66 C11.52 129.2, 1.77 121.04, 0 98.66 M32 130.66 C11.45 130.59, -2.28 120.64, 0 98.66 M0 98.66 C-0.27 76.39, -1.79 52.32, 0 32 M0 98.66 C-0.32 77.02, -0.55 53.86, 0 32 M0 32 C1.28 11.1, 11.44 -1.79, 32 0 M0 32 C2.15 11.64, 9.38 0.83, 32 0" stroke="#1e1e1e" stroke-width="1" fill="none"></path></g><g transform="translate(800.2016253644036 180.81118963134895) rotate(0 5 12)"><text x="5" y="0" font-family="LocalFont, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">B</text></g><g stroke-linecap="round"><g transform="translate(211.61627611930345 195.62705940955158) rotate(0 262.82064081726287 0.278589320376625)"><path d="M-1.04 -0.29 C86.25 -0.06, 436.88 0.45, 524.48 0.91 M0.61 -1.48 C88.2 -1.08, 438.96 1.7, 526.68 2.04" stroke="#1e1e1e" stroke-width="1" fill="none"></path></g></g><mask></mask><g stroke-linecap="round" transform="translate(10 10) rotate(0 147.8331633556345 50)"><path d="M25 0 M25 0 C120.57 2.2, 216.04 0.22, 270.67 0 M25 0 C101.76 -1.33, 178.11 -1.67, 270.67 0 M270.67 0 C285.92 -1.69, 297.54 6.52, 295.67 25 M270.67 0 C288.63 -1.37, 297.51 10.32, 295.67 25 M295.67 25 C293.3 43.14, 296.86 62.07, 295.67 75 M295.67 25 C295.19 35.11, 295.65 46.85, 295.67 75 M295.67 75 C295.43 90.14, 285.37 102, 270.67 100 M295.67 75 C294.32 90.3, 286.48 99.4, 270.67 100 M270.67 100 C180.14 99.45, 91.94 101.41, 25 100 M270.67 100 C220.49 100.19, 172.29 100.84, 25 100 M25 100 C7 100.59, 1.94 91.61, 0 75 M25 100 C6.68 98.25, 0.32 92.82, 0 75 M0 75 C-0.33 58.51, -1.48 44.39, 0 25 M0 75 C0.13 57.41, 0.56 41.73, 0 25 M0 25 C-0.97 6.82, 8.06 1.31, 25 0 M0 25 C-0.97 8.67, 6.52 -0.3, 25 0" stroke="#1e1e1e" stroke-width="1" fill="none"></path></g><g transform="translate(57.8331633556345 48) rotate(0 100 12)"><text x="100" y="0" font-family="LocalFont, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">512bits 보내는 중...</text></g><g stroke-linecap="round"><g transform="translate(220.06388545391127 179.8581886516174) rotate(0 254.41501202340757 -1.530123538564041)"><path d="M-1.16 -0.49 C83.65 -0.75, 422.72 -0.87, 507.71 -0.88 M0.43 -1.79 C85.72 -2.45, 425.37 -2.49, 509.99 -2.57" stroke="#1e1e1e" stroke-width="1" fill="none"></path></g><g transform="translate(220.06388545391127 179.8581886516174) rotate(0 254.41501202340757 -1.530123538564041)"><path d="M480.99 6.32 C488.86 6.29, 495.15 2.3, 509.3 -3.51 M481.85 6.78 C489.28 4.51, 497.24 1.79, 510.57 -2.77" stroke="#1e1e1e" stroke-width="1" fill="none"></path></g><g transform="translate(220.06388545391127 179.8581886516174) rotate(0 254.41501202340757 -1.530123538564041)"><path d="M480.98 -14.2 C488.97 -10.04, 495.27 -9.84, 509.3 -3.51 M481.83 -13.74 C489.28 -10.24, 497.24 -7.18, 510.57 -2.77" stroke="#1e1e1e" stroke-width="1" fill="none"></path></g></g><mask></mask><g transform="translate(251.60162696977994 142.420141978579) rotate(0 160 12)"><text x="0" y="0" font-family="LocalFont, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">1bit가 B가 거의 도달하기 전에...</text></g><g stroke-linecap="round"><g transform="translate(730.2994892642156 226.0384530141394) rotate(0 -254.65303044647447 -1.961345811072917)"><path d="M0.42 0.54 C-84.51 -0.34, -423.79 -3.69, -508.89 -4.46 M-0.82 -0.23 C-85.95 -1.06, -425.23 -3.01, -509.72 -3.49" stroke="#1e1e1e" stroke-width="1" fill="none"></path></g><g transform="translate(730.2994892642156 226.0384530141394) rotate(0 -254.65303044647447 -1.961345811072917)"><path d="M-480.58 -13.22 C-493.26 -11.64, -502.64 -6.53, -509.06 -2.64 M-480.72 -13.9 C-487.99 -11.9, -492.46 -9.05, -510.11 -2.5" stroke="#1e1e1e" stroke-width="1" fill="none"></path></g><g transform="translate(730.2994892642156 226.0384530141394) rotate(0 -254.65303044647447 -1.961345811072917)"><path d="M-480.7 7.3 C-493.47 1.58, -502.81 -0.61, -509.06 -2.64 M-480.84 6.63 C-488 4.35, -492.44 2.93, -510.11 -2.5" stroke="#1e1e1e" stroke-width="1" fill="none"></path></g></g><mask></mask><g transform="translate(297.2187173766614 238.7228883931066) rotate(0 130 12)"><text x="0" y="0" font-family="LocalFont, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">B도 1bit를 보내기 시작하면</text></g><g transform="translate(211.05310216366303 315.903763069968) rotate(0 205 36)"><text x="0" y="0" font-family="LocalFont, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">A에서 보낸 bit가 B에 도착직전에 </text><text x="0" y="24" font-family="LocalFont, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">B에서 보낸 bit와 섞여서 A에 다시 도착하고</text><text x="0" y="48" font-family="LocalFont, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">collision을 감지하게 된다.</text></g></svg>
  위 그림과 같은 상황이 발생하게 된다.
  그러니깐, collision은 slot time의 first half 동안에만 일어나게 된다.
  이유는 위의 최악의 상황을 가정한 위의 그림을 보며 생각해 보자. (1bit가 B에 도달하기 직전에 B가 carrier sense를 하여, 자기도 512bits 중 1bit를 보내기 시작하고, 그래서 결국 $T_p$ 에 수렴한 시간 즉, half of slot time인 25.6μs에 collision이 발생하게 되는 것이다.)

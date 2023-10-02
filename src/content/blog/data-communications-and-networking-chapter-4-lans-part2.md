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
그렇다면, 10Mbps의 Standard Ethernet에서는 Time Interval이 51.2$\mu s$가 걸린다. (중학교 때 배운 거속시로 계산해 보면 금방 나온다.)
하기 그림을 보며 이해해 보자.
![](/src/assets/image/data-communications-and-networking-chapter-4-lans-part2-1696230966046.jpeg)

### 첫 번째 bit의 모험...

그렇다면 collision은 언제 일어날까?
최악의 경우를 생각해 보자.
station A가 있고, frame을 보내려는 destination station B가 있다고 하자.
두 station은 shared media에서 가장 양 끝단에 존재한다고 하자.
network는 10Mbps의 data rate를 가지고, maximum propagation time은 25.6$\mu s$ propagation speed는 $2 \times 10^8m/s$라 하자. (그렇다면, 거속시를 이용해 잘 계산해 보면, cable 길이는 5120$m$인 것을 알 수있다.)
![](/src/assets/image/data-communications-and-networking-chapter-4-lans-part2-1696235756573.jpeg)
위 그림과 같은 상황이 발생하게 된다.
그러니깐, collision은 slot time의 first half 동안에만 일어날 수 있게 된다.
이유는 위의 최악의 상황을 가정한 위의 그림을 보며 생각해 보자. (1bit가 B에 도달하기 직전에 B가 carrier sense를 하여, 자기도 512bits 중 1bit를 보내기 시작하고, 그래서 결국 Maximum $T_p$ 에 수렴한 시간 즉, half of slot time인 25.6$\mu s$에 collision이 발생하게 되는 것이다.)
그리고 만약 first half of slot time에 collision이 일어난다면, 이 collision은 sender가 slot time (first 512 bits times) 동안 sense할 수 있다.
만약 이 시간 이후에 collision이 일어나서, collision이 다시 A로 돌아와서 (최악의 경우 25.6$\mu s$ 동안 다시 A로 돌아가겠죠?), collision detection이 돼, collision error가 first 512 bits times 이후에 발생했다고 하면, late collision이 일어났다고 한다. (주로 케이블 길이를 너무 길게 설정했을 때 주로 일어난다.)

### Cable Length 계산

$$MaxLength=Propagation\,Speed \times SlotTime/2$$
$$ MaxLength=(2*10^8)*(51.2\*10^{-6}/2) = 5120m$$
위 수식에 따라 Propagation Speed (빛의 속도) 를 20만 km/s로 잡고, 충돌이 SlotTime의 절반 시간 안에 일어나니 계산 결과가 5120m가 나온다. (이론적으로)
그런데, repeater와 interface들에서 발생하는 딜레이와 jam sequence를 보내는 데에 들어가는 시간을 고려하여, Standard Ethernet에서는
**MaxLength = 2500m**이다.

### Implementation

![](/src/assets/image/data-communications-and-networking-chapter-4-lans-part2-1696250622335.jpeg)
![](/src/assets/image/data-communications-and-networking-chapter-4-lans-part2-1696250662099.jpeg)

- 10Base5: data rate가 10Mbps, Baseband (digital) signal 사용, 500m thick coaxial케이블 사용 (500m니깐 5개 연결 가능)
- 10Base2: data rate가 10Mbps, Baseband (digital) signal 사용, 200m에 준하는 185m thin coaxial 케이블 사용
- 10Base-T: data rate가 10Mbps, Baseband (digital) signal 사용, 100m UTP 케이블 사용
- 10Base-F: data rate가 10Mbps, Baseband (digital) signal 사용, 2000m fiber-optic 케이블 (광케이블) 사용

### Encoding and Decoding

![](/src/assets/image/data-communications-and-networking-chapter-4-lans-part2-1696250805426.jpeg)

### 10Base5: Thick Ethernet

![](/src/assets/image/data-communications-and-networking-chapter-4-lans-part2-1696251379388.jpeg)

- Transceiver: a transmitter and a receiver
  주의 깊게 살펴봐야할 것은 transceiver이다. transceiver는 transmitting, receiving 그리고 collision dectection을 책임진다.
  Thick coaxial에 **tap**을 통해 연결된다.
  Station에는 **Transceiver cable**을 통해 연결된다. (maximum 50m)
  500m라는 제한을 둔 것은 신호가 감쇠되기 때문이다.
  멀리 갈수록 신호가 줄어든다.
  그만큼 감쇠되는 걸 막으려면 power를 많이 써야 하기 때문에, 그러면 전력소모가 너무 심해서 500m로 끊은 것이다.

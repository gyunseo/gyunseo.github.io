---
author: Gyunseo Lee
title: 왜 Node.js에서 Pino Logger를 이용한 Log I/O는 CPU Usage에 큰 영향이 없을까?
pubDatetime: 2024-07-08T00:06:00+09:00
modDatetime: 2024-07-08T00:06:00+09:00
featured: true
draft: false
tags:
  - Computer-Science
  - Node
description: Node에 대한 깊은 이해를 해 봅시다...
ogImage: ""
---

## Table of contents

## 들어가며

최근에 프로젝트를 운영하면서, 동시에 많은 사용자들이 가입을 시도하려했을 때, 높은 CPU Usage가 찍혀서 서비스가 죽었던 일이 있었습니다.  
I/O가 무거웠기 때문에, CPU Usage가 높게 찍혀서 서비스가 죽었을 것이라고 처음에 생각했는데, 다시 곰곰이 생각해 보니 이는 틀린 이야기였습니다. (병목 구간은 CPU-Intensive한 Argon2 함수였습니다...)  
좌우지간 저의 이런 틀린 생각을 한번 반박해 보겠습니다.

---
title: zsh에 ohmyzsh을 설치하자.
pubDatetime: 2023-10-08T17:34:00Z
featured: false
draft: false
tags:
  - test
ogImage: ""
description: 기본 zsh은 너무 앙상하다.
---

## Table of contents

## 들어가며

[Ubuntu Linux에 zsh을 설치하고, default shell을 zsh로 바꾸자.](install-zsh-on-ubuntu-linux.md)에서 Ubuntu Linux의 default shell을 bash에서 zsh로 변경했다.  
변경을 했지만은, 아무런 theme가 적용되지 않은 zsh은 너무 못생겼다.  
그래서 `ohmyzsh`을 설치하여, shell을 꾸며보자.

## Install prerequisites

```zsh
sudo apt install -y curl wget git
```

## Install ohmyzsh

```zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

![](/src/assets/image/install-ohmyzsh-on-zsh-1696755087617.jpeg)
설치가 완료되면 상기 사진과 같이 shell이 나온다.

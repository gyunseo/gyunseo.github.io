---
title: Ubuntu Linux에 asdf를 설치하고, ohmyzsh에 asdf plugin을 추가하자.
pubDatetime: 2023-10-08T20:30:00Z
featured: false
draft: false
tags:
  - Ubuntu
  - Linux
  - ohmyzh
  - asdf
ogImage: ""
description: zsh의 framework의 세계는 엄청나다.
---

## Table of contents

## 들어가며

`node.js`, `python`, `jdk` 버전을 편하게 통합으로 관리할 수 있는 `asdf`를 Ubuntu Linux에 설치하려고 한다.  
[zsh에 ohmyzsh을 설치하자.](install-ohmyzsh-on-zsh.md)에서 `ohmyzsh` framework에 Theme와 Plugin을 추가했다.  
`asdf`도 `ohmyzsh`에 통합을 할 수 있다고 한다.  
그래서 그 방법을 소개하려고 한다.

## `asdf`를 git clone으로 download하기

```zsh
git clone https://github.com/asdf-vm/asdf.git ~/.asdf
```

![](/src/assets/image/install-asdf-on-ubuntu-linux-and-ohmyzsh-1696765333415.jpeg)

## `asdf` 활성화하기

`~/.zshrc`의 `plugins` 정의에 `asdf`를 추가해, `asdf`를 활성화한다.

```zsh
nvim ~/.zshrc
```

![](/src/assets/image/install-asdf-on-ubuntu-linux-and-ohmyzsh-1696765514519.jpeg)
상기 이미지처럼
`plugins=(asdf)`를 추가한다.
그러면 `asdf`가 `ohmyzsh` framework에 통합이 되어, `asdf`를 사용할 수 있게 된다.

```zsh
asdf --version
```

![](/src/assets/image/install-asdf-on-ubuntu-linux-and-ohmyzsh-1696765667860.jpeg)

## 참고 문서

- <https://asdf-vm.com/guide/getting-started.html>
- <https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf>

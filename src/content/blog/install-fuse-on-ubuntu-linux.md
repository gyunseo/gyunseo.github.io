---
title: Ubuntu Linux에 FUSE 설치하기
pubDatetime: 2023-09-28T03:25:00Z
featured: false
draft: false
tags:
  - Ubuntu
  - Linux
  - FUSE
ogImage: ""
description: Ubuntu Linux에서 FUSE를 설치하는 과정을 담았습니다.
---

## Table of contents

## 들어가며

[`neovim` stable release](https://github.com/neovim/neovim/releases/tag/stable)에서 나온 대로 `neovim`을 amd64 linux에 설치하려 했다.
`nvim.appimage`를 다운로드 받아, 실행 권한을 주고 binary를 실행하려 했는데 시스템에FUSE가 없다며 에러가 나오면서 오류가 났다.
그래서 FUSE를 설치하려 한다.

## Ubuntu Linux Version 확인

```bash
lsb_release -a
```

상기 명령어로 Ubuntu의 버전을 확인하자.
필자는 하기와 같이 나왔다.
![](/src/assets/image/install-fuse-on-ubuntu-linux-1695839485146.jpeg)

## `FUSE 2.x` 설치

Ubuntu 22.04.3 LTS에는 default로 `fuse3` package가 설치됐을 것이다.
하기 명령어로 설치됐는지 확인해 보자.

```bash
dpkg -l | grep fuse3
```

`ii fuse3`로 시작하는 line이 있는지 확인한다. (해당 line이 없으면 `fuse3`가 설치돼 있지 않은 것이다.)

---
title: vscode에 neovim extension 설치하기
pubDatetime: 2023-09-28T01:15:00Z
featured: false
draft: false
tags:
  - vscode
  - neovim
  - vim
  - extension
ogImage: ""
description: vscode에 neovim extension 설치 과정을 담았습니다.
---

## Table of contents

## 들어가며

이전에 vscode에 vim extension을 깔아서 잠깐 사용했었던 적이 있었다.
하지만 한글 입력에 문제와 생각보다 불편했어서, 금방 삭제했던 기억이 있다.
그런데 인터넷 서핑을 좀 해보니, vscode에 neovim extension을 붙여서 쓰면 생각보다 쓸 만하다고들 한다.
그리고 chrome에서도 extension으로 vimium을 써보니 편하기도 했고, 코딩할 때 마우스에 손을 갖다 대지 않고, 키보드로만 코딩을 한다면 조금 더 딴 짓을 안 하고 코딩에 집중할 수 있지 않을까라는 막연한(?) 기대감이 있기도 하다.
그래서 그 과정을 담은 post를 작성하려고 한다.

## Windows에 neovim 설치

```powershell
winget install Neovim.Neovim
```

Powershell Core에서 상기 커맨드를 입력해 `winget`으로 neovim을 설치해 준다.

## `nvim` binary 환경변수에 등록

![](/src/assets/image/install-neovim-extension-on-vscode-1695832925388.jpeg)

상기 이미지에서 환경 변수를 클릭한다.

시스템 변수 `PATH`에 `nvim` binary가 위치한 directory path를 추가합니다.
![](/src/assets/image/install-neovim-extension-on-vscode-1695833078369.jpeg)
![](/src/assets/image/install-neovim-extension-on-vscode-1695833307604.jpeg)
상기 이미지와 같이 하면 된다.

## vscode에서 neovim executable paths 등록

![](/src/assets/image/install-neovim-extension-on-vscode-1695833833572.jpeg)

vscode settings에서 상기 그림과 같이 neovim executable paths를 등록한다.

Windows의 경우: `C:\Program Files\Neovim\bin\nvim.exe`
Linux의 경우: `/usr/bin/nvim` (WSL의 경우, 마지막 Use WSL을 체크해 주면 된다.)

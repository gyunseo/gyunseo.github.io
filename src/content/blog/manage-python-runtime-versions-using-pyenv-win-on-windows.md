---
title: pyenv-win을 이용해 Windows에서 Python Runtime Version 관리하기
pubDatetime: 2023-10-22T17:26:00Z
featured: false
draft: false
tags:
  - Python
  - Windows
description: windows에서 python runtime version을 manage하자...
---

## Table of contents

## 들어가며

windows local에서 python을 돌릴 때 주로 WSL2를 쓰긴하지만, 혹시 몰라서 설정을 해둔다.

## Installation

```powershell
Invoke-WebRequest -UseBasicParsing -Uri "https://raw.githubusercontent.com/pyenv-win/pyenv-win/master/pyenv-win/install-pyenv-win.ps1" -OutFile "./install-pyenv-win.ps1"; &"./install-pyenv-win.ps1"
```

Powershell 종료 후, 다시 Powershell 열기.  
하기 명령어로 `pyenv-win`이 제대로 설치됐는지 확인하자.

```powershell
pyenv --version
# outputs: pyenv 3.1.1
```

## 참고 문서

- <https://github.com/pyenv-win/pyenv-win>

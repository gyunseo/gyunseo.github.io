---
title: jabba를 이용해 Windows에서 JDK 버전 관리하기
pubDatetime: 2023-10-22T16:53:00Z
featured: false
draft: false
tags:
  - Windows
  - jabba
  - JDK
description: IntelliJ + WSL 조합이 잘 안 돼서, Windows에 직접 JDK를 설치하자...
---

## Table of contents

## 들어가며

필자는 Windows Laptop을 사용한다.  
그래서 Windows native IntelliJ + WSL 조합으로 Java 개발을 하려고 했다.  
아뿔싸! 근데 상기 조합은 정말 최악이다.  
그래서 그냥 Windows native JDK + Windows native IntelliJ 조합으로 개발을 진행하려 한다.  
Linux/Mac처럼 `asdf`같은 기똥한 version manager가 없긴하지만, [jabba](https://github.com/shyiko/jabba)를 이용하면, Windows에서도 JDK 버전 관리가 가능하다.  
본격적으로 Windows에서 `jabba`를 설치하기 전에, [IntelliJ가 설치한 JDK 삭제하기](remove-jdks-installed-by-intellij.md) 포스트를 읽고, IntelliJ에 설치된 `JDK`를 삭제해 주자.

## Installation

```powershell
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
Invoke-Expression (
  Invoke-WebRequest https://github.com/shyiko/jabba/raw/master/install.ps1 -UseBasicParsing
).Content
```

하기 명령어로 설치가 제대로 됐는지 확인할 수 있다.

```powershell
jabba --version
# outputs: 0.11.2
```

## Uninstallation

> `%USERPROFILE%\.jabba` (on Windows).  
> If at any point of time you decide to uninstall **jabba** - just remove this directory.

`%USERPROFILE%\.jabba` folder를 지우면 된다.

## 참고 문서

- <https://github.com/shyiko/jabba>

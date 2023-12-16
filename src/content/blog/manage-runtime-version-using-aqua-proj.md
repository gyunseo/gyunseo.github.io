---
title: Aqua를 이용하여 rutnime version을 관리하자
pubDatetime: 2023-12-16T20:23:00Z
featured: false
draft: false
tags:
  - Aqua
  - Version-Manager
  - Windows
  - Linux
  - WSL
  - Ubuntu
description: windows에서 asdf대신 aqua를...
---

## Table of contents

## 들어가며

Windows에는 Linux와 macOS에서 쓰이는 `asdf`라는 runtime version manager를 사용할 수 없다.  
그래서 이것 저것 서칭을 해 보다가.  
어떤 일본 분이 만드신 `aqua`라는 것을 알아 냈다.  
그래서 이걸로 Windows에서 runtime version managing을 해 보려고 한다.  

## `aqua` 설치

### Download prebuilt binaries from GitHub Releases
- <https://github.com/aquaproj/aqua/releases>

상기 URI로 접속하여, Windows Binary를 다운로드 받는다.  


## 환경 변수 `PATH` 설정

![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1702727066/image_olpj61.png)

상기 이미지처럼 `$env:LOCALAPPDATA\aquaproj-aqua\` 디렉터리에 `bat` 폴더와 `bin` 파일을 만들어 놓는다.  
그리고 하기 사진처럼 `bin\`  디렉터리에 다운로드 받아 놓았던 Windwos `aqua` binary를 복사해 놓는다.  
![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1702727443/image_dnl4fw.png)

그리고 `Powershell`에 Administrator 권한 session으로 접속한다.  

```powershell
[System.Environment]::SetEnvironmentVariable("AQUA_ROOT_DIR", "$env:LOCALAPPDATA\aquaproj-aqua\", [System.EnvironmentVariableTarget]::Machine)
```

![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1702727647/image_xxtqyc.png)

상기 이미지처럼 입력을 한다.  
`PowerToys`에 들어가서 확인하니, 잘 바뀐 것을 알 수 있다.  
![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1702727685/image_nzmx7o.png)

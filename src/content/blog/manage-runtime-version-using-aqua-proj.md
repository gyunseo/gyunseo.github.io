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


## 환경 변수 `AQUA_ROOT_DIR`, `PATH` 설정

![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1702727066/image_olpj61.png)

상기 이미지처럼 `$env:LOCALAPPDATA\aquaproj-aqua\` 디렉터리에 `bat` 폴더와 `bin` 파일을 만들어 놓는다.  
그리고 하기 사진처럼 `bin\`  디렉터리에 다운로드 받아 놓았던 Windwos `aqua` binary를 복사해 놓는다.  
![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1702727443/image_dnl4fw.png)

그리고 `Powershell`에 Administrator 권한 session으로 접속한다.  

```powershell
[System.Environment]::SetEnvironmentVariable("AQUA_ROOT_DIR", "$env:LOCALAPPDATA\aquaproj-aqua", [System.EnvironmentVariableTarget]::Machine)
```
![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1702727944/image_aawcez.png)

상기 이미지처럼 입력을 한다.  
`PowerToys`에 들어가서 확인하니, 잘 바뀐 것을 알 수 있다.  
![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1702727960/image_pezbp6.png)

그 다음 다시 일반 `User` Session으로 `Powershell`에 접속을 하고, 하기 명령어를 입력한다.  

```powershell
Set-Item Env:Path "$Env:AQUA_ROOT_DIR\bat;$Env:AQUA_ROOT_DIR\bin;$ENV:Path"
```

![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1702728014/image_syi9vb.png)

상기 이미지처럼 잘 환경 변수 `PATH`가 설정된 것을 알 수 있다.  
그런데 이렇게 설정을 하면 Powershell Session이 종료되면, 다시 `$env:PATH`  값은 초기화 된다.  
세션을 종료했다가, 다시 접속하면 하기 이미지처럼 다시 `$env:PATH` 값이 초기화 된 것을 알 수 있다.  
![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1702729284/image_losnm8.png)

그래서 초기화 되지 않게 하려면, **Administrator** 권한으로 Powershell에 접속하여, 하기 script를 입력한다.  

```powershell
$envPath = [System.Environment]::GetEnvironmentVariable("Path", [System.EnvironmentVariableTarget]::Machine)
$newPath = "$Env:AQUA_ROOT_DIR\bat;$Env:AQUA_ROOT_DIR\bin;$envPath"
[System.Environment]::SetEnvironmentVariable("Path", $newPath, [System.EnvironmentVariableTarget]::Machine)
```
![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1702729408/image_gb9qpw.png)
![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1702729416/image_idw76o.png)
그러면 상기 이미지 처럼 잘 변한 것을 확인할 수 있다.  
다시 일반 User Session으로 Powershell에 접속하여, `$env:PATH`가 잘 설정됐는지 확인해 보자.  

```powershell
echo $env:PATH | findstr aquaproj-aqua
```
![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1702729540/image_sfhbto.png)
(잘 나오네 ㅎㅎ)

## 환경 변수 `AQUA_GLOBAL_CONFIG` 설정

하기 이미지처럼 `$HOME` 디렉터리에 `.config` 디렉터리를 생성한다.  
![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1702730263/image_bzjsee.png)


## 참고 문서
- <https://aquaproj.github.io/docs/install#download-prebuilt-binaries-from-github-releases>
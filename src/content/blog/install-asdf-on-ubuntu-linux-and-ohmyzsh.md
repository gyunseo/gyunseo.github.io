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

## Plugin Dependencies 설치

```zsh
sudo apt-get install -y dirmngr gpg curl gawk
```

본격적으로 `asdf` plugin을 설치하기 전에, plugin 의존성 패키지들을 설치한다.

## Plugin 설치

하기 명령어로 `node.js` plugin을 설치한다.

```zsh
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
```

## Version 설치

하기 명령어로 모든 `node.js` runtime version을 볼 수 있다.

```zsh
asdf list all nodejs
```

원하는 경우 하기 명령어로 특정 version의 subset을 볼 수도 있다.

```zsh
asdf list all nodejs 18
```

필자는 `node.js` lts 버전을 설치할 것이다.
그전에 하기 명령어를 통해, 현재 시점에서 `nodejs` lts version을 확인하자.

```zsh
# Before checking for aliases, update nodebuild to check for newly releasead versions
asdf nodejs update-nodebuild

asdf nodejs resolve lts
# outputs: 18

# Outputs the latest version available for download which is a LTS
asdf nodejs resolve lts --latest-available
# outputs: 18.18.0
```

하기 명령어로 현재 시점에서의 lts version인 18.18.0 version을 설치한다.

```zsh
asdf install nodejs 18.18.0
```

설치가 완료되면 하기 명령어로 `nodejs` runtime version의 list를 확인할 수 있다.

```zsh
asdf list nodejs
```

![](src/assets/image/install-asdf-on-ubuntu-linux-and-ohmyzsh-1696766814971.jpeg)

## Version 설정하기

## 참고 문서

- <https://asdf-vm.com/guide/getting-started.html>
- <https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf>
- <https://github.com/asdf-vm/asdf-nodejs>

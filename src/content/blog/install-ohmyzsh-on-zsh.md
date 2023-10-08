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

## `.zshrc` 설정

> _Note that any previous `.zshrc` will be renamed to `.zshrc.pre-oh-my-zsh`.
> After installation, you can move the configuration you want to preserve into the new `.zshrc`._

[ohmyzsh github repo](https://github.com/ohmyzsh/ohmyzsh)에 상기와 같은 내용이 나와 있다.  
그래서 우리가 애써 `zsh`을 설치하고 나서 설정했던, locale 설정이 다시 원복됐다.

```zsh
locale
```

![](/src/assets/image/install-ohmyzsh-on-zsh-1696755283145.jpeg)
상기 이미지와 같이 모든 locale이 `ko_KR.UTF-8`로 돼있는 것을 알 수 있다.

```zsh
vim ~/.zshrc
```

![](/src/assets/image/install-ohmyzsh-on-zsh-1696755380622.jpeg)
`vim`으로 `.zshrc` 마지막 line에

```zsh
export LC_MESSAGES=en_US.UTF-8
```

을 추가하여, `zsh`에서 `LC_MESSAGES`는 `en_US.UTF-8` locale로 확인하고자 한다.

```zsh
source ~/.zshrc
```

상기 명령어로 logout하지 않고, 현재 shell session에 설정을 바로 반영하자.
![](/src/assets/image/install-ohmyzsh-on-zsh-1696755481464.jpeg)

`LC_MESSAGES`만 `en_US.UTF-8`로 잘 설정이 된 것을 알 수 있다.

## Theme

```zsh
vim ~/.zshrc
```

`ZSH_THEME`을 `agnoster`로 변경한다.
![](/src/assets/image/install-ohmyzsh-on-zsh-1696755659805.jpeg)
![](/src/assets/image/install-ohmyzsh-on-zsh-1696755690229.jpeg)

```zsh
source ~/.zshrc
```

상기 명령어로, 현재 shell session에서 logout하지 않고, 바뀐 `.zshrc` 설정을 바로 반영하자.

## Plugin

나중에 좀 더 공부하고 작성 예정

## 참고 문서

<https://github.com/ohmyzsh/ohmyzsh>

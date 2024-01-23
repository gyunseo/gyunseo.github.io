---
author: "\bGyunseo Lee"
title: Zsh에서 Neovim 설정하기
pubDatetime: 2024-01-23T22:33:00Z
modDatetime: 2024-01-23T22:33:00Z
featured: true
draft: false
tags:
  - neovim
  - zsh
  - MacOS
description: 조금 복잡하지만 하고 나면 뭔가 뿌듯...?!
---

## Table of contents

## 들어가며

최근에 맥북프로 💻🍎를 구입했습니다. 😀(행복)
그래서 이것 저것 세팅을 했는데요.  
아무래도 Windows랑 달리, MacOS가 BSD기반 커널이기도 하고, 또 기본 터미널이 Zsh이기도 하여서, 이참에 Neovim으로 개발환경 설정을 하면 좋을 것 같아서 설정을 하려고 합니다.

## `neovim` 설치하기

MacOS의 대표적인 Package Manager인 Homebrew 🍺를 이용해, `neovim`을 설치해 줍시다.

```zsh
brew install neovim
```

그러면 이제 터미널에서 `nvim` command를 통해, neovim 프로그램 실행이 가능해 집니다.

![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1706017235/image_i80h4j.png)
![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1706017251/image_ffdkeq.png)

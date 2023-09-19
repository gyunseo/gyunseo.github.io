---
title: Astro Paper Theme를 Github Pages에서 Deploy하자!
pubDatetime: 2023-09-10T16:10:00Z
featured: true
draft: false
tags:
  - blog
  - github-pages
  - Astro
  - astro-paper
ogImage: ""
description: Astro Paper Theme을 Github Pages에 배포하는 과정을 담았습니다.
---

## Table of contents

## 들어가며

오랫동안 미뤄 왔던 블로그 제작... 오늘 그 작업을 시작하고 그리고 드디어 마무리 했다.
이 글에서는 그 과정을 다룬다. (~~나중에 내가 까먹으면 다시 보려고~~)

## Astro Paper Theme fork하기

[Astro Themes](https://astro.build/themes/?search=)에서 blog theme로 사용할 만한 theme를 둘러 봤다.
그런데, blog로 filtering했을 때 가장 좌측 상단에 위치해 있고, GitHub Star도 많이 받은 [Astro Paper](https://github.com/satnaing/astro-paper)가 눈에 띄었다.
그래서 해당 repo를 내 github.io [repo](https://github.com/gyunseo/gyunseo.github.io)로 fork해서 사용했다.

## fork된 github.io repo setting

### branch 관리

![](/public/image/deploy-astro-paper-on-gh-1694966803545.jpeg)
Github Actions으로 Build와 Deploy를 동시에 하는 branch인 `gh-pages` branch를 default branch로 두었다.
그리고, [downstream](https://github.com/gyunseo/gyunseo.github.io)의 `main` branch는 [upstream](https://github.com/satnaing/astro-paper)인 Astro Themes의 `main`에서 주기적으로 pull해 와서, major한 변경 사항이 있다면 반영을 해준다.
또, `gh-pages` branch에서는 pull된 `main` branch를 merge하는 식으로 blog repo branch를 관리할 것이다.

###

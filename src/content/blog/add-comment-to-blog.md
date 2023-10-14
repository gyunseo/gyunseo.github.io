---
title: 블로그에 Comment 추가하기
pubDatetime: 2023-10-14T20:22:00Z
featured: true
draft: false
tags:
  - blog
  - Comment
description: giscus는 GitHub 계정이 없는 사람의 경우 이용할 수가 없다...
---

## Table of contents

## 들어가며

최근에 블로그에 giscus를 이용해 댓글 기능을 달았었다. (giscus를 블로그에 달기 포스트 작성하기)
giscus는 GitHub 계정을 가진 사람만이 댓글을 달 수 있어서, 아무래도 일반인들에게는 댓글 작성에 있어 어려움이 존재한다.  
그래서 이번 포스트에서는 [isso](https://github.com/posativ/isso/)를 이용해, blog에 comment 기능을 추가하려고 한다.

## [isso](https://github.com/posativ/isso/)Repository git clone하기

하기 명령어로 git clone을 하자.

```zsh
git clone https://github.com/posativ/isso.git
```

그 다음 vscode를 이용하든, 그대로 shell에서 편집을 하든 마음대로 repo의 file들과 repository들을 수정 및 변경하면 된다.

## `$PWD/config`, `$PWD/db` Directory 생성

하기 명령어로, isso repository에 `config`와 `db` directory를 생성하자.

```zsh
# isso repository에서...
pwd
# outputs: /home/gyunseo/isso
mkdir config db
ls | grep config db
# outputs: db
ls | grep config config
# outputs: config
```

##

## docker compose를 이용하여, 로컬에서 돌려 보기

## 참고 문서

- <https://isso-comments.de/docs/reference/installation/#using-docker>
- <https://isso-comments.de/docs/reference/server-config/>
- <https://djangocas.dev/blog/hugo/isso-static-blog-comments-setup-and-internal/>
- <https://oktomus.com/posts/2020/add-comments-to-a-static-blog-with-isso/>

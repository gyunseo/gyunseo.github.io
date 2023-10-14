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

## isso를 docker를 이용하여, 로컬에서 돌려 보기

일단은 isso를 본격적으로 서버에 돌리기 전에, 내 로컬 laptop에서 돌려 보며 어떻게 작동하는지 알아 보자.

일단 하기 명령어로 local machine에 `/var/lib/isso` directory를 만들어야 한다.

```zsh
sudo mkdir /var/lib/isso
```

그 다음, `/var/lib/isso/isso.cfg` file을 만들어, 하기와 같이 설정 파일에 내용을 기록한다.
`sudo nvim /var/lib/isso/isso.cfg`로 configuration file을 만들어서, 수정한다.

```
[general]
dbpath = /db/comments.db
host = http://localhost/
[server]
listen = http://localhost:8080/
```

그런 다음, 하기 명령어로 isso의 offical docker image를 pull한다.

```zsh
docker pull ghcr.io/isso-comments/isso:latest
```

`docker image ls` 명령어로 pull 받아 온, docker image를 확인할 수 있다.

그 다음, 하기 명령어로 docker conatiner를 만들어, docker isso server를 run한다.

```zsh
docker run -d --rm --name isso -p 127.0.0.1:8080:8080 \
    -v /var/lib/isso:/config -v /var/lib/isso:/db \
    ghcr.io/isso-comments/isso:lates
```

## 참고 문서

- <https://isso-comments.de/docs/reference/installation/#using-docker>
- <https://isso-comments.de/docs/reference/server-config/>
-

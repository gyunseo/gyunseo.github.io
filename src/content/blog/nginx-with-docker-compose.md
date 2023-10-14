---
title: Docker Compose로 Nginx 띄우기
pubDatetime: 2023-10-15T00:25:00Z
featured: true
draft: false
tags:
  - Docker
  - Docker-Compose
  - Nginx
description: docker compose를 이용해 nginx를 띄워 보자.
---

## Table of contents

## 들어가며

최근에 `isso`를 docker로 띄워서 blog에 붙이려고 했다.  
그런데 이 때 nginx도 같이 띄워야 하는데, local에 nginx를 설치하기 싫어서, docker compose를 이용해 띄워 보려고 한다.

## Docker로 Nginx 서비스 띄우기

```zsh
docker pull nginx
```

```zsh
docker run --name nginx-server -d -p 80:80 nginx
```

## Webapp을 위한 Nginx Docker Image Build하기

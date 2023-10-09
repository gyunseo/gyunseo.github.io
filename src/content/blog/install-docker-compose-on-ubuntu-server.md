---
title: Ubuntu Server에 Docker Compose 설치하기
pubDatetime: 2023-10-09T18:28:00Z
featured: false
draft: false
tags:
  - Ubuntu
  - Linux
  - Docker
  - Docker-Compose
ogImage: ""
description: docker compose plugin 설치하기...
---

## Table of contents

## 들어가며

[Ubuntu Server에 Docker Engine 설치하기.](install-docker-engine-on-ubuntu-server.md)에서 Ubuntu Server에 Docker Engine을 설치했다.  
이제 Docker Compose를 설치하자.

## `zsh` 명령어

```zsh
# apt repository update
sudo apt-get update -y
# donwload and install
sudo apt-get install -y docker-compose-plugin
# verify the package
docker compose version
# outputs: Docker Compose version v2.21.0
```

## `$USER` docker group에 추가

```zsh
sudo usermod -aG docker $USER
```

## 참고 문서

- <https://docs.docker.com/compose/install/linux/#install-using-the-repository>
- <https://code.visualstudio.com/docs/devcontainers/containers>

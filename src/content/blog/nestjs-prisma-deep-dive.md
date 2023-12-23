---
title: NestJS Prisma Deep Dive
pubDatetime: 2023-12-24T01:51:00Z
featured: true
draft: false
tags:
  - NestJS
  - TypeScript
  - Prisma
  - JavaScript
  - Web
  - Backend
description: NestJS + Prisma로 Web Backend API 서버 개발하기...
---

## Table of contents

## 들어가며

- <https://www.youtube.com/watch?v=skQXoZ8chxk>

상기 유튜브 링크의 좋은 강좌를 발견했습니다.  
공부하면서 노트하는 포스트입니다. 😊

## NestJS 설치

```zsh
# node version: v20.10.0
npm i -g @nestjs/cli@latest
```

저는 미리 `nestjs-prisma-deep-dive`라는 directory를 만들었습니다 ㅎㅎ

```zsh
cd nestjs-prisma-deep-dive
nest new .
```

package manager로는 `pnpm`을 사용합니다.

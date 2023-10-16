---
title: Ubuntu Power Off Freezing 현상 해결하기
pubDatetime: 2023-10-16T21:34:00Z
featured: false
draft: false
tags:
  - Linux
  - Ubuntu
  - Nvidia
description: Lenovo Yoga Slim 7 Pro X에 Ubuntu를 처음 설치하면, power off를 했을 때 벽돌이 된다...
---

## Table of contents

## 들어가며

## how to

```zsh
apt search nvidia-driver
```

```
apt-cache search 'nvidia-driver-' | grep '^nvidia-driver-[[:digit:]]*'
apt-cache search 'nvidia-driver-' | grep '^nvidia-driver-[[:digit:]]*' | sort -k 3 -t '-'
## search for DKMS package too ##
apt-cache search 'nvidia-dkms-' | grep '^nvidia-dkms-[[:digit:]]*'

```

## aaaa

- <https://askubuntu.com/questions/1482328/ubuntu-shutdown-prevent-kvm-exiting-hardware-virtualization>
- <https://www.cyberciti.biz/faq/ubuntu-linux-install-nvidia-driver-latest-proprietary-driver/>
-

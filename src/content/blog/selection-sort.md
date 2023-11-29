---
title: Selection Sort
pubDatetime: 2023-11-29T15:36:00Z
featured: false
draft: false
tags:
  - selection-sort
  - Algorithms
  - Computer-Science
  - Brute-Force
description: 삽입 정렬에 대해 알아 보자.
---

## Table of contents

## `python` 코드

```python
import random, time, unittest


def get_selection_sorted(arr):
    sorted_arr = [*arr]
    for i in range(len(sorted_arr)):
        min_index = i
        for j in range(i + 1, len(sorted_arr)):
            if sorted_arr[min_index] > sorted_arr[j]:
                min_index = j
        sorted_arr[i], sorted_arr[min_index] = sorted_arr[min_index], sorted_arr[i]
    return sorted_arr


class SortingAlgorithmTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        print("0~1000까지의 정수 1000개를 랜덤으로 생성합니다.")
        cls.random_numbers = [random.randint(0, 1000) for _ in range(50)]
        cls.sorted_random_numbers = sorted(cls.random_numbers)
        print("Selection Sort Algorithms 테스트 시작")

    @classmethod
    def tearDownClass(cls) -> None:
        print("\nSelection Sort Algorithms 테스트 종료\n")

    def setUp(self) -> None:
        self.start_time = time.time()

    def tearDown(self) -> None:
        self.end_time = time.time()
        print(f"\n테스트 소요 시간: {self.end_time - self.start_time:4f}s")
        print(f"정렬 결과: {get_selection_sorted(SortingAlgorithmTest.random_numbers)}")

    def test_selection_sort(self):
        self.assertEqual(
            get_selection_sorted(SortingAlgorithmTest.random_numbers),
            SortingAlgorithmTest.sorted_random_numbers,
        )


if __name__ == "__main__":
    unittest.main(verbosity=2)

```

## How to Run

python version: `3.11.6`

### Run `main.py`

```zsh
pip install pipenv
pipenv --python 3.11.6
pipenv run python3 main.py
```

### Output

```zsh
Loading .env environment variables...
0~1000까지의 정수 1000개를 랜덤으로 생성합니다.
Selection Sort Algorithms 테스트 시작
test_selection_sort (__main__.SortingAlgorithmTest.test_selection_sort) ...
테스트 소요 시간: 0.000048s
정렬 결과: [14, 17, 22, 22, 41, 96, 134, 140, 141, 172, 185, 193, 246, 246, 272, 280, 280, 308, 317, 333, 339, 340, 354, 395, 404, 406, 420, 516, 525, 538, 540, 554, 615, 626, 629, 680, 695, 696, 700, 715, 717, 730, 763, 796, 815, 819, 852, 888, 928, 935]
ok

Selection Sort Algorithms 테스트 종료


----------------------------------------------------------------------
Ran 1 test in 0.000s

OK
```

## Execution Image

![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1701241044/image_gmu4ue.png)

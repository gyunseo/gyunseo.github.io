---
title: Sorting Algorithm
pubDatetime: 2023-11-29T15:03:00Z
featured: false
draft: false
tags:
  - Algorithms
  - Computer-Science
  - Sorting-Algorithm
description: 삽입, 선택, 버블 정렬 벤치마크를 비교해 보자.
---

## Table of contents

## `python` 코드

```python
import random, time, unittest


def get_insertion_sorted(arr):
    sorted_arr = [*arr]
    for i in range(1, len(sorted_arr)):
        j = i
        while j > 0 and sorted_arr[j - 1] > sorted_arr[j]:
            sorted_arr[j - 1], sorted_arr[j] = sorted_arr[j], sorted_arr[j - 1]
            j -= 1
    return sorted_arr


def get_bubble_sorted(arr):
    sorted_arr = [*arr]
    for i in range(len(sorted_arr)):
        for j in range(len(sorted_arr) - 1, i, -1):
            if sorted_arr[j] < sorted_arr[j - 1]:
                sorted_arr[j], sorted_arr[j - 1] = sorted_arr[j - 1], sorted_arr[j]
    return sorted_arr


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
        print("Sorting Algorithms 테스트 시작")

    @classmethod
    def tearDownClass(cls) -> None:
        print("\nSorting Algorithms 테스트 종료\n")

    def setUp(self) -> None:
        self.start_time = time.time()

    def tearDown(self) -> None:
        self.end_time = time.time()
        print(f"\n테스트 소요 시간: {self.end_time - self.start_time:4f}s")

    def test_insertion_sort(self):
        self.assertEqual(
            get_insertion_sorted(SortingAlgorithmTest.random_numbers),
            SortingAlgorithmTest.sorted_random_numbers,
        )

    def test_bubble_sort(self):
        self.assertEqual(
            get_bubble_sorted(SortingAlgorithmTest.random_numbers),
            SortingAlgorithmTest.sorted_random_numbers,
        )

    def test_selection_sort(self):
        self.assertEqual(
            get_selection_sorted(SortingAlgorithmTest.random_numbers),
            SortingAlgorithmTest.sorted_random_numbers,
        )


if __name__ == "__main__":
    unittest.main(verbosity=2)
```

## How to Run

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
Sorting Algorithms 테스트 시작
test_bubble_sort (__main__.SortingAlgorithmTest.test_bubble_sort) ...
테스트 소요 시간: 0.000083s
ok
test_insertion_sort (__main__.SortingAlgorithmTest.test_insertion_sort) ...
테스트 소요 시간: 0.000067s
ok
test_selection_sort (__main__.SortingAlgorithmTest.test_selection_sort) ...
테스트 소요 시간: 0.000057s
ok

Sorting Algorithms 테스트 종료


----------------------------------------------------------------------
Ran 3 tests in 0.001s

OK
```

## Execution Image

![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1701238004/image_nrtgzl.png)

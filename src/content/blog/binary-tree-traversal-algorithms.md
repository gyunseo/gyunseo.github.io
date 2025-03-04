---
title: Binary Tree Traversal Algorithms
pubDatetime: 2023-11-28T20:57:00+09:00
featured: false
draft: false
tags:
  - Algorithms
  - Divide-and-Conquer
  - Binary-Tree-Traversal
description: Binary Tree Traversal에 대해 알아 보자.
---

## Table of contents

## `python` 코드

```python
import time, random, unittest
from binarytree import Node


def init_binary_tree(all_nodes):
    root = Node(60)
    all_nodes.append(root)
    node_41 = Node(41)
    all_nodes.append(node_41)
    root.left = node_41
    node_74 = Node(74)
    all_nodes.append(node_74)
    root.right = node_74
    node_16 = Node(16)
    all_nodes.append(node_16)
    node_41.left = node_16
    node_53 = Node(53)
    all_nodes.append(node_53)
    node_41.right = node_53
    node_65 = Node(65)
    all_nodes.append(node_65)
    node_74.left = node_65
    node_25 = Node(25)
    all_nodes.append(node_25)
    node_16.right = node_25
    node_46 = Node(46)
    all_nodes.append(node_46)
    node_53.left = node_46
    node_55 = Node(55)
    all_nodes.append(node_55)
    node_53.right = node_55
    node_63 = Node(63)
    all_nodes.append(node_63)
    node_65.left = node_63
    node_70 = Node(70)
    all_nodes.append(node_70)
    node_65.right = node_70
    node_42 = Node(42)
    all_nodes.append(node_42)
    node_46.left = node_42
    node_62 = Node(62)
    all_nodes.append(node_62)
    node_63.left = node_62
    node_64 = Node(64)
    all_nodes.append(node_64)
    node_63.right = node_64
    return root


def get_preorder_traversal_nodes(root):
    visited_nodes = []

    def preorder_traverse(cur_node):
        if cur_node == None:
            return
        # visit
        visited_nodes.append(cur_node)
        preorder_traverse(cur_node.left)
        preorder_traverse(cur_node.right)

    preorder_traverse(root)
    return visited_nodes


def get_inorder_traversal_nodes(root):
    visited_nodes = []

    def inorder_traverse(cur_node):
        if cur_node == None:
            return
        inorder_traverse(cur_node.left)
        visited_nodes.append(cur_node)
        inorder_traverse(cur_node.right)

    inorder_traverse(root)
    return visited_nodes


def get_postorder_traversal_nodes(root):
    visited_nodes = []

    def postorder_traverse(cur_node):
        if cur_node == None:
            return
        postorder_traverse(cur_node.left)
        postorder_traverse(cur_node.right)
        visited_nodes.append(cur_node)

    postorder_traverse(root)
    return visited_nodes


class BinaryTreeTraversalTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.all_nodes = []
        cls.root = init_binary_tree(cls.all_nodes)
        print(cls.root)
        print("Binary Tree Traversal 테스트 시작")

    @classmethod
    def tearDownClass(cls) -> None:
        print("\nBinary Tree Traversal 테스트 종료\n")
        print(f"preorder: {get_preorder_traversal_nodes(cls.root)}")
        print(f"inorder: {get_inorder_traversal_nodes(cls.root)}")
        print(f"postorder: {get_postorder_traversal_nodes(cls.root)}")

    def setUp(self) -> None:
        self.start_time = time.time()

    def tearDown(self) -> None:
        self.end_time = time.time()
        print(f"\n테스트 소요 시간: {self.end_time - self.start_time:4f}s")

    def test_preorder(self):
        self.assertEqual(
            get_preorder_traversal_nodes(BinaryTreeTraversalTest.root),
            BinaryTreeTraversalTest.root.preorder,
        )

    def test_inorder(self):
        self.assertEqual(
            get_inorder_traversal_nodes(BinaryTreeTraversalTest.root),
            BinaryTreeTraversalTest.root.inorder,
        )

    def test_postorder(self):
        self.assertEqual(
            get_postorder_traversal_nodes(BinaryTreeTraversalTest.root),
            BinaryTreeTraversalTest.root.postorder,
        )


if __name__ == "__main__":
    unittest.main(verbosity=2)
```

## How to Run

python version: `3.11.6`

### Run `main.py`

```
pip install pipenv
pipenv --python 3.11.6
pipenv install binarytree
pipenv run python3 main.py
```

### Output

```
Loading .env environment variables...

        _____________60_______________
       /                              \
  ____41______                     ____74
 /            \                   /
16            _53            ____65
  \          /   \          /      \
   25      _46    55      _63       70
          /              /   \
         42             62    64

Binary Tree Traversal 테스트 시작
test_inorder (__main__.BinaryTreeTraversalTest.test_inorder) ...
테스트 소요 시간: 0.000046s
ok
test_postorder (__main__.BinaryTreeTraversalTest.test_postorder) ...
테스트 소요 시간: 0.000029s
ok
test_preorder (__main__.BinaryTreeTraversalTest.test_preorder) ...
테스트 소요 시간: 0.000027s
ok

Binary Tree Traversal 테스트 종료

preorder: [Node(60), Node(41), Node(16), Node(25), Node(53), Node(46), Node(42), Node(55), Node(74), Node(65), Node(63), Node(62), Node(64), Node(70)]
inorder: [Node(16), Node(25), Node(41), Node(42), Node(46), Node(53), Node(55), Node(60), Node(62), Node(63), Node(64), Node(65), Node(70), Node(74)]
postorder: [Node(25), Node(16), Node(42), Node(46), Node(55), Node(53), Node(41), Node(62), Node(64), Node(63), Node(70), Node(65), Node(74), Node(60)]

----------------------------------------------------------------------
Ran 3 tests in 0.000s

OK
```

## Execution Image

![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1701175446/image_v7elxg.png)

## 题目描述

    给定一个非负整数数组，您最初位于数组的第一个索引处。 数组中的每个元素表示您在该位置的最大跳跃长度。 确定您是否能够达到最后的索引。

## 例子
```
A = [2,3,1,1,4], return true.

A = [3,2,1,0,4], return false.
```
## 解题思路

暴力解法:

建立一个集合和一个栈,将起始位置0压入栈中,重复以下操作,直到栈为空或者到达最后索引位置
1. 取出栈中元素,并获得可以跳跃的步数
2. 计算该位置可以跳到的新位置
3. 如果集合中没有改数,将新位置压入栈和集合
复杂度:O(n^2)

递归解法:

从后往前遍历数组,找到可以跳到最后索引位置的数,将数组去掉后面的数重新执行之前的操作,直到到达初始位置

复杂度:O(n)

优化解法:

把递归方法变成不递归

## 结果
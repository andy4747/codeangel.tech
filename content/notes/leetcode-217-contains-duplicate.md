---
title: "Leetcod 217: Contains Duplicate"
date: 2024-09-29
tags: ["DSA", "Data Structure", "Algorithms", "Note"]
images: [
    "https://i.pinimg.com/474x/c3/c2/05/c3c20561f69db03c456a68ab0b4fc33c.jpg",
    "https://i.pinimg.com/originals/ea/b6/20/eab6203681c0493206436b91bd376752.jpg"
]
draft: false
---

# neetcode/arrays-hashing/contains_duplicate.go

# Notes

## Problem

LeetCode 217 - Contains Duplicate

## Solution

Use a hash map to keep track of seen numbers. Iterate through the array once, checking if each number is already in the map. If it is, return true (duplicate found). If not, add the number to the map. If we finish iterating without finding a duplicate, return false.

## Analysis
Time Complexity: O(n) Space Complexity: O(n)


## Code
```go
package arrayshashing

func ContainsDuplicate(nums []int) bool {
	result := make(map[int]bool)
	for _, v := range nums {
		if _, exists := result[v]; exists {
			return true
		}
		result[v] = true
	}
	return false
}
```


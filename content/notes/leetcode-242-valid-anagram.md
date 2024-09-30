---
title: "Leetcode 242: Valid Anagram"
date: 2024-09-29
tags: ["DSA", "Data Structure", "Algorithms", "Arrays", "Hashmap", "Note", "leetcode", "neetcode"]
images: [
    "https://i.pinimg.com/474x/c3/c2/05/c3c20561f69db03c456a68ab0b4fc33c.jpg",
    "https://i.pinimg.com/originals/ea/b6/20/eab6203681c0493206436b91bd376752.jpg"
]
draft: false
---

# neetcode/arrays-hashing/valid_anagram.go

# Notes

## Problem

LeetCode 242 - Valid Anagram

## Solution

Use two hash maps to count the frequency of characters in each string. First, check if the lengths of the strings are equal. If not, return false. Then, iterate through both strings simultaneously, updating the character counts in their respective maps. Finally, compare the two maps. If they are identical, the strings are anagrams.

## Analysis

Time Complexity: O(n), where n is the length of the strings Space Complexity: O(k), where k is the size of the character set (constant if considering only lowercase English letters)


## Code
```go
package arrayshashing

func IsAnagram(s string, t string) bool {
	// Check if lengths are different
	if len(s) != len(t) {
		return false
	}

	// Create two maps to store character frequencies
	sMap := make(map[rune]int)
	tMap := make(map[rune]int)

	// Count character frequencies
	for i, char := range s {
		sMap[char]++
		tMap[rune(t[i])]++
	}

	// Compare the two maps
	for char, count := range sMap {
		if tMap[char] != count {
			return false
		}
	}

	return true
}
```

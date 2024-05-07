---
sidebar_position: 2
title: "Operations"
description: Learn to about Operations!
sidebar_label: Operations
---

# Operations

Zeromagic streamlines development by providing a robust set of `built-in operations` that handle common data manipulation tasks. This comprehensive system allows you to focus on core functionalities of your application, leaving the heavy lifting of string processing, array management, and other essential operations to the platform.

### Math Operations
<small>
| Function              | Example                | Description                                                                 |
| --------------------- | ---------------------- | --------------------------------------------------------------------------- |
| max(a , b) | `max(4, 2) -> 4` | Returns the maximum of the two numbers a and b |
| min(a , b) | `min(4, 2) -> 2` | Returns the minimum of the two numbers a and b |
| abs(n) | `abs(-9) -> 9` | Returns the absolute value of a number |
| div(a/b) | `div(4/2) -> 2` | Returns the divided value of the two numbers a and b |
| mul(a*b) | `mul(4*2) -> 8` | Returns the multiply value of the two numbers a and b |
| add(a+b) | `add(4+2) -> 6` | Returns the add value of the two numbers a and b |
| sub(a-b) | `sub(4-2) -> 2` | Returns the sub value of the two numbers a and b |
</small>

### String Manipulation

<small>
| Function              | Example                | Description                                                                 |
| --------------------- | ---------------------- | --------------------------------------------------------------------------- |
| trim(str[, chars]) | `trim("  Hello  ") -> "Hello", trim("__Hello__", "_") -> "Hello"` | Removes white spaces from both ends of a string str. If the optional chars argument is given, it is a string specifying the set of characters to be removed. |
| trimPrefix(str, prefix) | `trimPrefix("HelloWorld", "Hello") -> "World"` | Removes the specified prefix from the string str if it starts with that prefix |
| trimSuffix(str, prefix) | `trimSuffix("HelloWorld", "Hello") -> "Hello"` | Removes the specified suffix from the string str if it ends with that suffix |
| upper(str) | `upper("magic") -> "MAGIC"` | Converts all the characters in string str to uppercase |
| lower(str) | `lower("MAGIC") -> "magic"` | Converts all the characters in string str to lowercase |
| split(str, delimiter[, n]) | `split("apple,orange,grape", ",") -> ["apple", "orange", "grape"] , split("apple,orange,grape", ",", 2) -> ["apple", "orange,grape"]` | Splits the string str at each instance of the delimiter and returns an array of substrings |
| splitAfter(str, delimiter[, n]) | `splitAfter("apple,orange,grape", ",") -> ["apple,", "orange,", "grape"], splitAfter("apple,orange,grape", ",", 2) -> ["apple,", "orange,grape"]` | Splits the string str after each instance of the delimiter |
| replace(str, old, new) | `replace("Zero World", "World", "Magic") ->"Zero Magic"` | Replaces all occurrences of old in string str with new |
| repeat(str, n) | `repeat("Magic", 2) -> "MagicMagic"` | Repeats the string str n times |
|indexOf(str, substring)| `indexOf("magic wand", "wand") -> 6` | Returns the index of the first occurrence of the substring in string str or -1 if not found |
|lastIndexOf(str, substring)| `lastIndexOf("fantastic day!", "!") -> 13` | Returns the index of the last occurrence of the substring in string str or -1 if not found |
|hasPrefix(str, prefix)| `hasPrefix("ZeroMagic", "Zero") -> true` | Returns true if string str starts with the given prefix |
|hasSuffix(str, suffix)| `hasSuffix("ZeroMagic", "Magic") -> true` | Returns true if string str starts with the given Suffix |

</small>

### DateTime

<small>
| Function              | Example                | Description                                                                 |
| --------------------- | ---------------------- | --------------------------------------------------------------------------- |
| duration(str) | `duration("1h").Seconds() -> 3600` | Returns time.Duration value of the given string str. Valid time units are "h" |
| date(str[, format[, timezone]]) | ` date("2023-08-14"),date("15:04:05"), date("2023-08-14T00:00:00Z"), date("2023-08-14, 0:00:00", "2006-01-02 15:04:05", "Europe/Zurich")` | Converts the given string str into a date representation. If the optional format argument is given, it specifies the format of the date. If the optional timezone argument is given, it specifies the timezone of the date |
|now()| `createdAt > now() - duration("1h")` | Returns the current date and time  |
</small>


### Array manipulation
<small>
| Function              | Example                | Description                                                                 |
| --------------------- | ---------------------- | --------------------------------------------------------------------------- |
| map(array, predicate) | `map(tweets, {.Size})` | Returns a new array by applying the predicate to each element of the array |
| filter(array, predicate) | `filter(users, .Name startsWith "J")` | Returns a new array by applying the filter to each element of the array |
| all(array, predicate) | `all(tweets, {.Size < 280})` | Returns true if all elements satisfy the predicate. Returns true for an empty array |
| any(array, predicate) | `any(tweets, {.Size > 280})` | Returns true if any elements satisfy the predicate. Returns false for an empty array |
| none(array, predicate) | `none(tweets, {.Size > 280})` |  Returns true if no elements satisfy the predicate. Returns true for an empty array|
| one(array, predicate) | `one(tweets, {.Size > 280})` |  Returns true if exactly one elements satisfy the predicate. Returns true for an empty array|
| find(array, predicate) | `find([1, 2, 3, 4], # > 2) -> 3` |  Finds the first element in an array that satisfies the predicate|
| findIndex(array, predicate) | `findIndex([1, 2, 3, 4], # > 2) -> 2` |  Finds the index of the first element in an array that satisfies the predicate|
| findLast(array, predicate) | `findLast([1, 2, 3, 4], # > 2) -> 4` |  Finds the last element in an array that satisfies the predicate|
| findLastIndex(array, predicate) | `findLastIndex([1, 2, 3, 4], # > 2) -> 3` | Finds the index of the last element in an array that satisfies the predicate|
| groupBy(array, predicate) | `groupBy(users, .Age)` | Groups the elements of an array by the result of the predicate|
| count(array, predicate) | `count(users, .Age)` | Returns the number of elements that satisfy the predicate|
| join(array[, delimiter]) | `join(["python", "java", "scala"], ",") -> "python,java,scala"` | Joins an array of strings into a single string with the given delimiter. If no delimiter is given, an empty string is used|
| sum(array) | `sum([1, 2, 3]) -> 6` | Returns the sum of all numbers in the array|
| mean(array) | `mean([1, 2, 3]) -> 2.0` | Returns the mean of all numbers in the array|
| median(array) | `median([1, 2, 3]) -> 2.0` | Returns the median of all numbers in the array|
| first(array) | `first([1, 2, 3]) -> 1` | Returns the first of all numbers in the array|
| last(array) | `last([1, 2, 3]) -> 3` | Returns the last of all numbers in the array|
| take(array, n) | `take([1, 2, 3, 4], 2) -> [1, 2]` | Returns the first n elements from an array. If the array has fewer than n elements, returns the whole array |
| sort(array[, order]) | `sort([3, 1, 4]) -> [1, 3, 4], sort([3, 1, 4], "desc") -> [4, 3, 1]` |  Sorts an array in ascending order. Optional order argument can specify the order of sorting: asc or desc.|
| sortBy(array, key[, order]) | `sortBy(users, "Age"), sortBy(users, "Age", "desc")` |  Sorts an array of maps by a specific key in ascending order. Optional order argument can specify the order of sorting: asc or desc|
</small>

### Map manipulation
<small>
| Function              | Example                | Description                                                                 |
| --------------------- | ---------------------- | --------------------------------------------------------------------------- |
| keys(map) | `keys({"name": "Rohith", "age": 21}) -> ["name", "age"]` | Returns an array containing the keys of the map |
| values(map) | `values({"name": "Rohith", "age": 21}) -> ["Rohith", "21"]` | Returns an array containing the values of the map |
</small>

### Type Conversions

<small>
| Function              | Example                | Description                                                                 |
| --------------------- | ---------------------- | --------------------------------------------------------------------------- |
| type(value) | `type("magic") -> "string"` | Returns the type of the given value |
| int(value) | `int("90") -> 90` | Returns the int value of a number or a string |
| float(value) | `float("90.30") -> 90.30` | Returns the float value of a number or a string |
| string(value) | `string(90) -> "90"` | Converts the given value into a string representation |
| toJSON(value) | `toJSON({"name": "Rohith", "age": 21}) -> "{"name":"Rohith","age":21}"` | Converts the given value v into a JSON string |
| fromJSON(str) | `fromJSON("{"name":"John","age":30}") -> {"name": "John", "age": 30}"` |  Converts the given JSON string str into a map |
| toBase64(str) | `toBase64("hello") -> "aGVsbG8="` |  Encodes the string into Base64 format |
| fromBase64(str) | `fromBase64("aGVsbG8=") -> "hello"` |  Decodes the string into Base64 format |
| toPairs(map) | `toPairs({"name": "Rohith", "age": 21}) -> [["name", "Rohith"], ["age", 21]]` | Converts a map into an array of key-value pairs |
| fromPairs(array) | `fromPairs([["name", "Rohith"], ["age", 21]]) -> {"name": "Rohith", "age": 21}` | Converts an array of key-value pairs into a map |
</small>

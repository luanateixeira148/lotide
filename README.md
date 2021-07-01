# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @luanateixeira148/lotide`

**Require it:**

`const _ = require('@luanateixeira148/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: takes two arrays, compares them, and print out a message telling us if they match or not.
* `assertEqual(actual, expected)`: takes two primitive values, compares them, and print out a message telling us if they match or not.
* `assertObjectsEqual(actual, expected)`: takes two objects, compares them, and print out a message telling us if they match or not.
* `countLetters(str)`: takes in a sentence (as a string) and returns a count of each of the letters in that sentence.
* `countOnly(allItems, itemsToCount)`: takes an array and an object, returns an object containing counts of everything that the input object listed.
* `eqArrays(arr1, arr2)`: takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects(object1, object2)`: takes in two objects and returns true or false, based on a perfect match.
* `findKey(obj, callback)`: takes in an object and a callback. Returns the first key for which the callback returns a truthy value.
* `findKeyByValue(obj, val)`: takes in an object and a value, and returns the first key that contains the given value.
* `head(arr)`: takes in one array and returns its "head" (the first element from the array).
* `letterPositions(setence)`: takes in a string and returns all the indices (zero-based positions) in the string where each character is found.
* `map(array, callback)`: takes in an array to map and a callback function. Returns a new array based on the results of the callback function.
* `middle(arr)`: takes in an array and return the middle-most element(s) of the given array.
* `tail(arr)`: takes in one array and returns its "tail" (every element except the head (first element) of the array) as a new array.
* `takeUntil(array, callback)`: keeps collecting items from a provided array until the callback provided returns a truthy value.
* `without(source, itemsToRemove)`: return a subset of a given array, removing unwanted elements.
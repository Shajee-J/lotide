# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shajee-j/lotide`

**Require it:**

`const _ = require('@shajee-j/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  head: [Function: head] : returns the first element of a new array 

  tail: [Function: tail] : returns the all elements of an array except the first as a new array

  middle: [Function: middle] : returns the middle of an array (note: if array lenght is even, 2 values will be returned) as a new array.

  eqArrays: [Function: eqArrays] : compares two given values of a type specified in the function name and returns true/false.   

  assertArraysEqual: [Function: assertArraysEqual] : compares two given values of a type specified in the function name and returns true/false.  

  assertEqual: [Function: assertEqual] : compares two given values of a type specified in the function name and returns true/false.  

  assertObjectsEqual: [Function: assertObjectsEqual] : compares two given values of a type specified in the function name and returns true/false.  

  countLetters: [Function: countLetters] : returns an object with a count of each occurance of letters in a given string as they appear. 

  countOnly: [Function: countOnly] : returns a count for each occurance of a specifed string in a given object.
  
  eqObjects: [Function: eqObjects] : compares two given values of a type specified in the function name and returns true/false.  

  findKey: [Function: findKey] : returns a value based on key given.

  findKeyByValue: [Function: findKeyByValue] : will return a key based on value given.

  letterPositions: [Function: letterPositions] : returns an object that records the location of each occurance of a letter in a given string. 

  takeUntil: [Function: takeUntil] : returns an array with the values uptill a specified value (given as an argumnet) within the array appears. 

  without: [Function: without] : returns a new array without the value from the original array that was given. 

  map: [Function: map] : will map elements from an array... based on an array and callback given.  
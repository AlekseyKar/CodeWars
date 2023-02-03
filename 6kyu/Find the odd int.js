// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).

function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

//or

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b); 
// 
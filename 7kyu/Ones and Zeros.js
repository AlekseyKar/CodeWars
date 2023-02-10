// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5

function binaryArrayToNumber(arr) {
  let decimal = 0;
  let binLength = arr.length;

  for (let i = 0; i < binLength; i++) {
    decimal += parseInt(arr[i]) * Math.pow(2, binLength - 1 - i);
  }

  return decimal;
}

// or 

// const binaryArrayToNumber = arr => {
//   return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
// }
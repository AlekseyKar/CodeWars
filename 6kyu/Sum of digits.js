// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

const digitalRoot = (n) => n < 10 ? n : digitalRoot(n.toString().split('').reduce((sum, num) => sum += +num, 0) );
//  or 

// function digital_root(n) {
//   if (n < 10) return n
//   return digital_root(n % 10 + digital_root(Math.floor(n / 10)))
// }

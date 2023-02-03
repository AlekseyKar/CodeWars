// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  return str.trim().toLowerCase().split('').filter(str => ['a', 'e', 'i', 'o', 'u'].includes(str)).length;
}

// or 

// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }
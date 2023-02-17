// Write JS function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'

function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}

// or 

function duplicateCount(text) {
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== 1 && arr.lastIndexOf(val) === i;
  }).length;
}
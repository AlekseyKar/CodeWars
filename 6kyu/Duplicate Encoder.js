function duplicateEncode(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();
  // Create an object to store the counts of each character
  let counts = {};
  // Loop through the string and increment the counts
  for (let char of str) {
  counts[char] = (counts[char] || 0) + 1;
  }
  // Create a new string to store the result
  let result = "";
  // Loop through the string again and append "(" or ")" to the result
  for (let char of str) {
  if (counts[char] === 1) {
  // If the character appears only once, append "("
  result += "(";
  } else {
  // If the character appears more than once, append ")"
  result += ")";
  }
  }
  // Return the result
  return result;
}

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

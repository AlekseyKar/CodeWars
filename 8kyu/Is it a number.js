// Given a string s, write JS function that will return true if its a valid single integer or floating number or false if its not.
// Valid examples, should return true:
// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")

function isDigit(s) {
  return s==parseFloat(s);
 }

// or 

function isDigit(s) {
  // trim the string to remove any leading or trailing spaces
  s = s.trim();

  // check if the string matches the regular expression for a valid number
  return /^-?\d+(\.\d+)?$/.test(s);
}
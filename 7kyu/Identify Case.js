/*
Task:
So the task here is to implement a function (called id in Ruby/Crystal/JavaScript/CoffeeScript and case_id in Python/C) that takes a string, c_str, and returns a string with the case the input is in. The possible case types are “kebab”, “camel”, and ”snake”. If none of the cases match with the input, or if there are no 'spaces' in the input (for example in snake case, spaces would be '_'s), return “none”. Inputs will only have letters (no numbers or special characters).

Some definitions
Kebab case: lowercase-words-separated-by-hyphens

Camel case: lowercaseFirstWordFollowedByCapitalizedWords

Snake case: lowercase_words_separated_by_underscores

Examples:
id(“hello-world”) #=> “kebab”
id(“helloToTheWorld”) #=> “camel”
id(“hello_to_the_world”) #=> “snake”
id(“helloworld”) #=> “none”
*/
function id(c_str) {
  const str = c_str.split("");
  if (
    str.every(v => v === v.toLowerCase()) &&
    str.includes("-") &&
    str.filter((v, i) => v === "-" && str[i + 1] === "-").length === 0 &&
    !str.includes("_")
  )
    return "kebab";
  if (
    str.every(v => v === v.toLowerCase()) &&
    str.includes("_") &&
    str.filter((v, i) => v === "_" && str[i + 1] === "_").length === 0 &&
    !str.includes("-")
  )
    return "snake";
  if (
    str.some(v => v === v.toLowerCase()) &&
    str.some(v => v === v.toUpperCase()) &&
    !str.includes("-") &&
    !str.includes("_")
  )
    return "camel";
  return "none";
}

// or 

function id(str) {
  if(/^[a-z]+-[a-z]+(-[a-z]+)*$/.test(str)) return 'kebab';
  else if(/^[a-z]+[A-Z][a-z]*([A-Z][a-z]*)*$/.test(str)) return 'camel';
  else if(/^[a-z]+_[a-z]+(_[a-z]+)*$/.test(str)) return 'snake';
  return 'none';
}
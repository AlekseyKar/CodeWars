// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6

function expressionMatter(a, b, c) {
    
  let result1 = a * (b + c);
  let result2 = a * b * c;
  let result3 = (a + b) * c;
  let result4 = a + b + c;
  
  let arr = [result1, result2, result3, result4];
  let finalResult = arr.sort((a, b) => b-a)[0];
  
  return finalResult; 
}

// function expressionMatter(a, b, c) {
//   return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
// }
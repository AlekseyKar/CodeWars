// you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"

function highAndLow(num){
  return Math.max(...num.split(' ')) + ' ' + Math.min(...num.split(' '))
}

// or 

// function highAndLow(numbers) {
//   numbers = numbers.split(' ').map(Number)
  
//   var min = Math.min.apply(null, numbers)
//   var max = Math.max.apply(null, numbers)
  
//   return max + ' ' + min
// }
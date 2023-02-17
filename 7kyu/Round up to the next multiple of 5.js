// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
// Examples:
// input:    output:
// 0    ->   0
// 2    ->   5

function roundToNearestMultipleOfFive(input) {
  return Math.ceil(input/5)*5;
}

// console.log( roundToNext5(33) )

// or 

function roundToNext5(n){
  while(n % 5 !== 0) n++;
  return n;
}
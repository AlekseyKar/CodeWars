// Create JS function called one that accepts two params:
// a sequence
// a function
// and returns true only if the function in the params returns true for exactly one (1) item in the sequence.
// Example
// one([1, 3, 5, 6, 99, 1, 3], biggerthanten) -> true

function one(sequence, fn) {
  let count = 0;
  for (let item of sequence) {
    if (fn(item)) {
      count++;
    }
  }

  return count === 1;
}

function biggerthanten(n) {
  return n > 10;
}

console.log(one([1, 3, 5, 6, 99, 1, 3], bigger_than_ten)); // true
console.log(one([1, 3, 5, 6, 10, 1, 3], bigger_than_ten)); // false

// or 

// const one = (arr, fun) => {

// The one function takes an array and a function as parameters 
// and returns true if the function returns true for only one element in the array

    // return arr.filter(fun).length === 1;
    
// }
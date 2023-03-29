// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9] 

const findDeletedNumber = (arr, mixArr) =>
  arr.find(number => !mixArr.includes(number)) || 0;

// or 

function findDeletedNumber(arr, mixArr) {
  return arr.find ((element) => {return !mixArr.includes (element)}) || 0;
}
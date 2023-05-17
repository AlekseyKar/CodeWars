// Задача подчища максимальной суммы состоит в нахождении максимальной суммы смежной подпоследовательности в массиве или списке целых чисел:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Простой случай, когда список состоит только из положительных чисел, а максимальная сумма является суммой всего массива. Если список состоит только из отрицательных чисел, вместо этого верните 0.

// let maxSequence = function(arr) {
//   let currSum = 0;
//   return arr.reduce(function(maxSum, number) {
//     currSum = Math.max(currSum + number, 0);
//     return currSum > maxSum? currSum : maxSum;
//   }, 0)
// }

function maxSequence(arr) {
  let maxSum = 0;
  let currentSum = 0;
  
  for(let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if(currentSum < 0) {
      currentSum = 0;
    }
    if(currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  
  return maxSum;
}

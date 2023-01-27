// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return "";
  }
  
  return strarr
  .map((value, index) => (
    strarr.slice(index, index+k).join('')
  ))
  .reduce((longest, current) => current.length > longest.length ? current : longest)
  
}
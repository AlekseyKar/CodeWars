function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.every((item, index) => item * item == array2[index]);
}

// or 

function comp(arr1, arr2){
  if (arr1 === null || arr2 === null) return false; //return false if it's empty
  for (let num of arr2){
    if (arr1.indexOf(Math.sqrt(num)) === -1) return false; //return false if it doesnt exist in arr1
    else arr1.splice(arr1.indexOf(Math.sqrt(num)), 1); //remove from arr1, avoids false positives w/ duplicate values
  }
  return true;
}
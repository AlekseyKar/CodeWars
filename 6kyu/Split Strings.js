// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  const arr = str.split('');

  return arr
    .map((el, i) => el + (arr.splice(i + 1, 1)[0] || '_'))
    .filter(el => el);
}

// or 

function solution(str){
  // check if the string length is odd add _
  if(str.length % 2 !== 0 )  str = `${str}_`
  return str ? str.match(/.{1,2}/g) : []
}

function count(str)  {
  // create an empty object to store the counts
  let counts = {};
  // loop over each character in the string
  for (let i = 0; i < str.length; i++) {
  // get the current character
  let char = str[i];
  // if the character is already in the object, increment its count
  if (counts[char]) {
  counts[char]++;
  }
  // otherwise, initialize its count to 1
  else {
  counts[char] = 1;
  }
  }
  // return the object with the counts
  return counts;
  }

  // or 

  // function count (string) {
  //   return string.split('').reduce(function(counts,char){
  //     counts[char] = (counts[char]||0) + 1;
  //     return counts;
  //   },{});
  // }
  
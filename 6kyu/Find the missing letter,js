// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

function findMissingLetter(array)
{
  return String.fromCharCode(
    array.find((c, i) => array[i + 1].charCodeAt() - c.charCodeAt() !== 1)
    .charCodeAt() + 1
    // explain:
    // find returns the index of the first element that is not equal to the next element.
  );
}

// or 

// function findMissingLetter(array)
// {
//   let i = array[0].charCodeAt(0);
//   return String.fromCharCode(array.find(el => el.charCodeAt(0) != i++).charCodeAt(0) - 1);
// }
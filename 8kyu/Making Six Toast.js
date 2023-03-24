// Problem:
// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.

// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.

// Examples:
// You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:

// six_toast(5) == 1

function sixToast (num) {
  if (num === 6) return 0;
  if (num < 6) return (6 - Math.abs(num));
  else if (num > 6) return (num - 6);
}

// function sixToast(num) {
//   return Math.abs(num-6)
// }

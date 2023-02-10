// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// or 

// function removeVowels(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!['a', 'e', 'i', 'o', 'u'].includes(str[i].toLowerCase())) {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

// removeVowels("Hello World!"); // Hll Wrld!
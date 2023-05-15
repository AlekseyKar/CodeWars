// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

decodeMorse = function(morseCode) {
  return morseCode
    .split(" ")
    .map((v, i) => (MORSE_CODE[v] != undefined ? MORSE_CODE[v] : 1))
    .join("")
    .replace(/11/g, " ")
    .replace(/1/g, " ")
    .trim();
};

// or 

decodeMorse = function(morseCode){
  return morseCode.trim().split('   ').map(function(word) {
    return word.split(' ').map(function(letter) {
      return MORSE_CODE[letter];
    }).join('');
  }).join(' ');
}

decodeMorse = function(morseCode){
  return morseCode.trim().split(' ').map(a => MORSE_CODE[a] || ' ').join('').replace(/\s+/g, ' ');
}
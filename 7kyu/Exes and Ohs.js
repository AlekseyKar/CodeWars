// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false

const XO = s => {
  let a = s.toLowerCase().split("").filter(c => "ox".includes(c)).sort();
  return a.lastIndexOf("o") * 2 + 1 === a.lastIndexOf("x");
}

// or 

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

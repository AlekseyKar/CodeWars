function validBraces(braces){
  
  let layers = [];
  let matches = {
    "}":"{",
    ")":"(",
    "]":"["
  }
  let closers = Object.keys(matches);
  
  braces.split("").map(e => {
    
    let isCloser = closers.includes(e);
    let matchLast = layers[layers.length - 1] === matches[e];
    
    isCloser && matchLast ? layers.pop() : layers.push(e);
  })
  
  return layers.length === 0;
}

// or 

// function validBraces(braces){
//   while(braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1){
//     braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
//   }
//   return braces.length == 0;
// }

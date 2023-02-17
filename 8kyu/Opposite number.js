function opposite(number) {
  if (number < 0) {
      return Math.abs(number);
  } else {
      return -Math.abs(number);
  }
}

// or 

function opposite(number) {
  return(-number);
}

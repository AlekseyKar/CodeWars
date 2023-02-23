function sumTwoSmallest(num) {
  let [a, b] = num.sort((a, b) => a - b)
  return a + b;
}

// (sumTwoSmallestNumbers([5, 8, 12, 19, 22]), => 13 
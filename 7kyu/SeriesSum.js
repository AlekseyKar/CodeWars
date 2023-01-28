function SeriesSum(n) {
  // Happy Coding ^_^
  let result = 0;
  for (let index = 0; index < n; index++) result += 1 / (index * 3 + 1);
  return result.toFixed(2).toString();
}
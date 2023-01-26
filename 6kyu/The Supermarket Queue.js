// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

function queueTime(customers, n) {
  if (customers.length == 0) return 0;
  if (customers.length <= n) return Math.max(...customers);
  if (customers.length > n) {
    let residue = customers.slice(n);
    let firsts = customers.slice(0, n);
    for (let item of residue) {
      firsts.sort((a, b) => b - a);
      firsts[firsts.length - 1] += item;
    }
    return Math.max(...firsts);
  }
}


// function queueTime(customers, n) {

//   return Math.max(...(customers.reduce((prev, next) => {
//     prev[prev.indexOf(Math.min(...prev))] += next;
//     return prev;
//   }, Array(n).fill(0))));
// }
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// let take = (arr, n) => arr.slice(0, n);

// or 

function take(array, n) {
  // Check if the array and n are valid inputs
  if (Array.isArray(array) && Number.isInteger(n) && n >= 0) {
  // Use the slice method to get the first n elements
  return array.slice(0, n);
  } else {
  // Return an error message if the inputs are invalid
  return "Invalid input. Please enter an array and a non-negative integer.";
  }
  }
  
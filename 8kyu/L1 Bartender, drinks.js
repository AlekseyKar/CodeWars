// write a function that receives as input a string, and produces outputs according to the given table. To do this, you can use the switch statement, which evaluates an expression and executes a block of code based on the matching casehttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions. You can also use the toLowerCase method of the string object, which returns the calling string value converted to lower case.

// Function to return a drink based on the input string
function getDrinkByProfession(input) {
  // Convert the input to lower case
  let lowerInput = input.toLowerCase();
  // Declare a variable to store the output
  let output;
  // Use switch statement to match the input with the table
  switch (lowerInput) {
    case "jabroni":
      output = "Patron Tequila";
      break;
    case "school counselor":
      output = "Anything with Alcohol";
      break;
    case "programmer":
      output = "Hipster Craft Beer";
      break;
    case "bike gang member":
      output = "Moonshine";
      break;
    case "politician":
      output = "Your tax dollars";
      break;
    case "rapper":
      output = "Cristal";
      break;
    default:
      output = "Beer";
  }
  // Return the output
  return output;
}

// Examples of calling the function with different arguments
console.log(getDrink("Jabroni")); // Patron Tequila
console.log(getDrink("School Counselor")); // Anything with Alcohol
console.log(getDrink("Programmer")); // Hipster Craft Beer
console.log(getDrink("Bike Gang Member")); // Moonshine
console.log(getDrink("Politician")); // Your tax dollars
console.log(getDrink("Rapper")); // Cristal
console.log(getDrink("Teacher")); // Beer
console.log(getDrink("pOLitiCIaN")); // Your tax dollars
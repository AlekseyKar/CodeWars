// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:

//   Let P be the Principal = 1000.00      
//   Let I be the Interest Rate = 0.05      
//   Let T be the Tax Rate = 0.18      
//   Let D be the Desired Sum = 1100.00

function calculateYears(principal, interest, tax, desired) {
  let year = 0;
  while (principal < desired) {
    year++;
    principal = principal + (principal * interest - principal * interest * tax);
  }
  return year;
}
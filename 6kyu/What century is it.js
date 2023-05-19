// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

const addBC = year => year < 0 ? " BC" : ""

const whatCentury = year => {
   const num = Math.ceil(Math.abs(year) / 100).toString()
   const suffix = num.match(/(11|12|13)$/)
      ? "th" : num.endsWith("1")
      ? "st" : num.endsWith("2")
      ? "nd" : num.endsWith("3")
      ? "rd" : "th"
   return num + suffix + addBC(year)
}

// or 

function whatCentury(year)
{
  var century = Math.ceil(year/100);
  return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
}

// Use the parseInt Function with a Radix

// The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

function convertToInteger(str) {
  console.log("Parsed: "+str+" to " + parseInt(str,2))
  return parseInt(str,2);
}

convertToInteger("10011");
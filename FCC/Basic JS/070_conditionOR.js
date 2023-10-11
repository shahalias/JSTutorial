// Comparisons with the Logical Or Operator
/* 
The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.
*/

function testLogicalOr(val) {
    // Only change code below this line
  
    if (val < 10 || val > 20){
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);

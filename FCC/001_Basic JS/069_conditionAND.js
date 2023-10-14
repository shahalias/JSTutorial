// Comparisons with the Logical And Operator

// Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val<=50 && val>=25){
      return "Yes";
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);
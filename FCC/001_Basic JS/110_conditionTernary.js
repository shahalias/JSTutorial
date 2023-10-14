// Use the Conditional (Ternary) Operator

/* 
The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false. */

function checkEqual(a, b) {
    return a==b ? "Equal" : "Not Equal";
  }
  
  checkEqual(1, 2);
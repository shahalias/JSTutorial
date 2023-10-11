// Global Scope and Functions

// Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.

// Declare the myGlobal variable below this line
const myGlobal = 10 ;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5 ;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//myGlobal: 10 oopsGlobal: 5

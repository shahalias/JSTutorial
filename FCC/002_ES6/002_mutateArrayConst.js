// Mutate an Array Declared with const

/* 
If you are unfamiliar with const, check out this challenge about the const keyword.

The const declaration has many use cases in modern JavaScript.

Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let. */

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s[0] = 2 ;
  s[1] = 5 ;
  s[2] = 7 ;
  // Only change code above this line
}
editInPlace();

/* 
Falsy Bouncer
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

 */

function bouncer(arr) {
    let str = [];
    console.log(arr);
  
    for(let i=0;i<arr.length;i++){
      if(arr[i]==false || arr[i]==null || Number.isNaN(arr[i])){
        console.log('-:'+arr[i])
      }else {
        str.push(arr[i]);
      }
    }
    console.log(str);
  
    return str;
  }
  
  // bouncer([7, "ate", "", false, 9]);
  // bouncer(["a", "b", "c"]) ;
  // bouncer([false, null, 0, NaN, undefined, ""]);
  // bouncer([null, NaN, 1, 2, undefined]) 

  /* 
  function bouncer(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) filteredArr.push(arr[i]);
  }
  return filteredArr;
}

We create a new empty array (filteredArr).
We use a for cycle to iterate over all elements of the provided array (arr).
We use the if statement to check if the current element is truthy 593 or falsy 1.5k.
If the element is truthy, we push it to the new array (newArray). This result in the new array (filteredArr) containing only truthy elements.
We return the new array (filteredArr).
*/

/* 
function bouncer(arr) {
  return arr.filter(Boolean);
}

The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument and returns true for truthy 3.0k value or false for falsy 1.5k value. Hence we pass the built-in Boolean function.
*/

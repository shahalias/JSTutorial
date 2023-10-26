// Use Recursion to Create a Countdown

/* 
In a previous challenge, you learned how to use recursion to replace a for loop.Now, let's look at a more complex function that returns an array of consecutive integers starting with 1 through the number passed to the function.

As mentioned in the previous challenge, there will be a base case. The base case tells the recursive function when it no longer needs to call itself.It is a simple case where the return value is already known.There will also be a recursive call which executes the original function with different arguments.If the function is written correctly, eventually the base case will be reached.

For example, say you want to write a recursive function that returns an array containing the numbers 1 through n.This function will need to accept an argument, n, representing the final number.Then it will need to call itself with progressively smaller values of n until it reaches 1. You could write the function as follows:

function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
console.log(countup(5));
 */

// Only change code below this line
function countdown(n) {
    if (n < 1) {
      console.log([]);
      return [];
    } else {
      const cntArr = countdown(n-1);
      cntArr.unshift(n);
      console.log(cntArr);
      return cntArr;
    }
  }
  // Only change code above this line
  
  countdown(-1);
  countdown(10);
  countdown(5);
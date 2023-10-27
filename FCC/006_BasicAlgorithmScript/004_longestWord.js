/* 
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

 */

function findLongestWordLength(str) {
    console.log(str);
    let count = 0;
    let arr = str.split(" ");
    for (let i=0;i<=arr.length-1;i++) {
      count = i==0? arr[i].length : 
      arr[i].length > count ? arr[i].length : count;
    }
    return count;
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");

/* 
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}
 */

/* 
function findLongestWordLength(s) {
  return s
    .split(' ')
    .reduce((longest, word) => Math.max(longest, word.length), 0);
}
In case you’re wondering about that 0 after the callback function, it is used to give an initial value to the longest, so that Math.max will know where to start.

 */

/* 
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}
We provide Math.max with the length of each word as argument, and it will simply return the highest of all.

Let’s analyze everything inside the Math.max parenthesees to understand how we do that.

str.split(" ") splits the string into an array, taking spaces as separators. It returns this array: [“The”,"quick,“brown”,“fox”,“jumped”,“over”,“the”,“lazy”,“dog”].

Then, we will make another array, made from the lengths of each element of the str.split(" ") array with map().

str.split(" ").map(word => word.length) returns [3, 5, 5, 3, 6, 4, 3, 4, 3]

Finally, we pass the array as argument for the Math.max function with the spread operator ...

 */


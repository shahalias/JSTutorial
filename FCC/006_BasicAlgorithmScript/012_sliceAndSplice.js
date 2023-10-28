/* 
Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

 */

function frankenSplice(arr1, arr2, n) {
    let str1 = arr2.slice();
    console.log('Copy: '+str1);
    console.log('Arr1: '+arr1);
    console.log('Arr2: '+arr2);
  
    for(let i=0;i<arr1.length;i++){
      str1.splice(n,0,arr1[i]);
      n++;
    }
    console.log(str1)
    return str1;
  }
  
  // frankenSplice([1, 2, 3], [4, 5, 6], 2);
  frankenSplice([1, 2, 3], [4, 5], 1) ;
  // frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) 


  /* 
  function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}

Since our goal is to return the new array with out altering arr1 or arr2 we create a localArr and add all the items from arr2 using the slice() function

Since the splice() function will mutate (alter) arrays and can be used to add new elements we will use it to add the contents of arr1 into localArr. n is the starting position where our content will be inserted. We won’t be deleting any elements so the next argument is 0. Then we add the entire contents of arr1 using spread syntax ....

localArr is returned and the function is complete.

*/

/* 
function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

Use spread operators with slice to return an array.
First spread operator uses the slice method to only give the portion of arr2 from index 0 to ‘n.’
Second spread operator passes all elements from arr1.
Third spread operator uses the slice method to return all elements starting at index ‘n’ to the end of the array.
*/
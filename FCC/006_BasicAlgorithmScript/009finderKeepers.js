/* 
Finders Keepers
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

 */

function findElement(arr, func) {
    let num = 0;
    let check = false;
    for (let i=0;i<arr.length;i++){
      console.log('Num: '+arr[i]);
      console.log(func(arr[i]));
      check = func(arr[i]);
      if (check == true){
        return arr[i]
      }
    }
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);

  /* 
  function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

*/

/* 
function findElement(arr, func) {
  return arr.find(func);
}

*/

/* 
function findElement(arr, func) {
  if (arr.length > 0 && !func(arr[0])) {
    return findElement(arr.slice(1), func);
  } else {
    return arr[0];
  }
}

*/
/* 
Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

 */

function mutation(arr) {
  let str1 = arr[0].toLowerCase();
  console.log(str1);
  let str2 = arr[1].toLowerCase();
  console.log(str2);

  let stat = 0;
  for(let st in str2){
    if((str1.indexOf(str2[st]))==-1){
      console.log(str2[st])
      return false
    }
  }
  return true;
}

// console.log(mutation(["hello", "hey"]));
// console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));

/* 
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

Grab the second string, lowercase and turn it into an array; then make sure every one of its letters is a part of the lowercased first string.

Every will basically give you letter by letter to compare, which we do by using indexOf on the first string. indexOf will give you -1 if the current letter is missing. We check that not to be the case, for if this happens even once every will be false.

*/

/* 
function mutation([ target, test ], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length
    ? true
    : !target.includes(test[i])
      ? false
      : mutation([ target, test ], i + 1);
}

Note that nesting ternaries this deeply is typically not recommended in professional code.

*/

/* 
function mutation([elem1, elem2]) {
  const regex = new RegExp(`[^${elem1}]`, 'i');
  return !regex.test(elem2);
}

Desconstruct the two elements of the array passed to the function and create a regular expression using the RegExp() constructor using a negated character set of all the first element’s characters. Adding the i flag makes the match case insensitive. The function returns the negated Boolean value of testing the regex with element two’s characters.

*/
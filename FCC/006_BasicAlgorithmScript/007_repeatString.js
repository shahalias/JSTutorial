/* 
Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

 */

function repeatStringNumTimes(str, num) {
    let strT =""
    if(num<0){
        return "";
    }
    for(let i=0;i<num;i++){
        strT+=str;
    }
    console.log(strT);
    return strT;
}

repeatStringNumTimes("*",3)

/* 
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

This solution uses recursion.
We check if num is negative and return an empty string if true.
If not, we add the string to a call of our function with num being decreased by 1, which will add another str and another… until eventually num is 1. And return that whole process.

*/

/* 
function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

*/
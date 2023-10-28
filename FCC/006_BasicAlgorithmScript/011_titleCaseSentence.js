/* 
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.

*/

function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

/* 
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

titleCase("I'm a little tea pot");

We are making entire string lowercase and then converting it into array. Then we are using map function to replace the lowercase character with uppercase. Finally, we are returning the string using join method.


*/

/* 
function titleCase(str) {
  return str
    .toLowerCase()
    .replace(/(^|\s)\S/g, L => L.toUpperCase());
}

The solution works by first lowercasing all the characters in the string and then only uppercasing the first character of each word.

Lowercase the whole string using str.toLowerCase().
Replace every word’ first character to uppercase using .replace.
Search for character at the beginning of each word i.e. matching any character following a space or matching the first character of the whole string, by using the following pattern.
Regex explanation:
Find all non-whitespace characters (\S)
At the beginning of string (^)
Or after any whitespace character (\s)
The g modifier searches for other such word pattern in the whole string and replaces them.

This solution works with national symbols and accented letters as illustrated by following examples
international characters: ‘бабушка курит трубку’ // → ‘Бабушка Курит Трубку’
accented characters: ‘località àtilacol’ // → ‘Località Àtilacol’


*/


// Destructuring via rest elements

// In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

// The result is similar to Array.prototype.slice(), as shown below:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);  // 1,2
console.log(arr);   // [3, 4, 5, 7]

// The console would display the values 1, 2 and [3, 4, 5, 7].

function removeFirstTwo(list) {
    const [a, b, ...arr] = list
    return arr;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

console.log('Source:' + source);
console.log('Source:' + sourceWithoutFirstTwo);
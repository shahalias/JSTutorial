/* 
Implement the filter Method on a Prototype
You might learn a lot about the filter method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().

Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.

 */

Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
    console.log(this);
    for(let i=0;i<this.length;i++) {
      // console.log(callback(this[i]));
      if(callback(this[i],i,this) == 1){
        newArray.push(this[i]);
      }
    }
    // Only change code above this line
    return newArray;
  };
  
  console.log([23, 65, 98, 5, 13].myFilter(item => item % 2));
  
  console.log(["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi"));
  
  console.log([1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index));

  /* 
  Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (Boolean(callback(this[i], i, this)) === true) {
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};
  */

/* 
Array.prototype.myFilter = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) == true) {
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
}; */

/* Array.prototype.myFilter = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (const [index, elem] of this.entries()) {
    if (callback(elem, index, this)) newArray.push(elem);
  }
  // Only change code above this line
  return newArray;
}; */
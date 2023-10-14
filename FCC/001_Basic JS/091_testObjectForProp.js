// Testing Objects for Properties

// To check if a property on a given object exists or not, you can use the .hasOwnProperty() method. someObject.hasOwnProperty(someProperty) returns true or false depending on if the property is found on the object or not.

/* 
function checkForProperty(object, property) {
    return object.hasOwnProperty(property);
}
checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false 
*/

function checkObj(obj, checkProp) {
    // Only change code below this line
    let has = obj.hasOwnProperty(checkProp) ? true : false;
    console.log('Exist: ' + has)
    if (has) {
      console.log('Returned: ' + obj.checkProp)
      return obj[checkProp];
    } else {
      return 'Not Found';
    }
    // Only change code above this line
  }
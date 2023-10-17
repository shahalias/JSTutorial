// Use Destructuring Assignment to Pass an Object as a Function's Parameters

// In some cases, you can destructure the object in a function argument itself.

// const profileUpdate = (profileData) => {
//     const { name, age, nationality, location } = profileData;
// }

// This effectively destructures the object sent into the function. This can also be done in -place:

// const profileUpdate = ({ name, age, nationality, location }) => {
// }

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max,min}) => (max + min) / 2.0; 
// Only change code above this line
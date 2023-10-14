// Use the Rest Parameter with Function Parameters

// In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

const sum = (...args) => {
    let x = args.length;
    console.log("Length: " + x);
    let sum = 0;
    for (let i = 0; i < x; i++) {
        sum += args[i];
    }
    console.log("Sum: " + sum)
    return sum;
}

sum(0, 1, 2);
sum(1, 2, 3, 4);
sum(5);
sum();
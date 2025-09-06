// Arrow function without parameter
var greet = () => {
    console.log("Hello, World!");
};
greet(); 

// If only one parameter, parentheses are optional
var square = x => {
    return x * x;
};
console.log(square(5)); // 25

// Multiple parameters need parentheses
var add = (a, b) => {
    return a + b;
};
console.log(add(3, 7)); // 10

// If only one statement, we can skip return and {}
var multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20


//without argument
const printHello = () => {
    console.log("Hello");
}; 
printHello(); // Hello


//If the function body has only one statement, you can skip the curly braces {}
const printhello = () => console.log("Hello");
printhello(); // Hello

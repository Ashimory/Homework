// Method 1
// let a = prompt("Enter first variable");
// let b = prompt("Enter second variable");
// [a, b] = [b, a];
// console.log(`The first variable is now ${a}, the second variable is now ${b}`);
// alert(`The first variable is now ${a}, the second variable is now ${b}`);
// Method 2
let a = prompt("Enter first variable");
let b = prompt("Enter second variable");
let s;
s = a;
a = b;
b = s;
alert(`The first variable is now ${a}, the second variable is now ${b}`);

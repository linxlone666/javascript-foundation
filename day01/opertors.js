// this is all operators in js
// comparison operators
let a = 10;
let b = 20;
console.log(a == b); // false
console.log(a != b); // true
console.log(a < b); // true
console.log(a > b); // false
console.log(a <= b); // true
console.log(a >= b); // false

// logical operators
let x = true;
let y = false;
console.log(x && y); // false this is because both x and y need to be true for the result to be true
console.log(x || y); // true this is because either x or y needs to be true for the result to be true
console.log(!x); // false this is because the result is the opposite of x

// arithmetic operators
let num1 = 10;
let num2 = 5;
console.log(num1 + num2); // 15
console.log(num1 - num2); // 5
console.log(num1 * num2); // 50
console.log(num1 / num2); // 2
console.log(num1 % num2); // 0 this is the remainder of the division of num1 by num2

// assignment operators
let num3 = 10;
num3 += 5; // num3 = num3 + 5
console.log(num3); // 15
num3 -= 5; // num3 = num3 - 5
console.log(num3); // 10
num3 *= 5; // num3 = num3 * 5
console.log(num3); // 50
num3 /= 5; // num3 = num3 / 5
console.log(num3); // 10
num3++; // num3 = num3 + 1
console.log(num3); // 11
num3--; // num3 = num3 - 1
console.log(num3); // 10

// ternary operator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Yes

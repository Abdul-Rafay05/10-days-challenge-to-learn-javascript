// console.log("hello");

// for (let i = 1; i < 11; i++) {
// jumped over one iteration in the loop
//     if (i === 7) continue;
// jumped out of a loop
//     if (i === 7) break;
//     console.log(`Iterations ${i}`);
// }

// Write a program to find the largest number among three numbers using if-else.

// let user1 = 10
// let user2 = 3
// let user3 = 5

// if (user1 > user2 && user1 > user3) {
//     console.log(`${user1} is the largest number`);
// } else if (user2 > user1 && user2 > user3) {
//     console.log(`${user2} is the largest number`);
// } else {
//     console.log(`${user3} is the largest number`);
// }

// Create a program that prints all even numbers between 1 and 50 using a for loop.

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i} is a even number`);
//     }
// }

// Use a while loop to calculate the sum of numbers entered by the user until they input a negative number.


// let sum = 0
// let number;
// do {
//     number = parseInt(prompt("Enter the number"));
//     if (number > 0) {
//         sum += number;
//     } else {
//         break;
//     }
// } while (number > 0);
// console.log(`the sum of: ${sum}`);


// Build a simple calculator using a switch statement to perform addition, subtraction, multiplication, or division based on user input.

// let number1 = parseInt(prompt("Enter first number: "));
// let operation = String(prompt("Enter the perform Operation ' + , - , x , / ' :"));
// let number2 = parseInt(prompt("Enter second number: "));
// console.log(operation, typeof operation);

// switch (operation) {
//     case "+":
//         console.log(`The sum of: ${number1 + number2}`);
//         break;
//     case "-":
//         console.log(`The sub of: ${number1 - number2}`);
//         break;
//     case "x":
//         console.log(`The multiple of: ${number1 * number2}`);
//         break;
//     case "/":
//         console.log(`The divide of: ${number1 / number2}`);
//         break;
//     default:
//         console.log(`Don't match operation, please Enter correct Operation!`);
// }
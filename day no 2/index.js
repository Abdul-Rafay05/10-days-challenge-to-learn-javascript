// console.log("hello");

// for (let i = 1; i < 11; i++) {
// jumped over one iteration in the loop
//     if (i === 7) continue;
// jumped out of a loop
//     if (i === 7) break;
//     console.log(`Iterations ${i}`);
// }

// Write a program to find the largest number among three numbers using if-else.

let user1 = 10
let user2 = 3
let user3 = 5

if (user1 > user2 && user1 > user3) {
    console.log(`${user1} is the largest number`);
} else if (user2 > user1 && user2 > user3) {
    console.log(`${user2} is the largest number`);
} else {
    console.log(`${user3} is the largest number`);
}

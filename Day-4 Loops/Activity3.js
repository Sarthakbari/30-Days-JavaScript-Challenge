// Activity 3: Do...while loop

// Task 5:- WAP to print number from 1 to 5 using a do..while loop.
let i = 1
do {
    console.log(i);
    i++;
} while (i <= 5);

// Task 6:- WAP to calculate the factorial of a number using a do..while loop.
let num = 10
fact = 1

do {
    fact *= num; 
    num --;
} while (num > 0);
console.log(`The Factorial of 10 is ${fact}`);

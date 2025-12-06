// Activity 1: Function Declaration.

// Task 1:- Write a function to check if a number is even or odd and log the result to the console.
function CheckEvenOdd(num) {
    if(num %2 == 0){
        return `${num} is Even.`
    }else{
        return `${num} is Odd.`
    }
}
console.log(CheckEvenOdd(13));
console.log(CheckEvenOdd(12));

// Task 2:- Write a function to calculate the square of a number and return the result.
// Using Math.pow
function square(Num){
    return `${Math.pow(Num, 2)}`;
    //return Math.pow(Num, 2);
}
console.log(square(5));

// using Multiplication
function squ(Number){
    return `The square root of 7 is ${Number * Number}` ;
}
console.log(squ(7));

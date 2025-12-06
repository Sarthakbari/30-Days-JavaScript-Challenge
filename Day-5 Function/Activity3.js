// Activity 3: Arrow fUNCTION 

// Task 5:-Write a function to calculate the sum of two number and return the result.
const result = (num1, num2) =>{
    return num1 + num2 ;
}
console.log(result(5 ,8))

// Task 6:-Write an arrow function to check if a string contains a specific character and return a boolean value.
const SpecialChar = (str) =>{
    const char = /[!@#$%^&*?/\|><]/g
    return char.test(str); 
}
console.log(SpecialChar("Hello, World!"));
console.log(SpecialChar("Hello World"));

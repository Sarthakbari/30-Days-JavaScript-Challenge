// Activity 4: Default Parameters

// Task 7:-Write a function that takes two parameter and return their product, with the second parameter having a default value of 1. log the result of callingthis function with and without the second parameter.

const product = (num1, num2 = 1)=>{
    return num1 + num2
}

console.log(product(5, 2));
console.log(product(5));

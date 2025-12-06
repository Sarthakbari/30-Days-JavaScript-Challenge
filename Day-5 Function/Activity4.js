// Activity 4: Function parameter and Default Values.

// Task 7:-Write a function that takes two parameter and return their product. provide a default value for the second parameter.
const mul = (num1, num2 = 2)=>{
    return num1 * num2 ;
}
console.log(mul(5, 10));
console.log(mul(3));

// const fun = (num1, num2)=>{
//     return num1 * num2 ;
// }
// console.log(fun(3, 5));

// here num2 is default to 2 , if there is not given num2 value then it is default to 2.

// Task 8:-write a function that takes a person's name and age and return a greeting message. provide a default value for the age.
const greet = (name, age = 19) =>{
    return `My name is ${name} and I'm ${age} year old.`;
}
console.log(greet('Sarthak'));

// Function Expression.

// Task 3:- Write a function expression to find the maximum of two numbers and log the result to the console.
const maximumNo = function(num1, num2){
    if(num1 > num2){
        return `${num1} is Maximum Number.`
    }else{
        return `${num2} is Maximum Number.`
    }
}
console.log(maximumNo(13, 19));

// Task 4:- Write a function to concatenate two string and return the result.
const string = function(str1, str2){
    return `The concatenate string is ${str1 + str2}`;
}
console.log(string("Sarthak", "Bari"));

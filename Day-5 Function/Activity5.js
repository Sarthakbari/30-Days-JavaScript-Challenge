// Activity 5: Higher-order function 

// Task 9:-Write a Higher-order function that take a function and a number, and calls the function that many times.
function callManyTimes(func, n){
    for(let i = 0; i < n; i++){
        func()
    }
}

function greet (){
    console.log("hello");
}
callManyTimes(greet,5)

// Task 10:-Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second functions to the result.
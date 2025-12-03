// Activity 4: Logical Operators

// Task 11:- WAP that uses the && operator to combine two conditions and log the result to the console.
let user = true 
// let another_user = true 
let another_user = false 

if (user && another_user){
    console.log("Hello, Welcome to our user id!");
} else{ 
    console.log("Hello, Sorry you can't allow!");
}

// Task 12:- WAP that uses the || operator to combine two conditions and log the result to the console.
let my_name = true
let name = false

if (my_name || name){
    console.log("Hello, Welcome to our id!");
} else{ 
    console.log("Hello, Sorry you can't allow!");
}

// Task 13:- WAP that uses the ! operator to nagate a conditions and log the result to the console.
let shop_is_open = false

if (! shop_is_open) {
    console.log("welcome, to our shop!");
} else {
    console.log("sorry, our shop is closed!");
}
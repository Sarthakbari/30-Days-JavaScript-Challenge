// * Day-1 :Variables and Data Types

// Activity 1: Variable Declaration

// Task 1
var Number = 20 ;
console.log(Number); 

// Task 2
let str = "Sarthak" ; 
console.log(str);

// Activity 2: Constant Declaration 

// Task 3
const boolean_Value = true ; 
console.log(boolean_Value);

// Activity 3: Data Types

// Task4
const Num = 13 ;
const str_value = "Hey String";
const bool_value = false ;
const obj = {
    name: "Sarthak" ,
    Age: "19"
}
const Arr = [13, 14];

console.log(typeof(Num));
console.log(typeof(str_value));
console.log(typeof(bool_value));
console.log(typeof(obj));
console.log(typeof(Arr));

// Activity 4: Reassigning Variables

// Task 5
let initial_value = 13 ;
console.log(`Initial Value is ${initial_value}`);
initial_value = 23 ; 
console.log(`Reassign Value is ${initial_value}`);

// Activity 5: Understanding Const 

// task 6

const val = 80 ;
console.log(val)
// reassogn Value
// val = 90; 
// console.log(val)  // Error: cannot reassign value in const variable.

// Feature Request 

// 1)Variable Type console log: WAS (write a script) that declares variables of diff data types and log both the value and type of each variable to the console
let num = 13 ;
let srting_val = "Hello I'm" ;
let bool_val = true ;
let obj_val = {
    name: "Hey I'm a Object" ,
    Rating: "10/10"
} ;
let Arr_val = [1, 2, 3, 4, 5] ;

console.log(`${num} and type: ${typeof(num)}`);
console.log(`${srting_val} and type: ${typeof(srting_val)}`);
console.log(`${bool_val} and type: ${typeof(bool_val)}`);
console.log(`${obj_val} and type: ${typeof(obj_val)}`);
console.log(`${Arr_val} and type: ${typeof(Arr_val)}`);

//Reassignment Demo: Create a script that demonstrates the diff in behavior between let and const When it comes to reassignment.
let intival = 13 ; 
const initvalue = 26 ;
console.log(intival);
console.log(intivalue);

// reassignment
intival = 50
console.log(initval);

initvalue = 100
// console.log(initvalue); // !!!Error




// ACtivity 3: Spread and Rest Operators.

// Task 5:-Use the spread operator to create a new array that includes all element of an existing array plus additional element, and log the new array to the console.
const existingArray = [1, 2, 3, 4, 5, 6, 7]
const newArray = [...existingArray, 8, 9, 10]

console.log(newArray);

// Task 6:-use the rest operator in a function to accept an arbitary number of argument, sum them, and return the result.
function sum(...numbers){
    let total = 0;
    for(const number of numbers){
        total += number
    }
    return total
}
console.log(sum(1, 2, 3, 4, 5));

// Activity 2: Destructuring

// Task 3:-Use array destructuring to extract the first and second element from an array of number and log them to the console.
let first, second
[first, second] = [10, 20, 30, 40, 50, 60]

console.log(`First Element is ${first}`);
console.log(`Second Element is ${second}`);

// Task 4:-Use Object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    Name: "Four Stars of Destiny",
    Author: "General Manoj Mukund Naravane"
}

let {Name, Author} = book
console.log(`Book Name is: ${Name}`);
console.log(`Book Author is: ${Author}`)

// Activity 5: Object iteration

// Task 8:-Use a for...in loop to iterate over the properties of the book object and log each property and its Value.
const book = {
    title: 'Dune',
    author: 'Frank Herbert',
    year: 1965,
}
for (const property in book) {
    console.log(`${property}: ${book[property]}`);
}

// Task 9:-Use a Object.keys and Object.value methods to log all the keys and values of the book Object.
console.log(`keys: ${Object.keys(book)}`);
console.log(`values: ${Object.values(book)}`);
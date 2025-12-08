// Activity 4: The This keywords 

// Task 7:-Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
const book = {
    title: 'Dune',
    author: 'Frank Herbert',
    year: 1965,
    bookDetails: function (){
        return `title: ${this.title}, author: ${this.author}, Year: ${this.year}`
    }
}
console.log(book.bookDetails());

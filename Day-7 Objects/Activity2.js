// Activity 2: Objects Method

// Task 3:-Add a method to the book object that return a string with the book's title and author, and log the result of calling this method.
const book = {
    title: "PC",
    author: "Riyan",
    getBookObj: function () {
        return `This is unique title don't take seriously ${book.title} and the Author is ${book.author}`
    }
}
console.log(book.getBookObj());


// Task 4:-Add a method to the book object that take a parameter (year) and updates the book's year property, then log the updated object.
const Books = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    updatedYear: function (newYaer){
         this.newYaer = newYaer
         console.log(this);
    }
}
Books.updatedYear(2024)



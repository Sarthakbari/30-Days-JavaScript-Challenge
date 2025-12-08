// Activity 3: Nested Object 

// Task 5:-Create a nested object representing a library with properties like name and books (an array of book object), and log the library object to the console.
// Create a nested library object
const library = {
  name: "City Central Library",
  location: "Downtown",
  books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925
    }
  ]
};

// console.log(library);

// Task 6:-Access and log the name of the library and the title of all the books in the library.
console.log(library.name);
library.books.forEach( allBooks => {
    console.log(`title: ${allBooks.title}`);  
})
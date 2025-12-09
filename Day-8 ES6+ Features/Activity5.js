// Activity 5: Enhanced Object Literals

// Task 8:- Use enhanced object literals to create an object with method and properties, and log the object to the console.
let person = {
    name: "Sarthak",
    age: 18,
    greet(){
        return `My Name is ${this.name} and ${this.age} year old!`
    }
}
console.log(person.greet());

// Task 9:-Create an object with computed property name based on variables and log the object to the console.
let key1 = 'first'
let key2 = 'middle'
let key3 = 'last'
let obj = {
    [key1]: 'java',   
    [key2]: 'Script',   
    [key3]: 'Chai Aur Code',   
    intro(){
        return `I'm learning ${this[key1]} ${this[key2]} From channel ${this[key3]}`
    }
}
console.log(obj.intro());

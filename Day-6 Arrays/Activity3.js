// Activity 3: Array Method (Intermediate)

// Task 7:-Use the map method to create a new array where each number is doubled and log the new array.
const arr = [1, 2, 3, 4, 5]
const newArr = arr.map(arr => arr * 2)

console.log(newArr);

// Task 8:-Use the filter method to create a new array with only even number and log the new array.
const FilterArr = [1, 4, 5, 7, 2, 3]
const NewFilterArr = FilterArr.filter(FilterArr => FilterArr % 2 == 0)

console.log(NewFilterArr);

// const FilterArr = [1, 4, 5, 7, 2, 3];
// const NewFilterArr = FilterArr.filter(num => num % 2 === 0);

// console.log(NewFilterArr); 

// Task 9:-Use the reduce method to calculate the sum of all number in the array and log the result.
const ReduceArr = [1, 2, 3, 4, 5, 6, 7, 8]
const NewReduceArr = ReduceArr.reduce((acc, CurrentVal) => {
    return acc + CurrentVal
})

console.log(NewReduceArr);

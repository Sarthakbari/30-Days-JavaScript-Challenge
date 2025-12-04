// Activity 3: Switch case

// Task 4:- WAP that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let dayNumber = 1
let dayName; 
switch (dayNumber) {
    case 1:
        dayName = "Sunday"        
        break;
    case 2:
        dayName = "Monday"        
        break;
    case 3:
        dayName = "Tuesday"        
        break;
    case 4:
        dayName = "Wednesday"        
        break;
    case 5:
        dayName = "Thursday"        
        break;
    case 6:
        dayName = "Friday"        
        break;
    case 7:
        dayName = "Saturday"        
        break;
    default:
        dayName = "Invalid Day"
        break;
}
console.log(dayName);

// Task 5:- WAP that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let percentage = 90 
let grade ; 
switch (true) {
    case (percentage >= 90 && percentage <= 100):
        grade = 'A'
        console.log("Congratulation");
        break;
    case (percentage >= 70 && percentage <= 89):
        grade = 'B'
        console.log("Congratulation");
        break;
    case (percentage >= 50 && percentage <= 69):
        grade = 'C'
        console.log("Congratulation");
        break;
    case (percentage >= 35 && percentage <= 49):
        grade = 'D'
        console.log("Congratulation");
        break;
    default:
        grade = "F"
        console.log("SORRY your fail");
        break;
}
console.log(grade);
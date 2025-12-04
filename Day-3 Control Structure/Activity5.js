// Activity 5: combining Condition 

// Task 7:- WAP tocheck if a year is leap year using multiple conditions(divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2025
let leapYear ;

if (year % 400 == 0) {
    leapYear = true;
} else if(year % 100 == 0) {
    leapYear = false;
} else if(year % 4 == 0){
    leapYear = true;
} else{
    leapYear = false;
}

if (leapYear) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}
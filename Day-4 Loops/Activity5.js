// Activity 5: Loop control Statement. 

// Task 8:- WAP to print number from 1 to 10, but skip the number 5 using the continue Statement. 
for(let i = 1; i <= 10; i++){
    if(i == 5){
        continue;
    } 
    console.log(i);
}

// Task 9:- WAP to print number from 1 to 10, but stop the loop when the number is 7 using the break Statement. 
for(let j = 1; j <= 10; j++){
    // if(j == 8){
    //     break;
    // }
    if(j > 7){
        break;
    }
    console.log(j);
}

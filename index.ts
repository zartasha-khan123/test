#!/usr/bin/env node 

import inquirer from "inquirer";

//1) computer will generate a random number..

//2) user input for guessing number

//3) compare user input with computer generated number and show result.

const randomNumber= Math.floor(Math.random() * 6 + 1 );

const message="This is number guessing game: ";

const answers= await inquirer.prompt([
    {
        name:"zibsGuessedNumber",
        type:"numbers",
        message:"please guess a number between 1-6: ",
    },
]);

if(answers.zibsGuessedNumber === randomNumber){
    console.log("congragulations! you guessed right number: ")
}
else {
    console.log("you guessed wrong number");
}
#! /usr/bin/env node

import inquirer from "inquirer"


const randomnumber: number = Math.floor(Math.random() * 10 + 1)

console.log("Welcome! and best of luck ;)\n");


const answers = await inquirer.prompt([
    {
        name: "userGuessednumber",
        type: "number",
        message: "Let's guess a number between 1-10: "
    }
])

if(answers.userGuessednumber === randomnumber ){
    console.log("GG!!! You got it right");
} else{
    console.log("Please touch some grass, The number was", randomnumber);
}
console.log("\nHow was your experience? do let me know at discord.gg/m.w.");



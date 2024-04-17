#! /usr/bin/env node

// import the inquirer module which is a command line interface for Node.js
import inquirer from "inquirer"

// declare a constant answers and assign it ti the result of inquirer.prompt function

const answers: {
    sentence: string 
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter you text to let us count"
    }
])

const words = answers.sentence.trim().split(" ")

// print the array of words to the console
// console.log(words);

// print the word count of the sentence to the console
console.log("Your sentence's word count is:", words.length);

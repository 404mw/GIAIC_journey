import inquirer from "inquirer"


let answer = await inquirer.prompt([
    {message: "Enter your first number", type: "number", name: "firstNumber"},
    {message: "Enter second number", type: "number", name: "secondNumber"},
    {message: "Select one of the operater to perform action",
type: "list",
name: "operator",
choices: ["Addition", "Subtraction", "Multiplication", "Division",]
},


]);

// conditional statement
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Please touch grass");
}
    




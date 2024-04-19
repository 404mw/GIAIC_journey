import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    INR: 74.57,
    PKR: 280,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Select the currency you are converting from",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Select the currency you are converting to",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);

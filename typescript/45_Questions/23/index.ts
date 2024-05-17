/* Conditional Tests: Write a series of conditional tests.
Print a statement describing each test and your prediction for the results of each test.
Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru') 

Look closely at your results, and make sure you understand why each line evaluates to True or False.
Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */


let car1: string = "Subaru"
let car2: string = "Regerra"
let car3: string = "Pagani"
let car4: string = "Veneno"
let car5: string = "Terzo"


console.log(car1 == "Subaru"); // true
console.log(car2 == "Regerra"); // true
console.log(car3 == "Pagani"); // true
console.log(car4 == "Veneno"); // true
console.log(car5 == "Terzo"); // true

console.log(car1 == "Regerra"); // false - wrong variable called
console.log(car2 == "Terzo"); // false - wrong variable called
console.log(car3 == "pagani"); // false - written in wrong case
console.log(car4 == "Venone"); // false - typo
console.log(car5 == "Terzo."); // false - another typo
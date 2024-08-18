"use strict";
/*
Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies.
It should log each hobby with a statement saying you enjoy that hobby.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function myHobbies(...hobbies) {
    for (let i = 0; i < hobbies.length; i++) {
        console.log(`i like ${hobbies[i]}`);
    }
}
myHobbies("Running", "Reading", "Playing");
/* Multiline Template Literals:
Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
*/
let myIdealDay = `My ideal day would involve:
1. Waking up early and going for a jog.
2. Spending a few hours coding on a personal project.
3. Ending the day by reading a good book.`;
console.log(myIdealDay);
/* Refactoring to Arrow Functions:
Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
*/
function normalFunc(width, height) {
    return width * height;
}
let arrFunc = (width, height) => width * height;
console.log(arrFunc(4, 6));

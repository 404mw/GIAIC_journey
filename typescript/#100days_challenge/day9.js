"use strict";
//if statment
Object.defineProperty(exports, "__esModule", { value: true });
let allien = "Red";
if (allien == "Red") {
    console.log("You got it right");
}
if (allien == "Black") {
    console.log("You must be a colorblind"); // no output since the condition is false :)
}
// if-else statement
// if
if (allien == "Red") {
    console.log("Yep! its Red");
}
else {
    console.log("Sorry! it is'nt");
}
// else
if (allien == "Black") {
    console.log("Yep! its Red");
}
else {
    console.log("Sorry! it is'nt");
}
// if and else if statement
if (allien == "Red") {
    console.log("Yep! its Red");
}
else if (allien == "Black") {
    console.log("Sorry! it is'nt Black");
}
else if (allien == "Green") {
    console.log("Sorry! it is'nt Green");
}

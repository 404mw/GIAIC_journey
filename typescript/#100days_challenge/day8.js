"use strict";
// intentional array error
let place = ["San Francisco", "Seattle", "Tokyo", "Turkey", "Spain"];
place[5] = "Copenhagen";
console.log(place[6]);
// Conditional tests (3x true, 3x false)
let me = "M.W.";
let age = 25;
console.log(place[1] == "Seattle");
console.log(me == "M.W.");
console.log(age == 25);
console.log(me == "m.w.");
console.log(place[2] == "Spain");
console.log(place[5] == "Denmark");
// More Conditional Tests
//String Test
console.log("M.W." == "M.W.");
console.log("M.W." == "m.w.");
console.log("M.W.".toLowerCase() == "M.W.");
//Numeric Test
console.log(69 > 49.99);
console.log(69 < 49.99);
//Test using && and ||
console.log(true || false);
console.log(true && false);

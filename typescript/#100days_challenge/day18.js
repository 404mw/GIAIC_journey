"use strict";
/*Make a Smartphone Object:
Create a simple way to keep track of a smartphone's details.
Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Phone = {
    brand: "Samsung",
    model: "Fold6",
    otherInfo: {
        storage: "256GB",
        screenSize: `7.6"`,
        battery: "4400Mhz"
    }
};
/* Pulling Apart a Nested Object:
Imagine you have a list inside another list that shows what a computer programmer knows,
like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
*/
let dev = {
    languages: ["HTML", "CSS", "JS"],
    tools: ["Git", "Docker", "Webpack"],
    frameworks: ["React", "Angular", "Vue"]
};
let { languages, frameworks, tools } = dev;
console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);
/*
Making Flexible Object Keys:
Learn how to set up a list where you can change the name of each section based on what you need at that moment,
like adjusting labels based on user choices.
*/
function createObj(key, value) {
    let obj8 = {};
    obj8[key] = value;
    return obj8;
}
let createObj1 = (createObj("ABC", "123"));
console.log(createObj1);

"use strict";
/*
Enhanced Laptop Object: Construct an object for a laptop
including properties make, model, year, and a method describe()
that logs a sentence about the laptop.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let laptop5 = {
    make: "HP",
    model: "EliteBook",
    year: 2017,
    describe: function () {
        console.log(`This Laptop is from "${laptop5.make}", Model: "${laptop5.model}" and Year: "${laptop5.year}"`);
    }
};
laptop5.describe();
/*
Advanced Array Destructuring: Given an array of objects representing different laptops,
each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables.Then, log these variables.
*/
let laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 }
];
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);
/*
Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
*/
let price1 = [599, 1699, 999];
let price2 = [399, 1199, 799];
let sortedPrice = [...price1, ...price2].sort((a, b) => a - b);
console.log(sortedPrice);

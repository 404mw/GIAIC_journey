"use strict";
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let namE = "Eric";
// lowercase
console.log(namE.toLowerCase());
// uppercase
console.log(namE.toUpperCase());
// titlecase
console.log(namE.charAt(0).toUpperCase() + namE.slice(1).toLowerCase());

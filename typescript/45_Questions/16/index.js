"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. 
let guestS = ["Komgen", "Krate", "Spilph", "Onteo"];
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("Hey! I've found a bigger dinner table");
// Add one new guest to the beginning of your array
guestS.unshift("AK");
guestS.splice(guestS.length / 2, 0, "M4PI");
guestS.push("Adrian");
// Print a new set of invitation messages, one for each person in your list.
guestS.forEach(guestS => {
    console.log("Hey", guestS + ", would you like to come for dinner at my place");
});

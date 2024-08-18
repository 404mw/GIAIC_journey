"use strict";
// empty arrays
Object.defineProperty(exports, "__esModule", { value: true });
let users = [];
if (users.length === 0) {
    console.log("We desperately need some users");
}
else {
    console.log("Welcome! ");
}
// check for uniqueness in name
let currentUsers = ["Osama", "Muzammil", "Mubashir", "Huzaifa"];
let newUsers = ["Yahya", "Huzaifa", "Firasat", "Waqas", "Muzammil"];
newUsers.forEach(newUsers => {
    if (currentUsers.some(currentUsers => currentUsers.toLowerCase() === newUsers.toLowerCase())) {
        console.log(newUsers, "Need to change username.");
    }
    else {
        console.log(newUsers, "is available.");
    }
});
// Ordinal Suffix
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
numbers.forEach(number => {
    let Suffix = "th";
    if (number === 1) {
        Suffix = "st";
    }
    else if (number === 2) {
        Suffix = "nd";
    }
    else if (number === 3) {
        Suffix = "rd";
    }
    console.log(number, Suffix);
});

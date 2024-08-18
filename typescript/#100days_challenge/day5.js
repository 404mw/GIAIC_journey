"use strict";
// print a message to array
Object.defineProperty(exports, "__esModule", { value: true });
let Dream = ["Lamborghini", "Bugatti", "Ferrari"];
for (let i = 0; i < Dream.length; i++)
    console.log("Oneday, i'll be a Proud owner of " + Dream[i] + ", INSHALLAH!");
// print a message to array again :)
let guests = ["Krate", "Spilph", "Aravos"];
guests.forEach((guest) => {
    console.log("Dear " + guest + ", would you like to join me for dinner?");
});
// Replacing a value inside an array
let newGuest = "Onteo";
guests[guests.indexOf("Aravos")] = newGuest;
guests.forEach((guest) => {
    console.log("Dear " + guest + ", would you like to join me for dinner?");
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// array lengh
let guestlist = ["Krate", "Spilph", "Onteo", "Kongen", "beLIEver", "Thrill"];
console.log("I'm inviting " + guestlist.length + " Idlers to dinner");
let dream = ["San Francisco", "Seattle", "Cuba", "Turkey", "Spain"];
dream.forEach(dream => {
    console.log("One day i'd like to visit " + dream);
});
// creating an object
let AC = {
    title: "Unity",
    protagonist: "Arno Dorian",
    setIn: "French era(1776 - 1808 AD)",
    year: 2015
};
console.log("Assassin's Creed " + AC.title + " was released in " + AC.year + ", it was set in " + AC.setIn + " and had " + AC.protagonist + " as the main playable character. ");

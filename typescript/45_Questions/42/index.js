"use strict";
/*
Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.
*/
let magicianName42 = ["Bob", "Ryan", "Zoe", "Smith"];
function make_great42() {
    for (let i = 0; i < magicianName42.length; i++) {
        magicianName42[i] = "The Great " + magicianName42[i];
        console.log(magicianName42[i]);
    }
}
make_great42();

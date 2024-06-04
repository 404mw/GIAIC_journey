/*
Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and
one array with the Great added to each magician’s name.
*/


let magicianName43: string[] = ["Bob", "Ryan", "Zoe", "Smith"];


function make_great43(){
    let greatMag: string[] = [];
    for (let i = 0; i < magicianName43.length; i++){
         greatMag.push(`${magicianName43[i]} The great`)
    } return greatMag
}

console.log(magicianName43); // original array
console.log(make_great43()); // modified array

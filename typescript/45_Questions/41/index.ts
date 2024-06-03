/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.
*/

let magicianName41: string[] = ["Bob", "Ryan", "Zoe", "Smith"];

function show_magicians41(){
    for(let i = 0; i < magicianName41.length; i++){
        console.log(magicianName41[i]);
    }
}
show_magicians41()
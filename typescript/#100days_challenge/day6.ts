

let guest: string[] = ["Krate", "Spilph", "Onteo"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guest.unshift("Kongen");
guest.splice(guest.length / 2, 0, "Believer");
guest.push("Thrill");

guest.forEach(guest => {
    console.log("Dear "+ guest +", would you like to join me for dinner?");
});



// Ordering/reordering arrays

let places: string[] = ["San Francisco", "Seattle", "Tokyo", "Turkey", "Spain"];

/* code givin by instructer:

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);
*/

console.log(places)
console.log(places.sort())
console.log(places.reverse())


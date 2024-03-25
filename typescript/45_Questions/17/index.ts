/* Shrinking Guest List: 
You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests. */


// Start with your program from Exercise 16.

let guesTS :string[] = ["Komgen", "Krate", "Spilph", "Onteo"]

guesTS.unshift("Believer");
guesTS.splice(guesTS.length / 2, 0, "M4PI");
guesTS.push("Adrian");


// Add a new line that prints a message saying that you can invite only two people for dinner.

console.log("I got myself into a problem and i can only invite 2 more people");

// Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner
while (guesTS.length > 2) {
    let removGuest = guesTS.pop();
    console.log("Sorry! Sir Zia told me to not invite you", removGuest);
}

// Print a message to each of the two people still on your list, letting them know they’re still invited.
guesTS.forEach(guesTS => {
    console.log("Hey!", guesTS, "You are a valid guest");
    
});

// Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.

guesTS.splice(0, guesTS.length);
console.log(guesTS);






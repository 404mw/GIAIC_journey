"use strict";
// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guest = ["Komgen", "Krate", "Spilph", "Onteo"];
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it
let komgen = "Komgen cant attend dinner due to some security reasons";
console.log(komgen, "\n");
//  Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guest[guest.indexOf("Komgen")] = "Thrill";
// Print a second set of invitation messages, one for each person who is still in your list.
guest.forEach(guest => {
    console.log("Hey", guest + ", would you like to come for dinner at my place");
});

// else it practice

let agE: number = 35
if (agE <= 4 ) {
    console.log("Look, a  baby!!!");
} else if(agE <= 12) {
    console.log("Look, a kiddo!!!");
} else if (agE <= 20) {
    console.log("Look, a teenager!!!");
} else if (agE <= 25) {
    console.log("Look, an adult!!!");
} else if (agE > 25 ) {
    console.log("Look, an elder!!!");
}


// array x if-else

let fruits: string[] = ["Mango", "Kiwi", "Strawberry", "Melon"]
if (fruits.includes("Melon")) {
    console.log("You really like Melons");
} if (fruits.includes("Mango")) {
    console.log("You really like Mangoes");
}




// custom message to admin and users

let usernames: string[] = ["M.W.", "Ebad", "Abdullah", "Jawwad", "Aslam"];

usernames.forEach(username => {
    if (username === "M.W.") {
        console.log("Hello Admin, would you like to missuse your power (for fun)");
    } else {
        console.log("Hello "+ username +", Its nice to see you again.");
    }
});
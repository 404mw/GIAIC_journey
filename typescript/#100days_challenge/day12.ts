// loop through an array with custom message

// Pizza
let pizza: string[] = ["Mughlai", "Extra Cheese", "Fajita" ]
pizza.forEach(pizza => {
    console.log("I like", pizza, "pizza");
})



// Animal

let Animal: string[] = ["Parrot", "Fish", "Lion", "Elephant"]
Animal.forEach(Animal => {
    console.log("I'd like to have", Animal, "as a pet");
})



// Create a function

function make_shirt(
    size: string = "XL",
    message: string = "And life sucks") {
    console.log(`Making a`, size, `t-shirt with the message`, message, `printed on it.`);
}

make_shirt("medium", "Code is Life");
make_shirt();
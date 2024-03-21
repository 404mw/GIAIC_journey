"use strict";
// default values in function
function makeshirt(size = "large", message = "I love TypeScript") {
    console.log("Making a", size, "t-shirt with the message", message, "printed on it.");
}
makeshirt();
makeshirt("medium");
makeshirt("XXL", "Dive into Coding");
// default values in function-2
function defineCountry(city, country = "UAE") {
    console.log(city, "Is located in", country);
}
defineCountry("Dubai");
defineCountry("Seattle", "USA");
defineCountry("Jeddah");
defineCountry("Tokyo", "Japan");
// tbh i have no idea what have i done here (21 Mar 24)
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));

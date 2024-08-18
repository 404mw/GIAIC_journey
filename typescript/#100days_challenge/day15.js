"use strict";
/*
Cars: Create detailed car objects with flexible properties.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    for (let i = 0; i < options.length; i++) {
        const [key, value] = options[i];
        car[key] = value;
    }
    return car;
}
// Example usage:
const car = createCar("Toyota", "Camry", ["color", "blue"], ["feature", "sunroof"]);
console.log(car);

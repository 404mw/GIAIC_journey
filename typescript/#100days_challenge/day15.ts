/*
Cars: Create detailed car objects with flexible properties.
*/


type CarInfo = {
    manufacturer: string;
    model: string;
    [key: string]: any;
  };
  
  function createCar(manufacturer: string, model: string, ...options: [string, any][]): CarInfo {
    let car: CarInfo = {
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
  
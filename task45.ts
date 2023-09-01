/*Cars: Write a function that stores information about a car in a Object. The function should always receive a 
manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function 
with the required information and two other name-value pairs, such as a color or an optional feature. Print the 
Object that’s returned to make sure all the information was stored correctly.*/

function createCar(manufacturer: string, modelName: string, ...options: any[]) {
    const car = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Process optional keyword arguments
    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];
        car[key] = value;
    }

    return car;
}

// Call the function with required and optional information
const carInfo = createCar("Toyota", "Camry", "color", "Blue", "year", 2022);

// Print the resulting car object
console.log(carInfo);

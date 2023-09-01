/*Conditional Tests: Write a series of conditional tests. Print a statement 
describing each test and your prediction for the results of each test. Your code 
should look something like this:

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates
 to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 
tests evaluate to False.*/

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');  // case sensitive

console.log("Is car !== 'toyota'? I predict True.");
console.log(car !== 'toyota');

console.log("Is car != 'ford'? I predict True.");
console.log(car != 'ford');

let age = 18;
console.log("Is age > 21? I predict False.");
console.log(age > 21);  // This will output: false

let temperature = 28;
console.log("Is temperature < 0? I predict False.");
console.log(temperature < 0);  // Prediction: false

let names = 'Alice';
console.log("Is name === 'alice'? I predict False."); // case sensitive
console.log(names === 'alice');  // Prediction: false

let score = 90;
console.log("Is score >= 80? I predict True.");
console.log(score >= 80);  // Prediction: true

let fruit = 'apple';
console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana');  // Prediction: true
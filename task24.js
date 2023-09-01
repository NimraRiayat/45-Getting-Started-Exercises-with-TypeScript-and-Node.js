/*More Conditional Tests: You don’t have to limit the number of tests you create to
10. If you want to try more comparisons, write more tests. Have at least one True
and one False result for each of the following:

• Tests for equality and inequality with strings.
• Tests using the lower case function.
• Numerical tests involving equality and inequality, greater than and less than,
greater than or equal to, and less than or equal to.
• Tests using "and" and "or" operators.
• Test whether an item is in a array.
• Test whether an item is not in a array.*/
// Tests for equality and inequality with strings
var city = 'New York';
console.log("Is city equal to 'New York'?"); // Answer: true
console.log(city === 'New York');
var country = 'USA';
console.log("Is country not equal to 'Canada'?"); // Answer: true
console.log(country !== 'Canada');
// Tests using the lowercase function
var fullName = 'John Doe';
console.log("Is fullName in lowercase equal to 'john doe'?"); // Answer: true
console.log(fullName.toLowerCase() === 'john doe');
// Numerical tests
var num1 = 10;
var num2 = 20;
console.log("Is num1 less than num2?"); // Answer: true
console.log(num1 < num2);
console.log("Is num1 not equal to num2?"); // Answer: true
console.log(num1 !== num2);
// Tests using "and" and "or" operators
var isSunny = true;
var isWeekend = false;
console.log("Is it sunny and the weekend?"); // Answer: false
console.log(isSunny && isWeekend);
console.log("Is it sunny or the weekend?"); // Answer: true
console.log(isSunny || isWeekend);
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array?"); // Answer: true
console.log(fruits.indexOf('apple')); /* gives -1 when required
                                              thing isn't present in array...undefined(-1)*/
// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array?"); // Answer: true
console.log(fruits.indexOf('grape') === -1);

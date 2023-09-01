/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.*/

let guests=["Watson","John","Ali","Shake","Mike","Luther"];
console.log(guests);

//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("sorry, I have to invite 2 guests instead of 3");

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
let a=guests.pop();
console.log(a+" I'm sorry,I can't invite you for dinner");
let b=guests.pop();
console.log(b+" I'm sorry,I can't invite you for dinner");
let c=guests.pop();
console.log(c+" I'm sorry,I can't invite you for dinner");
let d=guests.pop();
console.log(d+" I'm sorry,I can't invite you for dinner");

// Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(guests[0]+" You are still invited");
console.log(guests[1]+" You are still invited");

//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
guests.splice(0,2);
console.log(guests);






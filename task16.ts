/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more
 guests to invite to dinner.*/


var guests = ["John", "Shake", "Mike"];
console.log(guests);

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("I'm have a bigger dinner table,so I have to invite more guests.");

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
guests.unshift("watson");

// Add one new guest to the middle of your array
guests.splice(2,0,"Ali");

//Use push() to add one new guest to the end of your list.
guests.push("Luther");

//Print a new set of invitation messages, one for each person in your list.
console.log(guests);
for(let i=0; i<guests.length; i++){
    console.log(guests[i]+" I'm inviting you for dinner.");
}
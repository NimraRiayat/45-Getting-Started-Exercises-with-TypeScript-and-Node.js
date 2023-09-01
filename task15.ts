/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send
 out a new set of invitations. You’ll have to think of someone else to invite.*/

//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
 var guests = ["John", "Shake", "Mike"];
console.log(guests);
console.log(guests[0]+"! I would like to invite you to dinner.");
console.log(guests[1]+"! I would like to invite you to dinner.");
console.log(guests[2]+"! I would like to invite you to dinner.");

//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting
console.log(guests[1]);
guests[1]="Mark";

//• Print a second set of invitation messages, one for each person who is still in your list.
console.log(guests);
console.log(guests[0]+"! I would like to invite you to dinner.");
console.log(guests[1]+"! I would like to invite you to dinner.");
console.log(guests[2]+"! I would like to invite you to dinner.");


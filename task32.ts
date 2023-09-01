/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a 
unique username.

• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the 
current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message 
that the person will need to enter a new username. If a username has not been used, print a message saying that the
username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

let current_users=[`ali`, `aijn`, `user`, `max`, `jam`]
let new_users=[`jaj`, `pol`, `max`, `jam`, `wood`]


for (let newUsername of new_users) {
    if (current_users.includes(newUsername)) {
        console.log(`Username '${newUsername}' is already taken. Please choose a different username.`);
    } else {
       current_users.push(newUsername); // Add the new username to current_users
        console.log(`Username '${newUsername}' is available.`);
    }
}



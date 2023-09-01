/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing
code that will print a greeting to each user after they log in to a website. Loop through the array, and print
 a greeting to each user:*/
/*• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status
 report?*/
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var usernames = ["Ali", "Mark", "Shake", "Mike", "Admin"];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
        break;
    }
    else
        console.log("Hello ".concat(username, ", thank you for logging in again."));
}

/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I
love TypeScript.*/
// 1st METHOD
// function make_shirt(size,message){
//     console.log(`shirt with ${size} size , has a message : ${message} `);
// }
// let shirt_size =`large`;   // by default I'm keeping size large
// /*Make a large shirt and a medium shirt with the default message, and a shirt of any size with a 
// different message.*/
// if(shirt_size==`large` || shirt_size ==`medium`){
// make_shirt(`large & medium`,`I love Typescript`); //when size is large or medium function is called with this message
// }
// if(shirt_size!=`large` && `medium`)  // when size is other than large & medium this message is printed
//     make_shirt(`other than large & medium`,`Typescript is Savage`);
//2nd METHOD
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the message: \"").concat(message, "\""));
}
// Create a large shirt with the default message
make_shirt(); // Output: Creating a large shirt with the message: "I love TypeScript"
// Create a medium shirt with the default message
make_shirt("medium"); // Output: Creating a medium shirt with the message: "I love TypeScript"
// Create a custom-sized shirt with a different message
make_shirt("small", "Typescript Is Savage!"); // Output: Creating a small shirt with the message: "Hello, World!"

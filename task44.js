/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have
one parameter that collects as many items as the function call provides, and it should print a summary of the
 sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
    console.log("Sandwich is ready!\n");
}
// Call the function with different numbers of arguments
makeSandwich("Bread", "Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Bread", "Peanut Butter", "Jelly");
makeSandwich("Bread", "Turkey", "Swiss Cheese");

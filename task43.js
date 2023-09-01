/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the
array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a
separate array. Call show_magicians() with each array to show that you have one array of the original names and one
array with the Great added to each magician’s name.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = []; // Create a new array for the modified names
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians; // Return the new array
}
var magicianNames = ["charlie", "dynamo", "harry", "jojo"];
// Call make_great() with a copy of the original array and store the result in a new array
var greatMagicianNames = make_great(__spreadArray([], magicianNames, true));
// Call show_magicians() with both arrays to display the original and modified names
console.log("Original Magician Names:");
show_magicians(magicianNames);
console.log("\nGreat Magician Names:");
show_magicians(greatMagicianNames);

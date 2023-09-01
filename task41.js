/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints
the name of each magician in the array.*/
var magician = ["charlie", "dynamo", "harry", "jojo"];
function show_magicians(magician) {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var name_1 = magician_1[_i];
        console.log(name_1);
    }
}
show_magicians(magician);

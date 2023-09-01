/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these
animals in a list, and then use a for loop to print out the name of each animal.*/
var animals = ["lion", "turle", "alien"];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
    /* Modify your program to print a statement about each animal, such as A dog would make a great pet.*/
    if (animals[i] == "turle") {
        console.log("white hair turtle is rare");
    }
    else if (animals[i] == "alien") {
        console.log("alien are unknown creatures");
    }
    else {
        console.log("lion rule over jungle");
    }
}

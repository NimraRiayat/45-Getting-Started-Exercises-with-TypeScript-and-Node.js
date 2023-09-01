/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the 
array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a 
separate array. Call show_magicians() with each array to show that you have one array of the original names and one 
array with the Great added to each magician’s name.*/

function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]) {
    const greatMagicians: string[] = []; // Create a new array for the modified names
    for (const magician of magicians) {
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians; // Return the new array
}

const magicianNames: string[] = [`charlie`,`dynamo`,`harry`,`jojo`];

// Call make_great() with a copy of the original array and store the result in a new array
const greatMagicianNames = make_great([...magicianNames]);

// Call show_magicians() with both arrays to display the original and modified names
console.log("Original Magician Names:");
show_magicians(magicianNames);

console.log("\nGreat Magician Names:");
show_magicians(greatMagicianNames);



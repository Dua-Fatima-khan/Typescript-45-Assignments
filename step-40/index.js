// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Function to show magicians from an array
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Function to modify magicians' names by adding "the Great"
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Array of magician names
var magician_names = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Create a copy of the original array
var original_magicians = magician_names.slice();
// Modifying a copy of the array to add "the Great"
var great_magicians = make_great(original_magicians);
// Calling the function to show original magicians
console.log("Original Magicians:");
show_magicians(magician_names);
// Calling the function to show modified magicians
console.log("\nModified Magicians:");
show_magicians(great_magicians);

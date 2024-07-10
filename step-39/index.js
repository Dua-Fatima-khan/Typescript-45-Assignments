// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
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
// Modifying magician names to add "the Great"
var great_magicians = make_great(magician_names);
// Calling the function to show modified magicians
show_magicians(great_magicians);

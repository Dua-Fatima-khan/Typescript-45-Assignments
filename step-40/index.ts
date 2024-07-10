// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// Function to show magicians from an array
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
      console.log(magician);
    });
  }
  
  // Function to modify magicians' names by adding "the Great"
  function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
  }
  
  // Array of magician names
  const magician_names: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  // Create a copy of the original array
  const original_magicians = magician_names.slice();
  
  // Modifying a copy of the array to add "the Great"
  const great_magicians = make_great(original_magicians);
  
  // Calling the function to show original magicians
  console.log("Original Magicians:");
  show_magicians(magician_names);
  
  // Calling the function to show modified magicians
  console.log("\nModified Magicians:");
  show_magicians(great_magicians);
  
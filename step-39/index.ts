// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

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
  
  // Modifying magician names to add "the Great"
  const great_magicians = make_great(magician_names);
  
  // Calling the function to show modified magicians
  show_magicians(great_magicians);
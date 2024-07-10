// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Function to show magicians from an array
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
      console.log(magician);
    });
  }
  
  // Array of magician names
  const magician_names: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  // Calling the function to show magicians
  show_magicians(magician_names);
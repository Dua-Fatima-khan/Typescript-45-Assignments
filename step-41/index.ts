// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// Function to summarize sandwich order
function make_sandwich(items: string[]): void {
    console.log("Sandwich order:");
    if (items.length === 0) {
      console.log("  - No items selected.");
    } else {
      items.forEach(item => {
        console.log(`  - ${item}`);
      });
    }
    console.log(); // Empty line for separation
  }
  
  // Calling the function with different numbers of arguments
  make_sandwich(["Ham", "Cheese", "Lettuce"]);
  make_sandwich(["Turkey", "Swiss"]);
  make_sandwich(["Peanut Butter", "Jelly", "Banana", "Honey"]);
  make_sandwich([]); // Testing with no items
  
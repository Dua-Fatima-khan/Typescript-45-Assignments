// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


// Function to make a shirt
function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}"`);
  }
  
  // Calling the function with sample values
  make_shirt("L", "I love TypeScript!");
  make_shirt("M", "Coding is fun!");
  make_shirt("S", "Hello, world!");
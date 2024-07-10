//Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.
let places:string[]=["Santorini","Maui","Kyoto","Bora Bora","Cappadocia"];

// • Print your array in its original order.

console.log(places);

// • Print your array in alphabetical order without modifying the actual list.

console.log(`\n\t\t Alaphabetical order\n\n ${[...places].sort()}`);

// • Show that your array is still in its original order by printing it.

console.log(`\n${places}`);


// • Print your array in reverse alphabetical order without changing the order of the original list.

console.log(`\n\t\tReverse Alaphabetical order\n\n ${places.sort().reverse()}`);


// • Show that your array is still in its original order by printing it again.
console.log(`\n${places}`);

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log(`\nagain Reverse Order!!\n${[...places].sort().reverse()}`);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

let alphabetical_order=[...places].sort();
console.log(`\n\t\t Alaphabetical order\n\n ${alphabetical_order}`);
    
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let reverse_alphabetical_order=places.sort().reverse();
console.log(`\n\t\t Reverse Alaphabetical order\n\n ${reverse_alphabetical_order}`);







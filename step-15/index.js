//Seeing the World: Think of at least five places in the world you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var places = ["Santorini", "Maui", "Kyoto", "Bora Bora", "Cappadocia"];
// • Print your array in its original order.
console.log(places);
// • Print your array in alphabetical order without modifying the actual list.
console.log("\n\t\t Alaphabetical order\n\n ".concat(__spreadArray([], places, true).sort()));
// • Show that your array is still in its original order by printing it.
console.log("\n".concat(places));
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n\t\tReverse Alaphabetical order\n\n ".concat(places.sort().reverse()));
// • Show that your array is still in its original order by printing it again.
console.log("\n".concat(places));
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nagain Reverse Order!!\n".concat(__spreadArray([], places, true).sort().reverse()));
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
var alphabetical_order = __spreadArray([], places, true).sort();
console.log("\n\t\t Alaphabetical order\n\n ".concat(alphabetical_order));
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var reverse_alphabetical_order = places.sort().reverse();
console.log("\n\t\t Reverse Alaphabetical order\n\n ".concat(reverse_alphabetical_order));

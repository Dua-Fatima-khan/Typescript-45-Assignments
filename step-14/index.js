//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("\n\t\tGuests List\t");
var guestlist = ["Tabassum", "Hani", "Saba"];
// Printing initial invitations
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("Dear ".concat(guest, ", You're warmly invited to join us for a delightful dinner at our place!!"));
}
// Name of guest who can't make it
console.log("\n".concat(guestlist[0], " can't make it!\n"));
// Remove guest who can't make it
guestlist.shift();
// Add new guests
guestlist.push("Dua");
// Updated guests list
console.log("\n\t\tUpdated guests list!!\n");
for (var _a = 0, guestlist_2 = guestlist; _a < guestlist_2.length; _a++) {
    var guest = guestlist_2[_a];
    console.log("Dear ".concat(guest, ", You're warmly invited to join us for a delightful dinner at our place!!"));
}
// Announcement about a bigger dinner table
console.log("\t\nAnnouncement!!\n\t\tWe just found a bigger dinner table!\n\n");
// Add new guests at various positions
guestlist.unshift("Mubashir"); // Add at the beginning
guestlist.splice(3, 0, "Arfeen"); // Add in the middle
guestlist.push("Afshan"); // Add at the end
// Print updated guest list with new invitations
console.log("\n\t\tUpdated guests list with new Invitations!!\n");
for (var _b = 0, guestlist_3 = guestlist; _b < guestlist_3.length; _b++) {
    var guest = guestlist_3[_b];
    console.log("Dear ".concat(guest, ", You're warmly invited to join us for a delightful dinner at our place!!\n"));
}
// Print message that we can only invite two people now
console.log("\t\nAnnouncement!!\n\t\tWe can only invite two people for dinner now.\n\n");
// Remove guests until only two names remain
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Notify the remaining guests they're still invited
console.log("\n\tFinal Guests!!\n");
for (var _c = 0, guestlist_4 = guestlist; _c < guestlist_4.length; _c++) {
    var guest = guestlist_4[_c];
    console.log("".concat(guest, ", You are still Invited."));
}
// Empty the guest list
guestlist = [];
// Final confirmation that the guest list is empty
console.log("\nFinal list: ".concat(guestlist));

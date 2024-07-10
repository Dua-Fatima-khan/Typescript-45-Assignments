//15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite. 
//* Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//* Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//* Print a second set of invitation messages, one for each person who is still in your list.
//guests list!!
console.log("\n\t\tGuests List\t");
var guestlists = ["Tabassum", "Hani", "Saba"];
for (var _i = 0, guestlists_1 = guestlists; _i < guestlists_1.length; _i++) {
    var guest = guestlists_1[_i];
    console.log("Dear ".concat(guest, ",You're warmly invited to join us for a delightful dinner at our place!!"));
}
//Name of Guest who can't make it!1
console.log("".concat(guestlists[0], " can't make it!!"));
// remove guests
guestlists.shift();
//Add guest
guestlists.push("Dua", "Fatima");
console.log("\n\t\tUpdated guests list!!\n");
for (var _a = 0, guestlists_2 = guestlists; _a < guestlists_2.length; _a++) {
    var guest = guestlists_2[_a];
    console.log("Dear ".concat(guest, ",You're warmly invited to join us for a delightful dinner at our place!!"));
}

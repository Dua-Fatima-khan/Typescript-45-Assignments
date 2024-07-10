//15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite. 
//* Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//* Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//* Print a second set of invitation messages, one for each person who is still in your list.


console.log("\n\t\tGuests List\t");
let guestlists: string[] = ["Tabassum", "Hani", "Saba"];

// Printing initial invitations
for (let guest of guestlists) {
    console.log(`Dear ${guest}, You're warmly invited to join us for a delightful dinner at our place!!`);
}

// Name of guest who can't make it
console.log(`\n${guestlists[0]} can't make it!\n`);

// Remove guest who can't make it and add new guest
guestlists.shift(); // Remove the first guest
guestlists.push("Dua Fatima"); // Add new guest

console.log("\n\t\tUpdated Guests List!!\n");

// Printing updated invitations
for (let guest of guestlists) {
    console.log(`Dear ${guest}, You're warmly invited to join us for a delightful dinner at our place!!`);
}
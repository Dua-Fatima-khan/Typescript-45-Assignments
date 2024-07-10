// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var arrs = ["Admin", "user1", "user2", "user3", "user4"];
for (var _i = 0, arrs_1 = arrs; _i < arrs_1.length; _i++) {
    var arr = arrs_1[_i];
    if (arr === "Admin") {
        console.log("Hello ".concat(arr, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello  ".concat(arr, ",thank you for logging in again."));
    }
}

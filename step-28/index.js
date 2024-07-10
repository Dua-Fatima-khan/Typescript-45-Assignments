// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var users = []; // Empty array
// Check if the list of users is empty
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user === "Admin") {
            console.log("Hello ".concat(user, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again."));
        }
    }
}

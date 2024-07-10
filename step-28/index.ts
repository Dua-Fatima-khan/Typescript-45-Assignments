// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.


  let users: string[] = []; // Empty array

// Check if the list of users is empty
if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let user of users) {
        if (user === "Admin") {
            console.log(`Hello ${user}, would you like to see a status report?`);
        } else {
            console.log(`Hello ${user}, thank you for logging in again.`);
        }
    }
}
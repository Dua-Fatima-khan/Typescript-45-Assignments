//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each messageshould be the same, but each message should be personalized with the person’s name.
var names = ["Tabassum khan", "Dua", "Fatima", "Saba", "Sumbul"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("\nDear ".concat(name_1, ", Your presence in my life is a true blessing. May Allah bless you with happiness and success. \uD83C\uDF1F"));
}

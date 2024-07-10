//13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var countries = ["US", "Uk", "Germany", "Turkey", "Saudi Arabia", "Egypt"];
for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
    var country = countries_1[_i];
    console.log("I would like to go ".concat(country, " for studies."));
}

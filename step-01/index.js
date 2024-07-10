//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Dua Fatima";
console.log(personName.toLocaleLowerCase());
console.log(personName.toLocaleUpperCase());
console.log(personName.replace(/\b\w/g, function (match) { return match.toUpperCase(); }));

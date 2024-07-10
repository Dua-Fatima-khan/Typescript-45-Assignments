// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var books = [
    {
        title: "The Shining",
        author: "Stephen King",
        published: 1977,
    },
    {
        title: "Dracula",
        author: "Bram Stoker",
        published: 1897
    },
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        published: 1818
    },
    {
        title: "The Haunting of Hill House",
        author: "Shirley Jackson",
        published: 1959
    },
    {
        title: "Bird Box",
        author: "Josh Malerman",
        published: 2014
    }
];
for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
    var book = books_1[_i];
    for (var i = 1; i <= 5; i++)
        console.log("\tBook ".concat(i, "!!\n\nTitle:").concat(book.title, "\nAuthor:").concat(book.author, "\nPublished year:").concat(book.published, "\n"));
}

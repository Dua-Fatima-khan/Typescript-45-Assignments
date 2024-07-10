// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

type book={
    title: string;
    author:string;
    published: number;
}

let books:book[]=[
{
    title: "The Shining",
    author:"Stephen King",
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
}];

for(let book of books){
    for(let i=1 ;i<=5; i++)
    console.log(`\tBook ${i}!!\n\nTitle:${book.title}\nAuthor:${book.author}\nPublished year:${book.published}\n`);
}
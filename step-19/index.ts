// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

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

console.log(`\n\tAccessing Invalid Index!!\n`);
console.log(books[10]);


console.log(`\n\tAccessing Valid Index!!\n`);
console.log(books[3]);

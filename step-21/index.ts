// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:


// • Tests for equality and inequality with strings
let str1="Hello", str2="Hello";
console.log(`\nTest for Strings Inequality\n${str1} is equal to ${str2} (${str1===str2})`);
let Str1="Dua" , Str2="Fatima";
console.log(`\nTest for Strings Equality\n${Str1} is equal to ${Str2} (${Str1!==Str2})`);

// • Tests using the lower case function

let str3="Hello", str4="hello";
console.log(`\nTest Using Lower case function!!\n${str3.toLocaleLowerCase()} is equal to ${str4} (${str3.toLowerCase()==str4})`);

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\n\tNumerical Test!!\n")
let num1=3,num2=10;
    console.log(`{num1} is greater than ${num2}\t (${num1>num2})` );
    console.log(`${num1} is less than ${num2}\t (${num1<num2})` );
    console.log(`${num1} is greater than and equal to ${num2}\t( ${num1>=num2})` );
    console.log(`${num1} is less than and equal to ${num2}\t (${num1<=num2})` );
    console.log(`${num1} is equal to ${num2}\t (${num1===num2})` );
    console.log(`${num1} is not equal to ${num2}\t (${num1!==num2})` );

// • Tests using "and" and "or" operators
console.log("\n\tBoolean Test!!\n");
let bool1=true,bool2=false;
    console.log(`bool1 AND bool2 are true!!\t (${bool1&&bool2})` );
    console.log(`bool1 OR bool2 is true!! \t (${bool1||bool2})` );


// • Test whether an item is in a array
console.log("\n\tArray Test!!\n");
let arr:number[]=[1,2,3,4,5];
console.log(`Number 3 is include in this array!!\t (${arr.includes(3)})` );
console.log(`Number 6 is include in this array!!\t (${arr.includes(6)})` );


// • Test whether an item is not in a array

console.log("\n\tArray Test!!\n");
let arr1:number[]=[1,2,3,4,5];
console.log(`Number 8 is not include in this array!!\t (${!arr.includes(8)})` );
console.log(`Number 3 is include in this array!!\t (${!arr.includes(3)})` );


// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
var str1 = "Hello", str2 = "Hello";
console.log("\nTest for Strings Inequality\n".concat(str1, " is equal to ").concat(str2, " (").concat(str1 === str2, ")"));
var Str1 = "Dua", Str2 = "Fatima";
console.log("\nTest for Strings Equality\n".concat(Str1, " is equal to ").concat(Str2, " (").concat(Str1 !== Str2, ")"));
// • Tests using the lower case function
var str3 = "Hello", str4 = "hello";
console.log("\nTest Using Lower case function!!\n".concat(str3.toLocaleLowerCase(), " is equal to ").concat(str4, " (").concat(str3.toLowerCase() == str4, ")"));
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\n\tNumerical Test!!\n");
var num1 = 3, num2 = 10;
console.log("{num1} is greater than ".concat(num2, "\t (").concat(num1 > num2, ")"));
console.log("".concat(num1, " is less than ").concat(num2, "\t (").concat(num1 < num2, ")"));
console.log("".concat(num1, " is greater than and equal to ").concat(num2, "\t( ").concat(num1 >= num2, ")"));
console.log("".concat(num1, " is less than and equal to ").concat(num2, "\t (").concat(num1 <= num2, ")"));
console.log("".concat(num1, " is equal to ").concat(num2, "\t (").concat(num1 === num2, ")"));
console.log("".concat(num1, " is not equal to ").concat(num2, "\t (").concat(num1 !== num2, ")"));
// • Tests using "and" and "or" operators
console.log("\n\tBoolean Test!!\n");
var bool1 = true, bool2 = false;
console.log("bool1 AND bool2 are true!!\t (".concat(bool1 && bool2, ")"));
console.log("bool1 OR bool2 is true!! \t (".concat(bool1 || bool2, ")"));
// • Test whether an item is in a array
console.log("\n\tArray Test!!\n");
var arr = [1, 2, 3, 4, 5];
console.log("Number 3 is include in this array!!\t (".concat(arr.includes(3), ")"));
console.log("Number 6 is include in this array!!\t (".concat(arr.includes(6), ")"));
// • Test whether an item is not in a array
console.log("\n\tArray Test!!\n");
var arr1 = [1, 2, 3, 4, 5];
console.log("Number 8 is not include in this array!!\t (".concat(!arr.includes(8), ")"));
console.log("Number 3 is include in this array!!\t (".concat(!arr.includes(3), ")"));

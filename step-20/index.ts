//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


//Test 1: if Num1 is greater than Num2
let num1=10, num2=8;
    console.log(`\n\tTest 1!!\n${num1} is greater than ${num2}\t ${num1>num2}` );
//Test 2: if Num3 is less than Num4
let num3=20, num4=3;
    console.log(`\n\tTest 2!!\n${num3}is less than ${num4}\t ${num1<num2}`);
//Test 3: if Num3 is less than Num4
let str1="Hello", str2="World";
    console.log(`\n\tTest 3!!\n${str1} is equal to ${str2}\t ${str1==str2}`);
//Test 4: if Num5 is not equal to Num6
let num5=30, num6=89;
    console.log(`\n\tTest 4!!\n${num5} is not equal to ${num6}\t ${num1!=num2}`);
//Test 5: if Num3 is less than and equal to Num4
let num7=20, num8=45;
    console.log(`\n\tTest 5!!\n${num3} is less than and equal to ${num4}\t ${num1<=num2}`);
//Test 6: if Num3 is greater than and equal to Num4
let num9=20, num10=6;
console.log(`\n\tTest 6!!\n${num3} is greater than and equal to ${num4}\t ${num1>=num2}`);
//Test 7: if Null_var is null
let null_var=null;
console.log(`\n\tTest 7!!\nnull_var is equal to ${null}\t ${null_var===null}`);
//Test 8: if boolean var is true or false
let bool_var=true;
console.log(`\n\tTest 8!!\n boolean is equal to ${true}\t ${bool_var==true}`);
//Test 9: if empty variable is empty
let empty_var="";
console.log(`\n\tTest 9!!\n empty_var is not equal to empty \t ${empty_var!=""}`);
//Test 10: if Num3 is less than Num4
let x;
console.log(`\n\tTest 10!!\nx is udefined\t ${x==undefined}`);

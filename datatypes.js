"use strict";
/* string */
let lname;
lname = "Zuckerberg";
let newName = lname.toUpperCase();
console.log(newName);
/* number */
let age;
// age = "25"; // Error
age = 21;
age = 42.36;
console.log(age);
let strNb = "34";
let result = parseInt(strNb);
console.log(strNb);
/* boolean */
/*
let isValid: boolean;
console.log(isValid); // Error : Variable 'isValid' is used before
// being assigned ("strict mode" is used by default by TS)
// isValid ==> "undefined" in JS
*/
let isValid = false;
console.log(isValid);
/* array */
let emptyList;
// Error ==> Type 'number' is not assignable to type 'string'
// emptyList = ["mango", "apple", "banana", "strawberry", 1];
let deptList; // Generics
let numbList; // Generics
numbList = [1, 2, 3, 4, 5];
let c = 2 /* Color.Blue */;
/* tuple */
let numbersTuple;
function swapNumbers(num1, num2) {
    return [num1, num2];
}
numbersTuple = swapNumbers(10, 20);
numbersTuple[0]; // OK
numbersTuple[1]; // OK
// numbersTuple[2]; // Error
/* any */
let department; // Never used type "any" in Production
department = "IT";
department = 10;
/* void */ 

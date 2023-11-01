/* string */
let lname: string;

lname = "Zuckerberg";

let newName = lname.toUpperCase();

console.log(newName);

/* number */
let age: number;
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

let isValid: boolean = false;
console.log(isValid);

/* array */
let emptyList: string[];
// Error ==> Type 'number' is not assignable to type 'string'
// emptyList = ["mango", "apple", "banana", "strawberry", 1];

let deptList: Array<string>; // Generics
let numbList: Array<number>; // Generics
numbList = [1, 2, 3, 4, 5];

/* enum */
const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;

/* tuple */
let numbersTuple: [number, number];

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num1, num2];
}

numbersTuple = swapNumbers(10, 20);

numbersTuple[0]; // OK
numbersTuple[1]; // OK
// numbersTuple[2]; // Error

/* any */
let department: any; // Never used type "any" in Production

department = "IT";
department = 10;

/* void */
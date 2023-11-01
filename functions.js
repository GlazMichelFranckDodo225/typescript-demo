"use strict";
let myArray = [1, 2, 3, 4, 5];
/* Native Functions */
// filter()
let result2 = myArray.filter(numb => numb > 2);
console.log(result2); // [ 3, 4, 5 ]
// find()
let result3 = myArray.find(numb => numb === 2);
console.log(result3);
let employeeList = ["John", "Yves", "Jeanne", "Noel"];
let employee = employeeList.find(empl => empl === "Jeanne");
console.log(employee); // "Jeanne"
// reduce()
let sumOfmyArray = myArray.reduce((acc, numb) => acc + numb);
console.log(sumOfmyArray); // 15
/* Functions */
// Parameter "num3" is optional
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(10, 20));
console.log(add(10, 20, 30));
// Parameter "num3" has a default value (10)
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(10, 20));
console.log(sub(10, 20, 30));
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(15, 3));
// Rest Parameters
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
console.log(add2(2, 3, ...[1, 2, 3, 4, 5]));
console.log(add2(2, 3, 1, 2, 3, 4, 5));
// Generic Function
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d", "e"]);
console.log(concatResult);
console.log(concatString);

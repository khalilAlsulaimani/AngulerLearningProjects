"use strict";
// optinal parameter
function add(num1, num2, num3) {
    // inline if statment
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
const sub = (num1, num2) => num1 - num2;
const mult = function (num1, num2, num3 = 10) {
    return num1 * num2;
};
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
console.log(add(1, 2));
console.log("optinal parameter " + add(1, 2, 3));
console.log(sub(1, 3));
console.log(mult(1, 3));
function getItems(items) {
    return new Array().concat(items);
}

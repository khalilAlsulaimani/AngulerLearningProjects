// optinal parameter
function add(num1: number, num2: number, num3?: number): number {
  // inline if statment
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

const sub = (num1: number, num2: number): number => num1 - num2;

const mult = function (num1: number, num2: number, num3 = 10): number {
  return num1 * num2;
};

function add2(num1: number, num2: number, ...num3: number[]): number {
  return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

console.log(add(1, 2));
console.log("optinal parameter " + add(1, 2, 3));

console.log(sub(1, 3));

console.log(mult(1, 3));

function getItems<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

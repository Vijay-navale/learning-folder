// value types --> String, boolean, number, undefined, null, symbol
// refernce types --> object, functions, arrays
let c = 10;
let x = c;
c = 20;
let obj1 = { value: 20 }; //refernce are stored in terms of some sort of machine address like 1234 so this refernce of 1234 will get stored in variable and not whole object as value
let obj2 = obj1;
obj2.value = 30;

let number = 10;
function inc(number) {
  number++;
}
inc(number);
// console.log(number);

let numObj = { value: 15 };

function incObj(numObj) {
  numObj.value++;
}
incObj(numObj);
// console.log(numObj);

let a = new Number(10);
let b = a;
a = 12;
console.log(a);
console.log(b);
// https://github.com/vvscode/js--interview-questions/blob/master/topics/passing-by-value-and-by-reference.md

//
var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 }; //it does make sense look closely from right to left foo.x = foo which will in turn change bar value as well because they are refercing to same address in memory
console.log("bar", bar);
console.log("foo", foo);

//
var e = {};

(function b(e) {
  e.y = 15;
  e = null;
})(e);

console.log(e);

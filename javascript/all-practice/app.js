/*=============
    spread and rest parameter
===============*/
var myObj = {};
console.log(myObj);
Object.assign(myObj, { a: 1, b: 2 }, { z: 5 });
console.log(myObj); //{a: 1, b: 2, z: 5}

function sumOne(a, b) {
  return a + b;
}
console.log(sumOne(...[5, 4])); //spread

function sumTwo(...args) {
  //rest - always gives array
  console.log(args);
}
console.log(sumTwo({}, {}));

/*=============
    spread and rest parameter
===============*/
// var myObj = {};
// // console.log(myObj);
// Object.assign(myObj, { a: 1, b: 2 }, { z: 5 });
// // console.log(myObj); //{a: 1, b: 2, z: 5}

// function sumOne(a, b) {
//   return a + b;
// }
// // console.log(sumOne(...[5, 4])); //spread

// function sumTwo(...args) {
//   //rest - always gives array
//   // console.log(args);
// }
// console.log(sumTwo({}, {}));

/*=============
    hoisting
===============*/

// var x = 5;

// function getName() {
//   // console.log("Namaste vijay");
// }

/*=============
    how functions executed
===============*/
// var a = 1;
// aa();
// // console.log(a);
// function aa() {
//   var a = 10;
//   var b = 10;
//   //   console.log(a);
// }
// function aaa() {
//   var aaaaa = 100;
//   //   console.log(a);
//   //   console.log(this);
// }
// aaa();
// g = 5;
// console.log(g);

/*=============
    The Scope Chain, 🔥Scope & Lexical Environment 
===============*/
// function a() {
//   var b = 10;
//   c();
//   function c() {
//     var z = 1;
//     d();
//     function d() {
//       console.log(b);
//       console.log(z);
//     }
//   }
// }
// a();
/*=============
    let & const in JS 🔥Temporal Dead Zone 
===============*/

let a;
const c;
var aa;
console.log(c);

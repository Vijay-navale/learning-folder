// "use strict";
const alphabet = ["A", {}, "B"];
const [a, { name: firstName = "ajay" }, d] = alphabet;
// console.log(a);
// console.log(firstName);

const person1 = {
  name: "vijay",
  age: 45,
  class: "5th",
  favFood: ["chicken", "dosa"],
  address: {
    city: "navi mumbai",
    sector: 25,
  },
};
const person2 = {
  name: "ajay",
  age: 48,
  favFood: ["egg", "lollypop"],
  address: {
    city: "navi mumbai",
    sector: 25,
  },
};
// let z
// console.log(z);
// const name,
//   age= person2;
// console.log(name);
// console.log(age);
// const { age, name, ...rest } = person1;
// console.log(age, name);
// console.log(rest);

// const person3 = { ...person1, ...person2 };
// console.log(person3);

function personDetails(person) {
  person.name = "prakash";
  person.lastName = "navale";
  person.abc;

  console.log(person);
}
// personDetails(person2);
// console.log(person2);

//Before ES6
let inRing = "The Undertaker";
let onSide = "Kane";
console.log(`inRing = ${inRing}, onside = ${onSide}`);
let temp = inRing; // 1
inRing = onSide; // 2
onSide = temp; // 3
console.log(`inRing = ${inRing}, onside = ${onSide}`);
//with ES6, remove // 1, //2 and // 3 and replace with:
[inRing, onSide] = [onSide, inRing];

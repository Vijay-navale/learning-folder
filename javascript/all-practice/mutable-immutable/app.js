const a = "hi";
const obj = {
  name: "vijay",
};
const arr = [5, 4];

const func1 = (para) => {
  para.name = "ajay";
  console.log(para);
};
func1(obj);
console.log(obj); //here mutability happened

const func2 = (para) => {
  para = "hello"; //here variable are immutable
  console.log(para);
};

func2(a);
console.log(a);

const func3 = (para) => {
  para[0] = 6; //here array is mutable
  console.log(para);
};

func3(arr);
console.log(arr);

const ALWAYS_IMMUTABLE = true;

try {
  ALWAYS_IMMUTABLE = false;
} catch (err) {
  console.log("Can't reassign an immutable reference.");
}

const arr2 = [1, 2, 3];
arr2.push(4);
console.log(arr2); // [1, 2, 3, 4]

// async means start at any time but end always last - also async is all about promises
// console.log(1);
// console.log(2);
// setTimeout(() => {
//   console.log("callback function");
// }, 2000);
// console.log(3);
// console.log(4);

const getTodos = (resource) => {
  //----------------------this direct async code it not promise so behind the hood we need to manually work on resolve reject things if we use promise constructor then it would have better
  //   const request = new XMLHttpRequest();
  //   request.addEventListener("readystatechange", () => {
  //     if (request.readyState === 4 && request.status === 200) {
  //       const data = JSON.parse(request.responseText);
  //       callback(undefined, data);
  //     } else if (request.readyState === 4) {
  //       callback("could not fetch data", undefined);
  //     }
  //   });
  //   request.open("GET", resource);
  //   request.send();
  //----------------------making request using actual promises
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("got error biro");
      }
    });
    request.open("GET", resource);
    request.send();
  });
};
//------------------------promises chaining
// getTodos("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => {
//     console.log(data);
//     return getTodos("https://jsonplaceholder.typicode.com/todos/5");
//   })
//   .then((data) => {
//     console.log(data);
//     return getTodos("https://jsonplaceholder.typicode.com/todos/7");
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

//-------------------------callback hell
// getTodos("https://jsonplaceholder.typicode.com/todos/1", (err, data) => {
//   //   if (err) {
//   //     console.log(err);
//   //     // throw new Error("Could not fetch biro");
//   //   } else {
//   //     console.log(data);
//   //   }
//   console.log(data);
//   getTodos("https://jsonplaceholder.typicode.com/todos/2", (err, data) => {
//     console.log(data);
//     getTodos("https://jsonplaceholder.typicode.com/todos/3", (err, data) => {
//       console.log(data);
//     });
//   });
// });

// console.log(10);
// console.log(11);

// --------promises ------------ //
// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     resolve("some data");
//     // reject("some error");
//   });
// };
// getSomething().then( //one way
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// getSomething()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// console.log(1);

// console.log(2);
//------------------------------fetch API:- fetch is nothing but a promise behind the hood it resloved or rejects
// note----> catch detects required error and gives proer message
// fetch("https://jsonplaceholder.typicode.com/todos/2")
//   .then((res) => {
//     console.log("resolved:- ", res);
//     // const data = res.json();
//     // console.log(data);              //this will give us promise
//     return res.json(); //this will return promise
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected:- ", err);
//   });

//---------------------------async await
// console.log(1);
const getAsyncTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/2"); //if it is promise then we should use await keyword
  console.log(res);
  // console.log(2);
  if (res.status !== 200) {
    throw new Error("cannot fetch data plz check biro");
  }
  const data = await res.json(); //as res.json() is already a promise which return either resolved or reject thus we use await keyword
  // console.log(data);
  return data;
};
// getAsyncTodos()
//   .then((resData) => console.log("resolved:-", resData))
//   .catch((err) => console.log("rejected:-", err));
// const SEARCH_API =
//   "https://gnews.io/api/v4/search?q=example&token=41387c71d419438e87fe04a8ec6c063f";

// const getSearchedPost = async (searchQuery) => {
//   const data = await fetch(
//     `https://gnews.io/api/v4/search?q=${searchQuery}&token=41387c71d419438e87fe04a8ec6c063f`
//   );
//   const response = await data.json();
//   console.log(response);
//   showNews(response.articles);
// };

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(search.value);
//   const searchVal = search.value;
//   getSearchedPost(searchVal);
// });

// =====================try, catch, finally stuff=====================//
// function isThereAnError() {
//   try {
//     console.log("All good, no errors");
//   } catch (error) {
//     console.log("We have an error");
//   }
// }
// isThereAnError();
// function isThereAnError() {
//   try {
//     console.log("All good, no errors");
//     throw new Error("**ooops**"); //ok now I am getting basically this throw new Error('this error message will be catch by catch block in terms of object')
//   } catch (error) {
//     console.log("We have an error", error.message);
//   }
// }
// isThereAnError();
function isThereAnError() {
  console.log("abc");
  try {
    throw new Error("**ooops**");
    console.log("All good, no errors");
  } catch (error) {
    console.log("We have an error", error.message);
  } finally {
    console.log("life is good");
    return "returning function";
  }
  console.log("def");
}
isThereAnError();

const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
};
const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  };
};

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };
const initialCakes = {
  numOfCakes: 10,
};
const initialIceCreams = {
  numOfIceCreams: 20,
};
// const reducer = (state = initialState, action) => {
//   //noticable thing is here that the object which will return is new ojbect as it will not mutate
//   if (action.type === "BUY_CAKE") {
//     return {
//       ...state,
//       numOfCakes: state.numOfCakes - 1,
//     };
//   }
//   if (action.type === "BUY_ICECREAM") {
//     return {
//       ...state,
//       numOfIceCreams: state.numOfIceCreams - 1,
//     };
//   }
//   return state;
// };
// console.log("yoo");

const cakeReducer = (state = initialCakes, action) => {
  if (action.type === "BUY_CAKE") {
    return {
      ...state,
      numOfCakes: state.numOfCakes - 1,
    };
  }
  return state;
};
const iceCreamReducer = (state = initialIceCreams, action) => {
  if (action.type === "BUY_ICECREAM") {
    return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1,
    };
  }
  return state;
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state:-", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();

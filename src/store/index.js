import { createStore } from "redux";

//contains a state and an action as parameters
//action has two props : 'type' and 'payload'
//state gets an initial value (as an object)
const reducerFn = (state = { counter: 0 }, action) => {
  //Should be synchronous Function!!
  //Should NOT mutant original state!!

  if (action.type === "INC") {
    //make state equal to state incremented by one (not mutating!)
    return { counter: state.counter + 1 };
  }

  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }

  if (action.type === "ADD") {
    return { counter: state.counter + action.payload };
  }
  return state;
};

//needs a reducer function!
const store = createStore(reducerFn);

export default store;

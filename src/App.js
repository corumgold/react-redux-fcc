//useSelector creates an individual subscription to redux store
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  //useSelector is a hook for accessing redux store's state.
  //this accesses 'counter' inside of state
  const counter = useSelector((state) => state.counter);
  //this references useDispatch
  const dispatch = useDispatch();
  const increment = () => {
    //"go do this action on state"
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    //"go do this action on state"
    dispatch({ type: "DEC" });
  };
  const addBy = () => {
    dispatch({ type: "ADD", payload: 10 });
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add By 10</button>
    </div>
  );
}

export default App;

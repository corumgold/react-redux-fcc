import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
//App (main component) gets 'store' so all other components have access!
root.render(
  //App gets wrapped by the provider (with store as a prop)
  <Provider store={store}>
    <App />
  </Provider>
);

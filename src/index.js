import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";

function reducer(state) {
  return state;
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("CozShopping"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

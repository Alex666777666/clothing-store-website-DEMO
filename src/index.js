import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App.tsx";

import store from "./logic/store/store";

import "./styles/styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

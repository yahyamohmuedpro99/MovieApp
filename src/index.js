import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider } from "react-redux";
import ConfigureStore from "../src/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={ConfigureStore}>
      <App />
    </Provider>
  </>
);

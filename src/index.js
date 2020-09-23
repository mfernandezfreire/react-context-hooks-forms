import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.jsx";
import InputProvider from "./context/InputProvider";

ReactDOM.render(
  <InputProvider>
    <App />
  </InputProvider>,
  document.getElementById("root")
);

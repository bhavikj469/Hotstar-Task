import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Info from "./Info";

ReactDOM.render(
  <React.StrictMode>
    <Router >
    <Router >
     <Route exact path="/" component={App} />
    <Route exact path="/Info" component={Info} />
    </Router>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

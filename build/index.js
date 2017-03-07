"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import reducer from "./reducers/index";

// import { Router, Route, IndexRoute, hashHistory } from "react-router";

// import App from "./Components/App";
// import Calender from "./Components/Calender/index";
// import SearchResults from "./Components/SearchResults/index";

// const store = createStore(reducer);

var root = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(
  "h1",
  null,
  "Hello from react"
), root);
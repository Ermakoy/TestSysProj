import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./Reducers/reducer";

import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from "./Components/App";
import TestsList from "./Components/TestsList/TestsList";
import Test from "./Components/Test/Test";
import SearchResults from "./Components/SearchResults/SearchResults";

const store = createStore(reducer);

const root = document.getElementById("root");

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={TestsList} />
				<Route path="test" component={Test} />
				<Route path="search" component={SearchResults} />
			</Route>
		</Router>
	</Provider>,
	root
);
import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				{this.props.children}
			</div>
		)
	}
}

export default connect(
	state => ({ state }),
	dispatch => ({})
)(App);
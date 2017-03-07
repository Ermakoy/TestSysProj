import React from "react";
import { connect } from "react-redux";

class Test extends React.Component {
	render() {
		return (
			<div className="Test">
				and this is test.
			</div>
		)
	}
}

export default connect(
	state => ({ state }),
	dispatch => ({})
)(Test);
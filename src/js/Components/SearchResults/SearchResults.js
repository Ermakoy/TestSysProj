import React from "react";
import { connect } from "react-redux";

class SearchResults extends React.Component {
	render() {
		return (
			<div className="SearchResults">
				This is search results!
			</div>
		)
	}
}

export default connect(
	state => ({ state }),
	dispatch => ({})
)(SearchResults);
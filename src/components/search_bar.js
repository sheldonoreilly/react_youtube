//the {} means - import React and then pull off the property
// 'component' and set to the {component} var
import React, { Component } from "react";

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: "" };
	}

	render() {
		//whenever using JS variables in JSX - we wrap them in curly brackets
		return (
			<div className="search-bar">
				<input value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;

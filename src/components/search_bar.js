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
			<div>
				<input value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
			</div>
		);
	}
}

export default SearchBar;

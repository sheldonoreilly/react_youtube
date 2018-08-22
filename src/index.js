import React, { Component } from "react";
import ReactDOM from "react-dom";
// the import YTSearch - is basically like a function
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyCRYf9CG3e2fbNxgTKVicJDzhP0T4aj6zQ";

YTSearch({ key: API_KEY, term: "surfboards" }, function(resData) {
	console.log(resData);
});

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>YouTube App!</h1>
				<SearchBar />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector(".container"));

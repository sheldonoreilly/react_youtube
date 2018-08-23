import React, { Component } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
// the import YTSearch - is basically like a function
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyCRYf9CG3e2fbNxgTKVicJDzhP0T4aj6zQ";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch("Surfboards");
	}

	videoSearch(term) {
		//ES6 property:value have identical names: 'videos'.
		// We can use destructuring??? to just assign directly
		YTSearch({ key: API_KEY, term: term }, videos => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	//again passing the state is a  js value so use {}
	render() {
		const videoSearch = _.debounce(term => {
			this.videoSearch(term);
		}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					inVideos={this.state.videos}
					onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector(".container"));

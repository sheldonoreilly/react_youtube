import React from "react";
import VideoListItem from "./video_list_item";

//notice the handling of the array in react - it can take an array of
//video items (<li>) and render them properly
const VideoList = props => {
	const videoItems = props.inVideos.map(item => {
		return <VideoListItem key={item.etag} video={item} onVideoSelect={props.onVideoSelect} />;
	});

	return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;

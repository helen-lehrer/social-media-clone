import React from "react";
import FeedHeader from "./FeedHeader";
import PostContainer from "./PostContainer";

function Feed(){
  return (
    <React.Fragment>
      <FeedHeader />
      <PostContainer />
    </React.Fragment>
  )
}

export default Feed;
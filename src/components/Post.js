import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      <hr/>
      <img src={props.friendPic} width="50px"></img>
      <h3>{props.friendName}</h3>
      <p>{props.friendBio}</p>
    </React.Fragment>
  )
}

Post.propTypes = {
  friendPic: PropTypes.string,
  friendName: PropTypes.string,
  friendBio: PropTypes.string
};

export default Post;
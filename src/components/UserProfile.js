import React from "react";
import PropTypes from "prop-types";

function UserProfile (props){
  return (
    <React.Fragment>
      <hr/>
      <img src={props.profilePicture}width="100px"></img>
      <h1>{props.username}</h1>
      <h3>{props.bio}</h3>
    </React.Fragment>
  )
}

UserProfile.PropTypes = {
  username: PropTypes.string.isRequired,
  profilePicture: PropTypes.string,
  bio: PropTypes.string
};

export default UserProfile;
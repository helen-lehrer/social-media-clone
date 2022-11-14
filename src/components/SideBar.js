import React from "react";
import UserProfile from "./UserProfile";
import profilePic from "./../img/download.jpg";

const userInfo = [
  {
    name: 'Kellie A. Corrigan',
    bio: 'Hello, I am full-stack web developer from Epicodus!'
  }
]

function SideBar(){
  return (
    <React.Fragment>
      {userInfo.map((user, index) =>
      <UserProfile username = {user.name}
      profilePicture = {profilePic}
      bio = {user.bio}
      key={index}/>
      )}
      <ul>
        <li><a href="#">Tweets</a></li>
        <li><a href="#">Following</a></li>
        <li><a href="#">Followers</a></li>
      </ul>
    </React.Fragment>
  )
}

export default SideBar;
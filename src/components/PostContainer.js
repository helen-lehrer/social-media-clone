import React from "react";
import Post from "./Post.js";

const friendList = [
  {
    friendPic: "xxx",
    friendName: "Jerry",
    friendBio: "I like soup"
  },
  {
    friendPic: "xxx",
    friendName: "Sally",
    friendBio: "I like dogs"
  },
  {
    friendPic: "xxx",
    friendName: "Sally",
    friendBio: "I like pizza"
  },
  {
    friendPic: "xxx",
    friendName: "Fred",
    friendBio: "I like dancing"
  },
]

function PostContainer(){
  return (
  <React.Fragment>
    {friendList.map((friend, index) =>
    <Post friendpic = {friend.friendPic}
    friendName = {friend.friendName}
    friendBio = {friend.friendBio}
    key={index}/>
    )}
  </React.Fragment>
  );
}

export default PostContainer;
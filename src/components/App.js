import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";
function App(){
  return (
    <React.Fragment>
      <Header />
      <SideBar />
      <Feed />
    </React.Fragment>
  );
}

export default App;
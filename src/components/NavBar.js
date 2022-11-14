import React from "react";
import NavBarButton from "./NavBarButton";

const buttonList = [
  {
    label: 'Home'
  },
  {
    label: 'Notifications'
  },
  {
    label: 'Messages'
  }
];

function NavBar(){
  return (
    <React.Fragment>
      {buttonList.map((button, index) =>
      <NavBarButton label={button.label}
      key={index}/>
      )}
    </React.Fragment>
  );
}

export default NavBar;
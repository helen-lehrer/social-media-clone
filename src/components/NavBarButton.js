import React from "react";
import PropTypes from "prop-types";

function NavBarButton(props){
  return (
    <button>{props.label}</button>
  );
}

NavBarButton.PropTypes = {
  label: PropTypes.string.isRequired
};

export default NavBarButton;
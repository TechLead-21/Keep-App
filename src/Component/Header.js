import React from "react";
import logo from "../Images/logo.gif"

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" width="70" height="70" />
      </div>
    </>
  );
};

export default Header;

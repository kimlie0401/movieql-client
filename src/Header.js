import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const style = {
    height: "50px",
    display: "flex",
    alignItems: "center",
    padding: "0px",
    backGroundColor: "#2f2f2f",
    fontSize: "25px",
    fontWeight: "500",
    textDecoration: "none"
  };

  return (
    <Link to={"/"} style={style}>
      <span>DK's Movie App</span>
    </Link>
  );
};

export default Header;

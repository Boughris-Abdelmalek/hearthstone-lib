import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "./img/return.png";

const Return = (props) => {
  const path = props.path;

  return (
    <Link to={`/${path}`} className="return">
      <img src={returnIcon} alt="return"></img>
    </Link>
  );
};

export default Return;

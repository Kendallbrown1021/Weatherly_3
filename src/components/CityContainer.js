import React from "react";
import "./city-container.css";

const CityContainer = (props) => {
  return <div className="city-container">{props.children}</div>;
};

export default CityContainer;

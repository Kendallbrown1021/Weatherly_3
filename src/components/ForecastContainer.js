import React from "react";
import "./forecast-container.css";

const ForecastContainer = (props) => {
  return <div className="forecast-container">{props.children}</div>;
};

export default ForecastContainer;

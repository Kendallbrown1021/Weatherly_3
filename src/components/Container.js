import React from "react";
import "./container.css";

const Container = (props) => {
  return <section className="container">{props.children}</section>;
};

export default Container;

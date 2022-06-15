import React, { Fragment } from "react";

import "./search-city.css";

const SearchCity = (props) => {
  const { setCityName, submitHandler } = props;
  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <input
          onChange={(event) => setCityName(event.target.value)}
          placeholder="Enter City Name"
          className="city-input"
        />
      </form>
    </Fragment>
  );
};

export default SearchCity;

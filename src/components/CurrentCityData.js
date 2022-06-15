import React, { Fragment } from "react";
import { dayOfWeek } from "../utils/dayOfWeek";
import "./current-city-data.css";

const CurrentCityData = (props) => {
  const { day, currentCityData } = props;
  const current = new Date(day.date);
  const currentDay = current.getDay();
  console.log(day);
  return (
    <Fragment>
      <div className="city-data">
        <div>
          <h2>{dayOfWeek(currentDay)}</h2>
        </div>
        <div>
          <img
            src={currentCityData.current.condition.icon}
            alt={currentCityData.current.condition.text}
          />
          <p className="text">{currentCityData.current.temp_f}</p>
        </div>
        <div className="temp-high-low">
          <p className="text">H: {day.day.maxtemp_f}</p>
          <p className="text">L: {day.day.mintemp_f}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default CurrentCityData;

import React, { Fragment } from "react";
import "./forecast-city-data.css";
import { dayOfWeek } from "../utils/dayOfWeek";
const ForecastCityData = (props) => {
  const { weekData, index } = props;
  const day = new Date(weekData[index].date);
  const weekDay = day.getDay();
  console.log(weekDay);
  console.log(weekData);
  console.log(index);
  return (
    <Fragment>
      <div className="weekday">
        <div className="day-of-week">
          <h2>{dayOfWeek(weekDay)}</h2>
          <p className="temp-text">{weekData[index].day.condition.text}</p>
        </div>
        <div>
          <img
            src={weekData[index].day.condition.icon}
            alt={weekData[index].day.condition.text}
            className="forecast-icon"
          />
        </div>

        <div className="temp-cont">
          <p className="temp-text">High: {weekData[index].day.maxtemp_f}</p>
          <p className="temp-text">Low: {weekData[index].day.mintemp_f}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ForecastCityData;

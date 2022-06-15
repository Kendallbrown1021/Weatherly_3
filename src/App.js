import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Container from "./components/Container";
import CityContainer from "./components/CityContainer";
import CurrentCityData from "./components/CurrentCityData";
import ForecastContainer from "./components/ForecastContainer";
import SearchCity from "./components/SearchCity";
import ForecastCityData from "./components/ForecastCityData";

const App = () => {
  const [currentCityData, setCurrentCityData] = useState({});
  const [weekData, setWeekData] = useState("");
  const [cityName, setCityName] = useState("");
  const [theDay, setTheDay] = useState("");

  const getCityData = async (cityName) => {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${cityName}&aqi=no`
    );
    setCurrentCityData(response.data);
    console.log(response.data);
  };
  const getWeeklyInfo = async (cityName) => {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${cityName}&days=5&aqi=no&alerts=no`
    );
    const editedWeek = response.data.forecast.forecastday.shift();
    console.log(editedWeek);
    setTheDay(editedWeek);
    setWeekData(response.data.forecast.forecastday.splice(0));
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    if (cityName === "") {
      return alert("Please Enter City");
    } else {
      getCityData(cityName);
      getWeeklyInfo(cityName);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Weatherly</h1>
      </header>
      <Container>
        <CityContainer>
          <SearchCity submitHandler={submitHandler} setCityName={setCityName} />
          {!weekData ? (
            <div className="no-city">
              <h2>Please Enter A City</h2>
            </div>
          ) : (
            <CurrentCityData currentCityData={currentCityData} day={theDay} />
          )}

          <ForecastContainer>
            {!weekData ? (
              <div className="no-city">
                <h1>No City Data</h1>
              </div>
            ) : (
              weekData.map((days, index) => (
                <ForecastCityData
                  key={index}
                  weekData={weekData}
                  index={index}
                />
              ))
            )}
          </ForecastContainer>
        </CityContainer>
      </Container>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import TodayForecastCard from "../Components/TodayForecastCard";
import { Box, Typography } from "@mui/material";
import InputForCity from "../Components/InputForCity";
import NoDataYet from "../Components/NoDataYet";

const TodayWeater = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    if (selectedOption) {
      fetchWeatherData();
    }
  }, [selectedOption]);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${selectedOption.lat}&lon=${selectedOption.lng}&appid=c1e5537036b3b4e296df89155ea8f754`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setCurrentWeather(data);
      //   console.log("Weather data:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box>
      <Typography variant="h5" textAlign="center" sx={{ padding: "40px 0px" }}>
        Today Forecast
      </Typography>
      <InputForCity onSelect={handleOptionSelect} />
      {currentWeather ? (
        <TodayForecastCard currentWeather={currentWeather} />
      ) : (
        <NoDataYet />
      )}
    </Box>
  );
};

export default TodayWeater;

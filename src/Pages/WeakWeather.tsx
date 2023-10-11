import React, { useState, useEffect } from "react";
import TableForecast from "../Components/TableForecast";
import { Box, Typography } from "@mui/material";
import InputForCity from "../Components/InputForCity";
import NoDataYet from "../Components/NoDataYet";

const WeakWeather = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    console.log("selectedOption>>>", selectedOption);
  };

  useEffect(() => {
    if (selectedOption) {
      fetchWeatherData();
    }
  }, [selectedOption]);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${selectedOption.lat}&lon=${selectedOption.lng}&appid=69d372e676b830d9386f06ca4c14b767`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setCurrentWeather(data);
      // console.log("Weather Week data:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: "1.5rem",
            padding: "50px 0px",
          }}
        >
          {" "}
          Forecast for a Week
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "80%" }}>
          <InputForCity onSelect={handleOptionSelect} />
          {currentWeather ? (
            <TableForecast currentWeather={currentWeather} />
          ) : (
            <NoDataYet />
          )}
        </Box>
      </Box>
    </>
  );
};

export default WeakWeather;

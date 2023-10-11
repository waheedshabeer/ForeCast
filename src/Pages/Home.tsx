import React from "react";
import Card from "../Components/Card";
import { Box } from "@mui/material";

const Home = () => {
  const forecastData = [
    {
      id: 1,
      title: "Today Forecast",
      desc: "Todays forecast is a weather prediction that provides information about the expected weather conditions for the current day.",
      WeatherRoute: "today-weather",
    },
    {
      id: 2,
      title: "Weak Forecast",
      desc: "Week forecast is a weather prediction that provides information about the expected weather conditions for the current day.",
      WeatherRoute: "weak-weather",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "20px",
      }}
    >
      {forecastData.map((item) => {
        return <Card forecastItem={item} />;
      })}
    </Box>
  );
};

export default Home;

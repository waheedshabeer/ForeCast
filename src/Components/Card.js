import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const DynamicCard = ({ forecastItem, title, content, buttonText, onClick }) => {
  const navigate = useNavigate();
  const handleButtonClick = (route) => {
    navigate(route);
  };
  return (
    <>
      <Card sx={{ background: "#ededed", width: "40%" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {forecastItem.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {forecastItem.desc}
          </Typography>
          <Button
            variant="contained"
            onClick={() => handleButtonClick(forecastItem.WeatherRoute)}
          >
            {forecastItem.title}
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default DynamicCard;

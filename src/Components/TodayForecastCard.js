import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";

const TodayForecastCard = ({ currentWeather }) => {
  console.log("currentWeather>>>", currentWeather);
  const TodayForecast = [
    {
      id: 1,
      header: "Feels Like",
      value: `${currentWeather?.main.feels_like}`,
    },
    { id: 2, header: "Humidity", value: `${currentWeather?.main.humidity}%` },
    { id: 3, header: "Wind", value: `${currentWeather?.wind.speed}` },
    { id: 4, header: "Visibility", value: `${currentWeather?.visibility}` },
    { id: 5, header: "Pressure", value: `${currentWeather?.main.pressure}` },

    // `${currentWeather.visibility}`
  ];
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: "50%", backgroundColor: "#ededed" }}>
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4rem",
            // justifyContent: "center",
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "2.5rem" }}
              variant="h1"
              component="div"
            >
              {currentWeather ? currentWeather?.main.temp : "Select City"}
            </Typography>
            <Typography
              sx={{ fontSize: "1.3rem" }}
              variant="body1"
              component="div"
            >
              {currentWeather
                ? currentWeather?.weather[0].description
                : "Select City"}
            </Typography>
          </Box>
          <Box>
            {TodayForecast.map((item) => {
              return (
                <>
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <Typography
                      sx={{ width: "100%" }}
                      variant="body2"
                      component="div"
                    >
                      {item.header}:
                    </Typography>
                    <Typography
                      sx={{ width: "100%" }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.value}
                    </Typography>
                  </Box>
                </>
              );
            })}
          </Box>
          {/* <Button variant="contained">sssssssssssssss </Button> */}
        </CardContent>
      </Card>
    </Box>
  );
};

export default TodayForecastCard;

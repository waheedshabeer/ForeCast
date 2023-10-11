import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function DenseTable({ currentWeather }) {
  console.log("currentWeather>>>", currentWeather);

  const [rows, setRows] = useState([]); // Initialize rows as a state variable

  useEffect(() => {
    // Update rows when currentWeather is available and has 'list' property
    if (currentWeather && currentWeather.list) {
      const updatedRows = currentWeather.list.map((weatherData) => {
        return createData(
          weatherData.dt_txt,
          `${weatherData.main.temp} C`,
          weatherData.weather[0].description,
          `${weatherData.wind.speed} km/h`,
          `${weatherData.main.humidity}%`
        );
      });
      setRows(updatedRows); // Update the 'rows' state
    }
  }, [currentWeather]);

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, backgroundColor: "#ededed" }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell align="right">Temperature</TableCell>
            <TableCell align="right">Weather</TableCell>
            <TableCell align="right">Wind</TableCell>
            <TableCell align="right">Humidity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

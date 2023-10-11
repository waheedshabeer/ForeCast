import React, { useState, useEffect, useRef } from "react";
import {
  TextField,
  Paper,
  Popper,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";

const AutocompleteInput = ({ onSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [open, setOpen] = useState(false);
  const [longLat, setlongLat] = useState();
  const inputRef = useRef(null); // Create a ref for the input element

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Fetch data from the API on input change
    fetchCities(value);
  };

  const handleOptionClick = (selectedOption) => {
    setInputValue(
      `${selectedOption.toponymName}, ${selectedOption.countryName}`
    );
    setOptions([]);
    setOpen(false);
    onSelect(selectedOption);
  };

  const fetchCities = (input) => {
    if (input.trim() === "") {
      setOptions([]);
      setOpen(false);
      return;
    }

    const apiUrl = `https://secure.geonames.net/searchJSON?name_startsWith=${input}&maxRows=10&cities=cities5000&username=cazvid_admin&countryBias=US`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.geonames && data.geonames.length > 0) {
          setOptions(data.geonames);
          setOpen(true);
        } else {
          setOptions([]);
          setOpen(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: " + error);
      });
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", paddingBottom: "23px" }}
    >
      <TextField
        label="City Name"
        variant="outlined"
        onChange={handleChange}
        value={inputValue}
        inputRef={inputRef}
      />
      <Popper open={open} anchorEl={inputRef.current}>
        {" "}
        {/* Use the input reference */}
        <Paper>
          <List>
            {options.map((option) => (
              <ListItem
                key={option.geonameId}
                button
                onClick={() => handleOptionClick(option)}
              >
                <ListItemText
                  primary={`${option.toponymName}, ${option.countryName}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Popper>
    </Box>
  );
};

export default AutocompleteInput;

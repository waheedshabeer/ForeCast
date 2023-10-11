import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const NoDataYet = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="200px"
    >
      <Paper elevation={3} variant="outlined">
        <Box p={6}>
          <Typography variant="h6">Please Enter City For ForeCast</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default NoDataYet;

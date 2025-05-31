import React from "react";
import {
  Box,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


const VitalTasks = () => {
  

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: "#f3f4f6" }}>
      <Navbar />

      <Box display="flex">
        <Box
          sx={{
            width: 250,
            bgcolor: "black",
            color: "white",
            p: 2,
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <Sidebar />
        </Box>
        </Box>
        </Box>
  );
};
export default VitalTasks;

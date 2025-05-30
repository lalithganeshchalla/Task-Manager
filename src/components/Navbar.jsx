import React from 'react';
import { Box, Typography, InputBase, IconButton, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Navbar = () => {
  const today = new Date();
  const weekday = today.toLocaleDateString('en-US', { weekday: 'long' });
  const date = today.toLocaleDateString('en-GB'); // DD/MM/YYYY
    const fullTime = today.toLocaleTimeString('en-IN', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
});


  return (
    <Grid>
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      sx={{ backgroundColor: '#f9f9f9', boxShadow: '0px 4px 10px rgba(0,0,0,0.05)' }}
    >
      {/* Title */}
      <Typography variant="h5" fontWeight="bold">
        <span style={{ color: '#ff6b6b' }}>Dash</span>
        <span style={{ color: '#000' }}>board</span>
      </Typography>

      {/* Search Box */}
      <Box
        display="flex"
        alignItems="center"
        bgcolor="#f5f8ff"
        borderRadius="12px"
        px={2}
        py={0.5}
        boxShadow="0px 4px 10px rgba(0,0,0,0.08)"
      >
        <InputBase placeholder="Search your task here..." sx={{ flex: 1 , width: "200px" }} />
        <IconButton sx={{
            backgroundColor: '#ff6b6b',
            color: '#fff',
            borderRadius: '12px', 
            '&:hover': {
                backgroundColor: '#ff4c4c'
            },
                }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Right icons */}
      <Box display="flex" alignItems="center" gap={2}>
        <IconButton sx={{
    backgroundColor: '#ff6b6b',
    color: '#fff',
    borderRadius: '12px',   // 👈 square with rounded corners
    padding: '8px',
    '&:hover': {
      backgroundColor: '#ff4c4c'
    }
  }}>
          <NotificationsNoneIcon />
        </IconButton>
        <IconButton sx={{
    backgroundColor: '#ff6b6b',
    color: '#fff',
    borderRadius: '12px',   // 👈 square with rounded corners
    padding: '8px',
    '&:hover': {
      backgroundColor: '#ff4c4c'
    }
  }}>
          <CalendarMonthIcon />
        </IconButton>
        <Box ml={2} textAlign="right">
          <Typography variant="body2" fontWeight="bold"> {weekday} </Typography>
          <Typography variant="caption" color="primary"> {date} </Typography><br/>
          <Typography variant="caption" color="primary"> {fullTime} </Typography>
        </Box>
      </Box>
    </Box>
    </Grid>
  );
};

export default Navbar;

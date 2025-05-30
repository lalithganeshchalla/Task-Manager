// Sidebar.jsx
import React from 'react';
import { Box, Avatar, Typography, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, active: true },
    { text: 'Vital Task', icon: <AssignmentIcon /> },
    { text: 'My Task', icon: <CheckBoxIcon /> },
    { text: 'Task Categories', icon: <CategoryIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
    { text: 'Help', icon: <HelpIcon /> },
  ];

  return (
    <Box
      sx={{
        width: '250px',
        height: '100vh',
        bgcolor: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        py: 2,
        borderTopRightRadius:8,
        boxShadow: 3,
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Avatar
          alt="User"
          src="https://randomuser.me/api/portraits/men/75.jpg" // Replace with real image
          sx={{ width: 60, height: 60, mx: 'auto', mb: 1 }}
        />
        <Typography variant="subtitle1">amanuel</Typography>
        <Typography variant="body2" color="gray">
          amanuel@gmail.com
        </Typography>
      </Box>
      <List>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
              mx: 2,
              mb: 1,
              borderRadius: 2,
              bgcolor: item.active ? '#fff' : 'transparent',
              color: item.active ? '#f44336' : 'white',
              '&:hover': {
                bgcolor: '#333',
              },
            }}
          >
            <ListItemIcon sx={{ color: item.active ? '#f44336' : 'white' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
            
          </ListItemButton>
        ))}
      </List>

      {/* Logout */}
      <Box sx={{ px: 2 }}>
        <ListItemButton
          sx={{
            color: 'white',
            '&:hover': { bgcolor: '#333' },
          }}
        >
          <ListItemIcon sx={{ color: 'white' }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </Box>
    </Box>
  );
};

export default Sidebar;

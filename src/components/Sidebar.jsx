// Sidebar.jsx
import React from 'react';
import { Box, Avatar, Typography, List, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Vital Task', icon: <AssignmentIcon />, path: '/vitaltasks' },
    { text: 'Task Categories', icon: <CategoryIcon />, path: '/categories' },
    { text: 'My Task', icon: <CheckBoxIcon />, path: '/mytasks' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/setting' },
    { text: 'Help', icon: <HelpIcon />, path: '/help' },
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
        borderTopRightRadius: 8,
        boxShadow: 3,
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Avatar
          alt="User"
          src="https://randomuser.me/api/portraits/men/75.jpg"
          sx={{ width: 60, height: 60, mx: 'auto', mb: 1 }}
        />
        <Typography variant="subtitle1">amanuel</Typography>
        <Typography variant="body2" color="gray">
          amanuel@gmail.com
        </Typography>
      </Box>

      <List>
        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? '#f44336' : 'white',
              backgroundColor: isActive ? '#fff' : 'transparent',
              borderRadius: '16px',
              margin: '8px',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
            })}
          >
            <ListItemIcon sx={{ color: 'inherit' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </NavLink>
        ))}
      </List>

      <Box sx={{ px: 2 }}>
        <NavLink
          to="/logout"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              '&:hover': { bgcolor: '#333' },
              padding: '8px 16px',
              borderRadius: 2,
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </Box>
        </NavLink>
      </Box>
    </Box>
  );
};

export default Sidebar;

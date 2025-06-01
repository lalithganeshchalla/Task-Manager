import React from 'react'
import { Box, Paper, TextField } from '@mui/material';
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const AccountInfo = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); // Navigate back to the previous page
        }
          const handleDashboard = () => {
            // Perform logout logic here, e.g., clearing tokens, etc.
            navigate('/dashboard');
          };
          const handleChangePassword = () => {
            navigate('/changepassword');
          };
  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: "#f3f4f6" }}>
      <Navbar />

      <Box display="flex" flexDirection='row'>
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
      <Box flex={2} p={2.5} sx={{ height: '100%' }}>
      <Paper sx={{ padding: 2, height: '100%', borderRadius: 2 }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="start"
          gap={2}
          height="100%"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="subtitle1" color="black">
              Account Information
            </Typography>
            <Button onClick={handleGoBack} variant="text">Go Back</Button>
          </Box>
          <TextField 
            label="First Name"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
          
          />
            <TextField 
                label="Last Name"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: 2 }}/>
            <TextField 
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: 2 }}/>
                <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: 2 }}/>
            <TextField
                label="Position"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: 2 }}/>
          <Box display="flex" flexDirection="row" gap={2} alignItems="center" width="100%">

            <Button onClick={handleDashboard} variant="contained" sx={{ bgcolor:'#F24E1E' }} color="primary">
            Update Information
          </Button>
          <Button onClick={handleChangePassword} variant="contained" sx={{ bgcolor:'#F24E1E', paddingLeft:'10px' }} color="primary">
            Change Password
          </Button>
          </Box>
          

        </Box>
      </Paper>
    </Box>


        </Box>
        </Box>
  )
}

export default AccountInfo
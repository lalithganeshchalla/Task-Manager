import React from 'react'
import {Box, Paper} from '@mui/material';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TableSection from '../components/TableSection';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddTaskStatusDialogBox from '../components/AddTaskStatusDialogBox';

const TasksCategory = () => {
 
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
  const CreateCategory = () => {
    navigate('/createcategories'); // Navigate to the Create Category page
  }
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
              Tasks Categories
            </Typography>
            <Button onClick={handleGoBack} variant="text">Go Back</Button>
          </Box>

          <Button onClick={CreateCategory} variant="contained" sx={{ bgcolor:'#F24E1E' }} color="primary">
            Add New Task
          </Button>
          
          <TableSection />

        </Box>
      </Paper>
    </Box>


        </Box>
        </Box>

        
  )
}

export default TasksCategory
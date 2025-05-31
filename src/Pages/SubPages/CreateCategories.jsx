import React from 'react'
import {Box, Paper, TextField} from '@mui/material';
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import TableSection from '../../components/TableSection';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

const CreateCategories = () => {
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
              Vital Tasks
            </Typography>
            <Button variant="text">Go Back</Button>
          </Box>
          <TextField 
            label="Category Name"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
          
          />
          <Box display="flex" flexDirection="row" gap={2} alignItems="center" width="100%">

            <Button variant="contained" sx={{ bgcolor:'#F24E1E' }} color="primary">
            Create
          </Button>
          <Button variant="contained" sx={{ bgcolor:'#F24E1E', paddingLeft:'10px' }} color="primary">
            Cancel
          </Button>
          </Box>
          

        </Box>
      </Paper>
    </Box>


        </Box>
        </Box>

        
  )
}

export default CreateCategories
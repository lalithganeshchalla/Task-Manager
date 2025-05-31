import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const taskStatusData = ['Completed', 'In Progress', 'Not Started'];
const taskPriorityData = ['Extreme', 'Moderate', 'Low'];

const TableSection = ({ title, data, columnTitle }) => (
  <Box mb={3}>
    {/* Header */}
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
      <Typography fontWeight="600" fontSize="14px" color="text.primary">
        {title}
      </Typography>
      <Button
        startIcon={<AddIcon />}
        size="small"
        sx={{ color: 'red', fontSize: '13px', textTransform: 'none' }}
      >
        {title === 'Task Status' ? 'Add Task Status' : 'Add New Priority'}
      </Button>
    </Box>

    {/* Table */}
    <TableContainer display='flex' flexdirction='column' justifyContent='start' component={Paper} sx={{ borderRadius: 2 , width: '700px', maxHeight: 400 }}>
      <Table size="small" >
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>SN</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>{columnTitle}</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((value, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{value}</TableCell>
              <TableCell align="center">
                <IconButton
                  sx={{
                    color: 'white',
                    backgroundColor: '#f4511e',
                    mr: 1,
                    '&:hover': { backgroundColor: '#d84315' },
                    padding: '4px'
                  }}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton
                  sx={{
                    color: 'white',
                    backgroundColor: '#f4511e',
                    '&:hover': { backgroundColor: '#d84315' },
                    padding: '4px'
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

export default function TaskTablesSection() {
  return (
    <Box
      component={Paper}
      elevation={1}
      sx={{
        borderRadius: 3,
        padding: 2,
        backgroundColor: '#f4f6fa',
        height: 'auto',
        maxWidth: 700,
        margin: 'auto' // center if needed
      }}
    >
      <TableSection title="Task Status" data={taskStatusData} columnTitle="Task Status" />
      <TableSection title="Task Priority" data={taskPriorityData} columnTitle="Task Priority" />
    </Box>
  );
}

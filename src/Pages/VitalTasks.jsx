import React from "react";
import {
  Box,
  Paper,
    Typography,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Task4 from "../assets/task4.png";
import Task5 from "../assets/task5.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditSquareIcon from '@mui/icons-material/EditSquare';


const VitalTasks = () => {
  const completedTasks = [
    {
      title: "Walk the dog",
      desc: "Take the dog to the park and bring treats as well.",
      status: "Not Started",
      priority: "Moderate",
      date: "Completed 2 days ago.",
      img: {src: Task4, alt: "Task 3"},
    },
    {
      title: "Conduct meeting",
      desc: "Meet with the client and finalize requirements.",
      status: "Not Started",
      priority: "Moderate",
      date: "Completed 2 days ago.",
      img: {src: Task5, alt: "Task 3"}
    },
  ];

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
          <Box flex={2} p={2}>
            <Paper sx={{ padding: 2,  minHeight: "calc(100vh - 64px)" , borderRadius: 2 }}>
                <Typography variant="subtitle1" color="black">Vital Tasks</Typography>
                  <Box display="flex" flexWrap="wrap" gap={2}>
                    {completedTasks.map((task, idx) => (
                      <Box
                        key={idx}
                        display="flex"
                        gap={2}
                        alignItems="flex-start"
                        sx={{
                          border: "1px solid #ddd",
                          borderRadius: 2,
                          p: 2,
                        }}
                      >
                        <CheckCircleIcon sx={{ color: "green", mt: 0.5 }} fontSize="small" />
                        <Box flex={1}>
                          <Typography variant="subtitle2">{task.title}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {task.desc}
                          </Typography>
                          <Box
                        display="flex" 
                        flexDirection="row"
                        justifyContent="space-around"
                        mt={1}
                        sx={{ fontSize: 12, color: "#666"  }}
                      >
                       
                        <span>Priority: {task.priority }</span>
                        <span>Status: {task.status}</span>
                        <Typography variant="caption" color="text.disabled">
                            {task.date}
                          </Typography>
                      </Box>
                          
                        </Box>
                        <img
                          src={task.img.src}
                          alt={task.title}
                          className="w-14 h-14 rounded-md"
                        />
                      </Box>
                    ))}
                  </Box>
                </Paper>
            </Box>
            <Box flex={2} p={2}>
              <Paper sx={{ padding: 2, minHeight: "calc(100vh - 64px)" , borderRadius: 2}}>
                    <Box display="flex" flexDirection='row' flexWrap="wrap" gap={2}>
                        <img
                          src={Task4}
                          alt="Task 4"
                          sx={{ width: 150, height: 150, borderRadius: 2 }}
                          className="w-14 h-14 rounded-md"
                        />
                       <Box flex={1} display="flex" flexDirection="column" justifyContent="center" pt={3}>
                         <Typography variant="body2" fontWeight='bold' color="black">
                            Walk the dog
                        </Typography>
                        <Typography variant="body2" color="">
                            Priority: Extreme
                        </Typography>
                        <Typography variant="body2" color="">
                            Status: Not Started
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Completed 2 days ago.
                        </Typography>
                       </Box> 
                    </Box>
                    <Box display="flex" flexDirection='column' flexWrap="wrap" gap={2}>
                      <Typography variant="subtitle1" color="text.secondary" mt={2}>
                          Take the dog to the park and bring treats as well.
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" mt={2}>
                          Take Luffy and Jiro for a leisurely stroll around the neighborhood. Enjoy the fresh air and give them the exercise and mental stimulation they need for a happy and healthy day. Don't forget to bring along squeaky and fluffy for some extra fun along the way!
                      </Typography>
                      <ol variant="body2" color="text.secondary" mt={2}>
                        <li>Listen to a podcast or audiobook</li>
                        <li>Practice mindfulness or meditation</li>
                        <li>Take photos of interesting sights along the way</li>
                        <li>Practice obedience training with your dog</li>
                        <li>Chat with neighbors or other dog walkers</li>
                        <li>Listen to music or an upbeat playlist</li>
                      </ol>
                    </Box>
                    <Box display="flex" flexDirection='row' flexWrap="wrap" gap={2}>
                      <Box display="flex" alignItems="end" gap={2}>
                        <IconButton sx={{
                          backgroundColor: '#ff6b6b',
                          color: '#fff',
                          borderRadius: '12px',
                          padding: '8px',
                          '&:hover': {
                            backgroundColor: '#ff4c4c'
                          },
                          marginRight: '10px'
                        }}>
                          <DeleteIcon />
                        </IconButton>
                        <IconButton sx={{
                          backgroundColor: '#ff6b6b',
                          color: '#fff',
                          borderRadius: '12px',
                          padding: '8px',
                          '&:hover': {
                            backgroundColor: '#ff4c4c'
                          }
                        }}>
                          <EditSquareIcon />
                        </IconButton>
                      </Box>
                    </Box>
              </Paper>
            </Box>
      </Box>
    </Box>
  );    
  
};
export default VitalTasks;

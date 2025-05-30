import React from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Box,
  LinearProgress,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import Task1 from "../assets/task1.png";
import Task2 from "../assets/task2.png";
import Task3 from "../assets/task3.png";
import Task4 from "../assets/task4.png";
import Task5 from "../assets/task5.png";
import Invite1 from "../assets/invite1.png";
import Invite2 from "../assets/invite2.png";
import Invite3 from "../assets/invite3.png";
import Invite4 from "../assets/invite4.png";

const Dashboard = () => {
  const today = new Date();
  const date = today.toLocaleDateString('en-IN',{

    day: '2-digit',
    month: 'long',
    
  });
  const tasks = [
    {
      title: "Attend Nischal's Birthday Party",
      desc: "Buy gifts on the way and pick up cake from the bakery. [6 PM | Fresh Elements]",
      status: "Not Started",
      priority: "Moderate",
      date: "20/06/2023",
      color: "red",
      img: {src: Task1, alt: "Task 1"},
    },
    {
      title: "Landing Page Design for TravelDays",
      desc: "Get the work done by EOD and discuss with client before leaving. [4 PM | Meeting Room]",
      status: "In Progress",
      priority: "Moderate",
      date: "20/06/2023",
      color: "blue",
      img: {src: Task2, alt: "Task 2"},
    },
    {
      title: "Presentation on Final Product",
      desc: "Make sure everything is functioning and all the necessities are properly met...",
      status: "In Progress",
      priority: "Moderate",
      date: "19/06/2023",
      color: "blue",
      img: {src: Task3, alt: "Task 3"},
    },
  ];

  const completedTasks = [
    {
      title: "Walk the dog",
      desc: "Take the dog to the park and bring treats as well.",
      status: "Completed",
      date: "Completed 2 days ago.",
      img: {src: Task4, alt: "Task 3"},
    },
    {
      title: "Conduct meeting",
      desc: "Meet with the client and finalize requirements.",
      status: "Completed",
      date: "Completed 2 days ago.",
      img: {src: Task5, alt: "Task 3"}
    },
  ];

  const colorMap = {
    red: "#f44336",
    blue: "#2196f3",
    green: "#4caf50",
  };

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

        {/* Main Content */}
        <Box flex={1} p={3}>

<Box mb={3}>
  <Typography variant="h5">Welcome back, amanuell 👋</Typography>
  <Box
  display="flex"
  flexWrap="wrap"
  justifyContent="flex-end"
  alignItems="center"
  gap={2}
  mb={3}
>
  <img src={Invite1} alt="Dashboard Hero"  />
  <img src={Invite2} alt="Dashboard Hero" />
  <img src={Invite3} alt="Dashboard Hero"/>
  <img src={Invite4} alt="Dashboard Hero" />
  <Button variant="outlined" color="primary" sx={{ height: 40 }}>
    <PersonAddAlt1OutlinedIcon sx={{ mr: 1 }} /> Invite
  </Button>
</Box>
</Box>
          {/* Task & Status Section */}
          <Card style={{ padding: "20px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
          <Box display="flex" flexWrap="wrap" gap={3}>
            {/* To-Do */}
            <Box flex={2} minWidth="40%">
              <Card sx={{ mb: 5 ,width: "470px" }}>
                <CardContent >
                  <Box display="flex" justifyContent="space-between" mb={2}>
                    <Typography variant="subtitle1">To-Do
                      <Typography variant="body2" color="textSecondary">
                        {date} • Today
                        </Typography>
                    </Typography>
                    <Button size="small">+ Add task</Button>
                  </Box>

                  {tasks.map((task, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        border: "1px solid #ddd",
                        borderRadius: 2,
                        p: 2,
                        mb: 2, width: "400px"
                      }}
                    >
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box display="flex" alignItems="center" gap={1}>
                          <RadioButtonUncheckedIcon
                            sx={{ color: colorMap[task.color] || "gray" }}
                            fontSize="small"
                          />
                          <Typography variant="subtitle2">{task.title}</Typography>
                        </Box>
                        <img
                          src={task.img.src}
                          alt={task.img.alt}
                          className="w-12 h-12 rounded-md"
                        />
                      </Box>
                      <Typography variant="body2" mt={1} color="text.secondary">
                        {task.desc}
                      </Typography>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        mt={1}
                        sx={{ fontSize: 12, color: "#666" }}
                      >
                        <span>Priority: {task.priority}</span>
                        <span>Status: {task.status}</span>
                        <span>Created on: {task.date}</span>
                      </Box>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Box>
                  
            {/* Task Status */}
            <Box flex={2} minWidth="30%">
              <Card sx={{ boxShadow: 3}}>
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    Task Status
                  </Typography>

                  <Box display="flex" alignItems="center" gap={1} mb={2}>
                    <CheckCircleIcon sx={{ color: "green" }} fontSize="small" />
                    <LinearProgress variant="determinate" value={84} sx={{ flex: 1 }} />
                    <Typography variant="caption">Completed</Typography>
                  </Box>

                  <Box display="flex" alignItems="center" gap={1} mb={2}>
                    <RadioButtonUncheckedIcon sx={{ color: "blue" }} fontSize="small" />
                    <LinearProgress variant="determinate" value={46} sx={{ flex: 1 }} />
                    <Typography variant="caption">In Progress</Typography>
                  </Box>

                  <Box display="flex" alignItems="center" gap={1}>
                    <CancelIcon sx={{ color: "red" }} fontSize="small" />
                    <LinearProgress variant="determinate" value={13} sx={{ flex: 1 }} />
                    <Typography variant="caption">Not Started</Typography>
                  </Box>
                </CardContent>
              </Card>
              <Box mt={3} display="flex" justifyContent="space-between" alignItems="center">
              <Card>
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    Completed Task
                  </Typography>
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
                          <Typography variant="caption" color="text.disabled">
                            {task.date}
                          </Typography>
                        </Box>
                        <img
                          src={task.img.src}
                          alt={task.title}
                          className="w-14 h-14 rounded-md"
                        />
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
            </Box>

            {/* Completed Tasks */}
            
          </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};
export default Dashboard;

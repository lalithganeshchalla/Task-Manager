/*import React from 'react'
import '../Styles/Dashboard.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


const Dashboard = () => {
  return (
    <div>
        <Navbar />
        <Sidebar/>
    </div>
  )
}

export default Dashboard;*/

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Circle, CheckCircle, XCircle } from "lucide-react";

const Dashboard = () => {
  const tasks = [
    {
      title: "Attend Nischal’s Birthday Party",
      desc: "Buy gifts on the way and pick up cake from the bakery. [6 PM | Fresh Elements]",
      status: "Not Started",
      priority: "Moderate",
      date: "20/06/2023",
      color: "red",
      img: "/birthday.jpg",
    },
    {
      title: "Landing Page Design for TravelDays",
      desc: "Get the work done by EOD and discuss with client before leaving. [4 PM | Meeting Room]",
      status: "In Progress",
      priority: "Moderate",
      date: "20/06/2023",
      color: "blue",
      img: "/travel.jpg",
    },
    {
      title: "Presentation on Final Product",
      desc: "Make sure everything is functioning and all the necessities are properly met...",
      status: "In Progress",
      priority: "Moderate",
      date: "19/06/2023",
      color: "blue",
      img: "/presentation.jpg",
    },
  ];

  const completedTasks = [
    {
      title: "Walk the dog",
      desc: "Take the dog to the park and bring treats as well.",
      status: "Completed",
      date: "Completed 2 days ago.",
      img: "/dog.jpg",
    },
    {
      title: "Conduct meeting",
      desc: "Meet with the client and finalize requirements.",
      status: "Completed",
      date: "Completed 2 days ago.",
      img: "/meeting.jpg",
    },
  ];

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-black text-white p-4 flex flex-col justify-between">
        <div>
          <div className="flex flex-col items-center mb-8">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/profile.jpg" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <p className="mt-2 text-sm">amanuel</p>
            <p className="text-xs text-gray-400">amanuel@gmail.com</p>
          </div>
          <div className="space-y-4">
            <Button variant="ghost" className="w-full text-left">Dashboard</Button>
            <Button variant="ghost" className="w-full text-left">Vital Task</Button>
            <Button variant="ghost" className="w-full text-left">My Task</Button>
            <Button variant="ghost" className="w-full text-left">Task Categories</Button>
            <Button variant="ghost" className="w-full text-left">Settings</Button>
            <Button variant="ghost" className="w-full text-left">Help</Button>
          </div>
        </div>
        <Button variant="ghost" className="w-full text-left text-red-500">Logout</Button>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">Welcome back, amanuell👋</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* To-Do */}
          <Card className="col-span-2">
            <CardContent className="p-4">
              <div className="flex justify-between mb-4">
                <h3 className="font-medium">To-Do</h3>
                <Button variant="link" className="text-sm">+ Add task</Button>
              </div>
              {tasks.map((task, idx) => (
                <div key={idx} className="border rounded-lg p-4 mb-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Circle className={`text-${task.color}-500`} size={12} />
                      <p className="font-semibold text-sm">{task.title}</p>
                    </div>
                    <img src={task.img} className="w-12 h-12 rounded-md" />
                  </div>
                  <p className="text-xs mt-1 text-gray-600">{task.desc}</p>
                  <div className="text-xs mt-2 flex justify-between text-gray-500">
                    <span>Priority: {task.priority}</span>
                    <span>Status: {task.status}</span>
                    <span>Created on: {task.date}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Task Status */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Task Status</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <Progress value={84} className="w-full" />
                  <span className="text-xs">Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Circle className="text-blue-500" size={16} />
                  <Progress value={46} className="w-full" />
                  <span className="text-xs">In Progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="text-red-500" size={16} />
                  <Progress value={13} className="w-full" />
                  <span className="text-xs">Not Started</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Completed Tasks */}
          <Card className="col-span-3">
            <CardContent className="p-4">
              <h3 className="font-medium mb-4">Completed Task</h3>
              <div className="grid grid-cols-2 gap-4">
                {completedTasks.map((task, idx) => (
                  <div key={idx} className="border rounded-lg p-3 flex gap-3 items-start">
                    <CheckCircle className="text-green-500 mt-1" size={16} />
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{task.title}</p>
                      <p className="text-xs text-gray-600">{task.desc}</p>
                      <p className="text-xs text-gray-400 mt-1">{task.date}</p>
                    </div>
                    <img src={task.img} className="w-14 h-14 rounded-md" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

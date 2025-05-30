import React from 'react'
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

export default Dashboard
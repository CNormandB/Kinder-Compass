import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Attendance from './pages/Attendance'
import Chat from './pages/Chat';
import Journal from './pages/Journal';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Planning from './pages/Planning';
import StaffSpace from './pages/StaffSpace';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/attendance" element={<Attendance/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/journal" element={<Journal/>}/>
        <Route path="/landing" element={<Landing />} />
        <Route path="/" element={<Login/>}/>
        <Route path="/planning" element={<Planning/>}/>
        <Route path="/staffspace" element={<StaffSpace/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
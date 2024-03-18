import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Attendance from './pages/Attendance'
import Chat from './pages/Chat';
import Home from './pages/Home';
import Log from './pages/Log';
import Planning from './pages/Planning'
import StaffSpace from './pages/StaffSpace';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attendance" element={<Attendance/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/log" element={<Log/>}/>
        <Route path="/planning" element={<Planning/>}/>
        <Route path="/staffspace" element={<StaffSpace/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
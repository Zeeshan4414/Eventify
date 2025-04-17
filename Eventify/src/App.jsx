import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
// import Events from './pages/Events';
import Users from './pages/Users';
import Profile from './pages/Profile';
// import Settings from './pages/Settings';
import Organizers from './pages/Organizers';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
  <div className="flex">
    <Sidebar />
    <div className="flex-1">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/events" element={<Events />} /> */}
        <Route path="/users" element={<Users />} />
        <Route path="/organizers" element={<Organizers />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </div>
  </div>


  );
}

export default App;


import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaCalendarAlt, FaUserFriends, FaUserCircle, FaCog, FaUsers } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="h-screen w-64 bg-white shadow-2xl p-6 flex flex-col font-poppins animate-slide-in-left">
      <h1 className="text-3xl font-extrabold text-purple-600 mb-12 text-center">EventDash</h1>

      <NavLink to="/dashboard" className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-800 hover:bg-purple-100 mb-2">
        <FaTachometerAlt /> Dashboard
      </NavLink>
      <NavLink to="/events" className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-800 hover:bg-purple-100 mb-2">
        <FaCalendarAlt /> Events
      </NavLink>
      <NavLink to="/users" className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-800 hover:bg-purple-100 mb-2">
        <FaUserFriends /> Users
      </NavLink>
      <NavLink to="/organizers" className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-800 hover:bg-purple-100 mb-2">
        <FaUsers /> Organizers
      </NavLink>
      <NavLink to="/profile" className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-800 hover:bg-purple-100 mb-2">
        <FaUserCircle /> Profile
      </NavLink>
      <NavLink to="/settings" className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-800 hover:bg-purple-100">
        <FaCog /> Settings
      </NavLink>
    </div>
  );
}

export default Sidebar;

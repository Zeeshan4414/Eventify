import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import EventifyLogo from '../assets/Eventify.png'; 
import { 
  FaTachometerAlt, FaCalendarAlt, FaUserFriends, FaUserCircle, 
  FaCog, FaUsers, FaBars, FaSignOutAlt 
} from 'react-icons/fa';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className={`h-screen bg-gray-200 shadow-2xl p-4 flex flex-col 
      ${isOpen ? 'w-64' : 'w-20'} transition-all duration-500 font-poppins animate-slide-in-left animate-slide-in-right`}
    >
      {/* Toggle Button */}
      <button 
        onClick={toggleSidebar} 
        className="text-purple-600 text-2xl ml-3 mb-6 focus:outline-none"
      >
        <FaBars />
      </button>

      {/* Title */}
      {isOpen && <img src={EventifyLogo} alt="Logo" className="w-52 h-28 rounded-2xl mb-6" />}

      {/* Nav Links */}
      <NavItem to="/dashboard" icon={<FaTachometerAlt />} label="Dashboard" isOpen={isOpen} />
      <NavItem to="/events" icon={<FaCalendarAlt />} label="Events" isOpen={isOpen} />
      <NavItem to="/users" icon={<FaUserFriends />} label="Users" isOpen={isOpen} />
      <NavItem to="/organizers" icon={<FaUsers />} label="Organizers" isOpen={isOpen} />
      <NavItem to="/profile" icon={<FaUserCircle />} label="Profile" isOpen={isOpen} />
      <NavItem to="/settings" icon={<FaCog />} label="Settings" isOpen={isOpen} />

      <div className="mt-auto">
        <NavItem to="/" icon={<FaSignOutAlt />} label="Logout" isOpen={isOpen} />
      </div>
    </div>
  );
}

const NavItem = ({ to, icon, label, isOpen }) => (
  <NavLink
    to={to}
    className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-800 hover:bg-purple-100 mb-2 transition duration-300"
  >
    <span className="text-2xl">{icon}</span>
    {isOpen && <span>{label}</span>}
  </NavLink>
);

export default Sidebar;

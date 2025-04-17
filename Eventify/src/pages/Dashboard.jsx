import React from 'react';
import { FaUserCircle, FaUsers, FaCalendarAlt, FaSignOutAlt, FaChartBar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-indigo-600 to-pink-500 flex flex-col items-center justify-start text-white font-poppins animate-fade-in">
      {/* Header */}
      <div className="w-full max-w-6xl p-6 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-tight">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-pink-600 hover:to-purple-600 transition duration-300"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>

      {/* Welcome Banner */}
      <div className="bg-white text-gray-800 w-full max-w-6xl p-6 rounded-3xl shadow-2xl mb-8 transform transition duration-500 hover:scale-[1.01]">
        <h2 className="text-2xl font-bold mb-2">Welcome back, Admin!</h2>
        <p className="text-gray-600">Here's what’s happening with your app today.</p>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full max-w-6xl mb-8">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-3 transform transition duration-300 hover:scale-105">
          <FaUsers size={40} />
          <h2 className="text-xl font-bold">1,245 Users</h2>
        </div>
        <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-3 transform transition duration-300 hover:scale-105">
          <FaCalendarAlt size={40} />
          <h2 className="text-xl font-bold">57 Events</h2>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-3 transform transition duration-300 hover:scale-105">
          <FaUserCircle size={40} />
          <h2 className="text-xl font-bold">15 Organizers</h2>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-3 transform transition duration-300 hover:scale-105">
          <FaChartBar size={40} />
          <h2 className="text-xl font-bold">Reports</h2>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white text-gray-800 w-full max-w-6xl p-6 rounded-3xl shadow-2xl mb-8 transform transition duration-500 hover:scale-[1.01]">
        <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
        <ul className="space-y-3">
          <li className="border-b py-2">🎉 New event <b>React Meetup</b> created by <b>Ali</b>.</li>
          <li className="border-b py-2">👤 User <b>Zeeshan Ahmad</b> registered.</li>
          <li className="border-b py-2">📊 Report generated for March statistics.</li>
          <li className="border-b py-2">🎨 New organizer <b>Maham</b> added.</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-300 py-6">
        © {new Date().getFullYear()} EventApp Dashboard. Crafted by Zeeshan.
      </footer>
    </div>
  );
}

export default Dashboard;

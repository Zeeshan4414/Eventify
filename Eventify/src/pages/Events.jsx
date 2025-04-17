import React from 'react';
import { FaPlusCircle, FaCalendarAlt } from 'react-icons/fa';

function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-indigo-600 to-pink-500 text-white p-8 font-poppins animate-fade-in">
      <h1 className="text-4xl font-extrabold mb-6">📅 Manage Events</h1>

      <button className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-teal-500 text-white px-4 py-2 rounded-lg mb-6 hover:scale-105 transition">
        <FaPlusCircle /> Add New Event
      </button>

      <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-2xl mb-8">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 border-b py-2">
            <FaCalendarAlt className="text-purple-500" /> ReactJS Conference — May 30, 2025
          </li>
          <li className="flex items-center gap-3 border-b py-2">
            <FaCalendarAlt className="text-purple-500" /> AI Startup Meetup — June 10, 2025
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Events;

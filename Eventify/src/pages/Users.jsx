import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

function Users() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-indigo-600 to-pink-500 text-white p-8 font-poppins animate-fade-in">
      <h1 className="text-4xl font-extrabold mb-6">👥 Registered Users</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {['Zeeshan Ahmad', 'Ali Khan', 'Maham Noor', 'Hira Javed'].map((user, i) => (
          <div
            key={i}
            className="bg-white text-gray-800 p-6 rounded-2xl shadow-xl flex items-center gap-4 hover:scale-105 transition"
          >
            <FaUserCircle size={40} className="text-purple-600" />
            <div>
              <h2 className="font-bold">{user}</h2>
              <p className="text-gray-500">user{i + 1}@eventapp.com</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;

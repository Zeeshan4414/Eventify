import React from 'react';
import { FaUserCircle, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-indigo-600 to-pink-500 text-white p-8 font-poppins animate-fade-in">
      <h1 className="text-4xl font-extrabold mb-6">👤 My Profile</h1>

      <div className="bg-white text-gray-800 p-8 rounded-3xl shadow-2xl max-w-xl mx-auto">
        <div className="flex flex-col items-center mb-6">
          <FaUserCircle size={100} className="text-purple-600 mb-4" />
          <h2 className="text-2xl font-bold">Zeeshan Ahmad</h2>
          <p className="text-gray-500">Administrator</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b pb-2">
            <FaEnvelope className="text-purple-600" />
            <span>zeeshan@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 border-b pb-2">
            <FaPhoneAlt className="text-purple-600" />
            <span>+92 312 0000000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

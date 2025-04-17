import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaUserTag } from 'react-icons/fa';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      alert('Registration successful');
      navigate('/');
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 animate-fade-in font-poppins">
      <form
        onSubmit={registerUser}
        className="bg-white p-8 rounded-2xl shadow-2xl w-120 space-y-5 "
      >
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6 tracking-tight animate-pulse">
          Create Account
        </h2>

        <div className="relative">
          <FaUser className="absolute top-3 left-3 text-gray-400" />
          <input
            className="pl-10 border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none rounded px-4 py-2 w-full transition duration-300"
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="relative">
          <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
          <input
            className="pl-10 border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none rounded px-4 py-2 w-full transition duration-300"
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />
        </div>

        <div className="relative">
          <FaLock className="absolute top-3 left-3 text-gray-400" />
          <input
            className="pl-10 border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none rounded px-4 py-2 w-full transition duration-300"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>

        <div className="relative">
          <FaUserTag className="absolute top-3 left-3 text-gray-400" />
          <select
            className="pl-10 border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none rounded px-4 py-2 w-full transition duration-300"
            name="role"
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="organizer">Organizer</option>
          </select>
        </div>

        <button
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg w-full hover:from-purple-600 hover:to-pink-600 transition duration-300"
          type="submit"
        >
          Register
        </button>

        <p className="text-center text-gray-500 text-sm mt-4">
          Already have an account?{' '}
          <a
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium transition duration-200"
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;

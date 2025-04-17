import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/login', form);
      alert('Login successful');
      navigate('/dashboard'); // adjust path as needed
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 font-poppins">
      <form
        onSubmit={loginUser}
        className="bg-white p-8 rounded-2xl shadow-2xl w-120 space-y-5"
      >
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6 tracking-tight animate-pulse">
          Welcome Back
        </h2>

        <div className="relative">
          <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
          <input
            className="pl-10 border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none rounded px-4 py-2 w-full transition duration-300"
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
            className="pl-10 border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none rounded px-4 py-2 w-full transition duration-300"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>

        <button
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg w-full hover:from-indigo-600 hover:to-purple-600 transition duration-300"
          type="submit"
        >
          Login
        </button>

        <p className="text-center text-gray-500 text-sm mt-4">
          Don&apos;t have an account?{' '}
          <a
            href="/register"
            className="text-indigo-600 hover:text-indigo-800 font-medium transition duration-200"
          >
            Register
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;

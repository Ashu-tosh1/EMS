import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  // State management for email, password, and error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    setError('');
    handleLogin(email, password);
    setEmail('');
    setPassword('');
    console.log('Form submitted with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Navbar/Header */}
      <header className=" flex items-center justify-center py-4 px-6">
        <h1 className="text-3xl font-bold text-white">Employee Management</h1>
      </header>

      {/* Login Card Section */}
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-center text-white mb-6">Welcome Back</h2>
          <form onSubmit={submitHandler} className="space-y-4">
            <div>
              <label className="block font-bold text-gray-300 mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xl text-white"
                required
              />
            </div>
            <div>
              <label className="block font-bold text-gray-300 mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md font-bold text-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 rounded-md font-semibold hover:bg-emerald-700 transition duration-200"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

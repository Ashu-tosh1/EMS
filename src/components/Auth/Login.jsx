import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black ">
      <div className="w-full max-w-md bg-slate-50 rounded-lg shadow-lg p-1 ">
        <form action="" className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-700 ">Login</h2>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border border-emerald-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 mt-1 border border-emerald-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-1"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

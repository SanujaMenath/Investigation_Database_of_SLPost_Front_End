import React, { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="h-screen w-screen p-10 bg-gradient-to-r from-violet-200 to-pink-200 flex items-center justify-center ">
      <div className="bg-gray-800  p-8 rounded-xl shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold mb-6 text-zinc-50">Login</h2>
          <div>
            <label className="block mb-2 text-sm text-zinc-300">Email:</label>
            <input
              type="email"
              value={email}
              className="w-full px-4 py-2 border rounded-lg text-gray-700  bg-gray-200  border-gray-300  focus:outline-none focus:ring-2 focus:ring-gray-400"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-zinc-300">
              Password:
            </label>
            <input
              type="password"
              value={password}
              className="w-full px-4 py-2 border rounded-lg text-gray-700  bg-gray-200  border-gray-300  focus:outline-none focus:ring-2 focus:ring-gray-400"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../services/api";  
import {jwtDecode} from 'jwt-decode';
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors
  
    console.log("Login initiated with email:", email); 
    try {
      const response = await fetch(baseUrl + "/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      console.log("Response status:", response.status); 
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData); 
        throw new Error(errorData.message || "Invalid email or password");
      }
  
      const data = await response.json();
      console.log("Login successful, received data:", data); 
  
      // Decode token to extract role and other details
      const decodedToken: any = jwtDecode(data.token);
      console.log("Decoded Token:", decodedToken);
      const userRole = decodedToken.role;
      const user = {
        userId: data.userId,
        email: data.email,
        role: userRole,
        token: data.token,
      };
  
      // Save the entire user object in localStorage
      localStorage.setItem("user", JSON.stringify(user));
      console.log("Saved user to localStorage:", user);
  
      navigate("/"); // Navigate to the home page or dashboard
      
    } catch (err: any) {
      console.error("Error during login:", err); 
      setError(err.message || "An error occurred. Please try again.");
    }
  };
  
  

  return (
    <div className="flex items-center justify-center min-h-full bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
          Login
        </h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

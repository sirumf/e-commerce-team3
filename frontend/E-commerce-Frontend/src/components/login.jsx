import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("user");
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    setUser({ username, role });
    navigate("/");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleLogin}>Login</button>
 </div>
  );
};

export default Login;


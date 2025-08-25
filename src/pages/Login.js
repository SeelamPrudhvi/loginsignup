import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../pages/Auth.css";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (form.username && form.password) {
      alert("Login Successful 🎉");
      navigate("/dashboard");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header login">
          Login
          <div className="auth-subtitle">Sign in to continue</div>
        </div>
        <div className="auth-content">
          <div className="login-form">
            <label>USERNAME</label>
            <input
              type="text"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />

            <label>NEW PASSWORD</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <span
                className="toggle-eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <button className="login-btn" onClick={handleLogin}>
              LOGIN
            </button>
          </div>

          <div className="login-footer">
            Don’t have Account? <Link to="/signup">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

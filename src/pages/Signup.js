import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  validateName,
  validateUsername,
  validatePassword,
  validateConfirmPassword,
  validateEmail,
  validatePhone,
} from "../utils/validation";
import "../pages/Auth.css";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newErrors = {
      name: validateName(form.name),
      username: validateUsername(form.username),
      email: validateEmail(form.email),
      phone: validatePhone(form.phone),
      password: validatePassword(form.password, form.username),
      confirm: validateConfirmPassword(form.password, form.confirm),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).every((err) => err === "")) {
      alert("Signup Successful 🎉");
      navigate("/");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">Create new Account</div>
        <div className="auth-content">
          <div className="form-grid">
            <div>
              <label>NAME</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div>
              <label>USERNAME</label>
              <input
                type="text"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div>
              <label>EMAIL</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
              <label>PHONE NO.</label>
              <input
                type="text"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            {/* Password with toggle */}
            <div>
              <label style={{ fontSize: "11px" }}>NEW PASSWORD</label>
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
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            {/* Confirm password with toggle */}
            <div>
              <label style={{ fontSize: "11px" }}>CONFIRM NEW PASSWORD</label>
              <input
                type={showConfirm ? "text" : "password"}
                value={form.confirm}
                onChange={(e) => setForm({ ...form, confirm: e.target.value })}
              />
              <span
                className="toggle-eye"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <FaEye /> : <FaEyeSlash />}
              </span>
              {errors.confirm && <p className="error">{errors.confirm}</p>}
            </div>
          </div>

          <button className="signup-btn" onClick={handleSubmit}>
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

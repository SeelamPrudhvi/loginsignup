import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out!");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">MyApp</h2>
        <ul>
          <li>🏠 Home</li>
          <li>📊 Reports</li>
          <li>⚙ Settings</li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Welcome to Dashboard 🎉</h1>
        </header>

        <section className="cards-grid">
          <div className="card">
            <h3>Total Users</h3>
            <p>120</p>
          </div>
          <div className="card">
            <h3>Active Sessions</h3>
            <p>45</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p>$12,340</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

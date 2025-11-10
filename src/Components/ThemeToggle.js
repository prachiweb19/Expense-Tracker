import React from "react";
import "./ThemeToggle.css";

function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <div className="toggle-container">
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
        <span className="slider round"></span>
      </label>
      <p>{darkMode ? "Dark Mode 🌙" : "Light Mode ☀"}</p>
    </div>
  );
}

export default ThemeToggle;
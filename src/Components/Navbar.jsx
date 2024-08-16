import React, { useState, useEffect } from "react";
import './Navbar.css'; // Import your CSS file

const Navbar = ({ setCategory, toggleDarkMode, isDarkMode }) => {
  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className={`badge ${isDarkMode ? 'bg-light text-dark' : 'bg-dark text-light'} fs-400`}>News Magazine</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => handleCategoryClick("general")}>General</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => handleCategoryClick("business")}>Business</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => handleCategoryClick("entertainment")}>Entertainment</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => handleCategoryClick("health")}>Health</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => handleCategoryClick("science")}>Science</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => handleCategoryClick("sports")}>Sports</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => handleCategoryClick("technology")}>Technology</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={toggleDarkMode}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

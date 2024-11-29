import React, { useState } from 'react';
import '../../css/navbar.css';

const Navbar = ({ onGroupChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleSelection = (value) => {
    onGroupChange(value);
    setShowDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-btn" onClick={toggleDropdown}>
          <img src="Display.svg" alt="Display" />
          <div>Display</div>
          <img src="down.svg" alt="Dropdown Arrow" />
        </button>
        {showDropdown && (
          <div className="dropdown-menu">
            <button onClick={() => handleSelection("username")}>Group by Username</button>
            <button onClick={() => handleSelection("status")}>Group by Status</button>
            <button onClick={() => handleSelection("priority")}>Group by Priority</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

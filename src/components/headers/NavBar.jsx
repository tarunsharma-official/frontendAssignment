import React, { useState } from 'react';
import '../../css/navbar.css';

const Navbar = ({ onGroupChange, onOrderChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [groupBy, setGroupBy] = useState("status"); // Default to "status"
  const [orderBy, setOrderBy] = useState("priority"); // Default to "priority"

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleGroupChange = (value) => {
    setGroupBy(value);
    setOrderBy("priority"); // Reset to default ordering when grouping changes
    onGroupChange(value);
  };

  const handleOrderChange = (value) => {
    setOrderBy(value);
    setGroupBy("status"); // Reset to default grouping when ordering changes
    onOrderChange(value);
  };

  return (
    <nav className="navbar">
      <button className="navbar-btn" onClick={toggleDropdown}>
        <img src="Display.svg" alt="Display" className="navbar-icon" />
        <div>Display</div>
        <img src="down.svg" alt="Dropdown Arrow" className="navbar-icon" />
      </button>

      {showDropdown && (
        <div className="dropdown-menu">
          <div className="dropdown-row">
            <div className="dropdown-section">
              <div className="dropdown-label">Grouping</div>
              <select
                className="dropdown-select"
                value={groupBy}
                onChange={(e) => handleGroupChange(e.target.value)}
              >
                <option value="status">Status</option>
                <option value="username">Username</option>
              </select>
            </div>
          </div>
          <div className="dropdown-row">
            <div className="dropdown-section">
              <div className="dropdown-label">Ordering</div>
              <select
                className="dropdown-select"
                value={orderBy}
                onChange={(e) => handleOrderChange(e.target.value)}
              >
                <option value="priority">Priority</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

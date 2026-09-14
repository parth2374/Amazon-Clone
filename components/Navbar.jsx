import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <div className="logo"></div>
      </div>

      <div className="nav-search">
        <select className="nav-option">
          <option>All</option>
        </select>
        <input placeholder="Search Amazon" className="nav-box" />
        <div className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      <div className="nav-cart">
        <i className="fa-solid fa-cart-shopping" style={{ marginRight: '5px' }}></i>
        <span>Cart</span>
      </div>
    </nav>
  );
};

export default Navbar;

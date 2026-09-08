import React from 'react';
import Head from 'next/head';

function LandingPage() {
  return (
    <div>
      <Head>
        <title>Amazon Header</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </Head>
      
      <div className="navbar">
        <div className="nav-logo borders">
            <div className="logo" style={{backgroundImage: "url('/amazon_logo.png')"}}>
            </div>
        </div>
    
        <div className="icon border">
            
            <div className="nav-address">
                <p className="add-first">Deliver to</p>
                <div className="icons">
                    <i className="fa-solid fa-location-dot"></i>
                <p className="add-sec">India</p>
                </div>
            </div>
        </div>

        <div className="nav-search">
            <select className="nav-option jk">
                <option>All</option>
            </select>
            <input placeholder="Search Amazon" className="nav-box" />
            <div className="search-icon find">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>

        <div className="language border">
            <div className="flag">
            </div>
            <div className="flag-text">
                <p>EN</p>
            </div>
            <div className="down">
                <i className="fa-solid fa-caret-down"></i>
            </div>
        </div>

        <div className="nav-sign border">
            <p className="Hello">Hello, sign in</p>
            <p className="Account">
                Account & Lists
                <span className="up"><i className="fa-solid fa-caret-down"></i></span>
            </p>
        </div>

        <div className="nav-order border">
            <p className="Hello">Returns</p>
            <p className="Account">& Orders</p>
        </div>

        <div className="nav-cart border">
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
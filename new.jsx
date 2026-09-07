import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Head>
        <title>Welcome to Our Website</title>
        <meta name="description" content="A beautiful landing page for our website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar">
        <div className="logo">MyLogo</div>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Amazing Website</h1>
          <p>Discover a world of possibilities with us.</p>
          <Link href="/pages/index.js">
            <a className="cta-button">Get Started</a>
          </Link>
        </div>
      </header>

      <section className="features-section">
        <div className="feature-item">
          <h2>Feature One</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feature-item">
          <h2>Feature Two</h2>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="feature-item">
          <h2>Feature Three</h2>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        </div>
      </section>

      <footer className="footer-section">
        <p>&copy; 2023 Our Website. All rights reserved.</p>
      </footer>

      <style jsx>{`
        .landing-page {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          color: #333;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 50px;
          background-color: #333;
          color: white;
        }

        .navbar .logo {
          font-size: 1.5em;
          font-weight: bold;
        }

        .nav-links {
          list-style: none;
          display: flex;
        }

        .nav-links li {
          margin-left: 20px;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
        }

        .hero-section {
          background: url('/hero_image.jpg') no-repeat center center/cover;
          color: white;
          text-align: center;
          padding: 100px 20px;
          height: 100vh; /* Full viewport height */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-content {
          max-width: 800px;
          background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
          padding: 40px;
          border-radius: 10px;
        }

        .hero-section h1 {
          font-size: 3em;
          margin-bottom: 10px;
        }

        .hero-section p {
          font-size: 1.2em;
          margin-bottom: 30px;
        }

        .cta-button {
          background-color: #0070f3;
          color: white;
          padding: 15px 30px;
          text-decoration: none;
          border-radius: 5px;
          font-size: 1.1em;
          transition: background-color 0.3s ease;
        }

        .cta-button:hover {
          background-color: #005bb5;
        }

        .features-section {
          display: flex;
          justify-content: space-around;
          padding: 50px 20px;
          background-color: #f9f9f9;
          flex-wrap: wrap;
        }

        .feature-item {
          flex-basis: 30%;
          text-align: center;
          padding: 20px;
          margin: 10px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          min-width: 280px;
        }

        .feature-item h2 {
          color: #0070f3;
          margin-bottom: 10px;
        }

        .footer-section {
          background-color: #333;
          color: white;
          text-align: center;
          padding: 20px;
          position: relative;
          bottom: 0;
          width: 100%;
        }

        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2.5em;
          }

          .hero-section p {
            font-size: 1em;
          }

          .features-section {
            flex-direction: column;
            align-items: center;
          }

          .feature-item {
            flex-basis: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;

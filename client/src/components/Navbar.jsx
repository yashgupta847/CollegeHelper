import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImage from "./WhatsApp Image 2025-04-13 at 21.53.31_d44fcd1e.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src="https://tse1.mm.bing.net/th?id=OIP.Bo5rRKPePdxDDE3BxyivMAHaHa&pid=Api&P=0&h=180" />
        </Link>
      </div>

      <div
        className={`navbar-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/glimpes" onClick={() => setMenuOpen(false)}>
            Glimpes
          </Link>
        </li>
        <li>
          <Link to="/questions" onClick={() => setMenuOpen(false)}>
            Questions
          </Link>
        </li>
        <li>
          <Link to="/answers" onClick={() => setMenuOpen(false)}>
            Answers
          </Link>
        </li>
        <li>
          <Link to="/faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

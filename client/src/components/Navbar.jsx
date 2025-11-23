import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src="https://tse2.mm.bing.net/th/id/OIP.izIPeeYff_Brk7NvxmqK-QHaHa?pid=Api&P=0&h=180" />
        </Link>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src="https://www.ietlucknow.ac.in/sites/default/files/inline-images/aktu_logo.png" />
        </Link>
      </div>

      {/* ===== College Name Section with Class ===== */}
      <div className="navbar-title">
        Institute of Engineering & Technology, Lucknow <br />
        अभियांत्रिकी एवं प्रौद्योगिकी संस्थान, लखनऊ <br />
        An{" "}
        <a href="https://www.ietlucknow.ac.in/sites/default/files/docs/UGC_Autonomy_2728.pdf">Autonomous </a>
         Constituent Institute of Dr. A.P.J. Abdul Kalam Technical
        University Uttar Pradesh, Lucknow
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

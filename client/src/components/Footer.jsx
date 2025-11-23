import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section email-box">
          <h3>Email Us</h3>
          <input
            type="text"
            placeholder="2400521520070@ietlucknow.ac.in"
            readOnly
            onClick={() =>
              (window.location.href = "mailto:2400521520070@ietlucknow.ac.in")
            }
          />
        </div>

        {/* IMPORTANT SECTIONS */}
        <div className="footer-section">
          <h3>Important Sections</h3>
          <ul>
            <li>Council / Bodies</li>
            <li>
              <a href="https://www.ietlucknow.ac.in/ecell">E-Cell</a>
            </li>
            <li>
              <a href="https://ieee.ietlucknow.ac.in/">
                IEEE Students Chapter (UNIT STB62961)
              </a>
            </li>
            <li>
              <a href="https://www.ietlucknow.ac.in/iic">
                Institution's Innovation Council
              </a>
            </li>
            <li>
              <a href="https://issacc-website.vercel.app/">ISSACC</a>
            </li>
            <li>
              <a href="https://nnf.ietlucknow.ac.in/">
                Navyug Navachar Foundation
              </a>
            </li>
          </ul>
        </div>

        {/* CO-CURRICULARS */}
        <div className="footer-section">
          <h3>Co-Curriculars</h3>
          <ul>
            <li>
              <a href="https://shauryotsava.ietlucknow.ac.in/">Shauryotsava</a>
            </li>
            <li>
              <a href="https://eesietlko.blogspot.com/">
                Electrical Engineering Society
              </a>
            </li>
            <li>
              <a href="https://gdsc.community.dev/institute-of-engineering-technology-lucknow/">
                Google Developer Student Club
              </a>
            </li>
            <li>
              <a href="https://mef.ietlucknow.ac.in/">
                Mechanical Engineering Forum (MEF)
              </a>
            </li>
            <li>
              <a href="https://parmarth.ietlucknow.ac.in/">PARMARTH</a>
            </li>
            <li>
              <a href="https://www.ietlucknow.ac.in/node/621/">SEED</a>
            </li>
          </ul>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            <b>Institute of Engineering & Technology</b>
          </p>
          <b>
            <p>Sitapur Road, Lucknow</p>
          </b>
          <p>Uttar Pradesh, India</p>
          <p>Pin Code: 226021</p>
          <p>
            Web:{" "}
            <a
              href="https://www.ietlucknow.ac.in"
              target="_blank"
              rel="noreferrer"
            >
              ietlucknow.ac.in
            </a>
          </p>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="footer-bottom">
        <p>
          © 2024 Institute of Engineering and Technology, Lucknow | Maintained @
          GPCF, Computer Center, IET Lucknow
        </p>
        <p>Built with ♥ using D10</p>
        <p>Last Updated on Saturday, November 22, 2025 - 17:10</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";

function Footer() {
  return (
    <>
      <div className="footer bgColor">
        <div className="footer-content">
          <div className="company-info">
            <h4>Contact Us</h4>
            <p>1234 Street , City, State, 12345</p>
            <p>Phone: (+91) 7448120877</p>
            <p>Email: info@company.com</p>
          </div>
          <div className="quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/AboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/Service">Services</Link>
              </li>

              <li>
                <Link to="/Privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/CancelationAndReturn">Cancelation And Return</Link>
              </li>
            </ul>
          </div>
          <div className="social-media">
            <h4>Follow Us</h4>
            <div className="links-media mb-2">
              <FaFacebookSquare className="icon" />
              <FaInstagramSquare className="icon" />
              <FaTwitterSquare className="icon" />
              <BiLogoLinkedinSquare className="icon" />
            </div>
          </div>
          <div className="newsletter-signup">
            <h4>Subscribe to our Newsletter</h4>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footerTextBg">
        <p className="footerText">©2024, All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;

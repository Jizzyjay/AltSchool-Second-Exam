import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import { FiTwitter, FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGlobeAfrica } from "react-icons/fa";

function Footer() {
  return (
    <div className="container">
      <div className="footer-link-wrapper">
        <div className="footer-link-items">
          <h2>Tosin </h2>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/error">Error Boundary</Link>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">Tosin © 2022</small>
          <div className="social-icons">
            <Link
              className="social-icons-link linkedin"
              to="https://www.linkedin.com/in/ekunolajohn/"
              target="_blank"
              aria-label="Linkedin"
            >
              <AiFillLinkedin />
            </Link>
            <Link
              className="social-icons-link twitter"
              to="https://twitter.com/Oluwatosin_Ej"
              target="_blank"
              aria-label="Twitter"
            >
              <FiTwitter />
            </Link>
            <Link
              className="social-icons-link github"
              to="https://github.com/Jizzyjay"
              target="_blank"
              aria-label="Github"
            >
              <FiGithub />
            </Link>
            <Link
              className="social-icons-link website"
              to="https://www.johnekunola.com/"
              target="_blank"
              aria-label="Website"
            >
              <FaGlobeAfrica />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
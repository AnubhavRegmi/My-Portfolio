import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © 2025 Anubhav's Portfolio | 318-614-1983
        </p>
        <p>
          <a
            href="https://github.com/AnubhavRegmi"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/anubhav-regmi-36310b255/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

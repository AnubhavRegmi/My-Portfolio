import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  useEffect(() => {
    const handleNavLinkClick = (event) => {
      const targetId = event.target.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const navbarHeight = document.querySelector(".navbar").offsetHeight;
          const offsetTop = targetElement.offsetTop - navbarHeight; // Adjust position

          // Smooth scrolling
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });

          // Close navbar after clicking a link (only in mobile mode)
          const navbarToggler = document.querySelector(".navbar-toggler");
          const navbarCollapse = document.querySelector(".navbar-collapse");
          if (navbarToggler && navbarCollapse.classList.contains("show")) {
            navbarToggler.click(); // Simulates clicking the toggle button to close it
          }
        }
      }
    };

    // Attach event listeners to all navbar links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    return () => {
      // Cleanup event listeners
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          Anubhav's Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
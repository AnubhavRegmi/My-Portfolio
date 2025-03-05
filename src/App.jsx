import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="app-container" id="home">
      <Navbar />

      <div className="main-content">

        {/* Personal Summary Section */}
        <section className="section personal-summary">
          <div className="Anubhav">
            <h1>Anubhav Regmi</h1>
          </div>
          <p className="description">
            <h3>
              A dedicated and passionate Computer Science student with knowledge in data structures and algorithms.
              Known for excellent communication skills and problem-solving abilities. Eager to learn new programming
              languages and technologies. Skilled in developing applications, debugging code, and creating projects.
              Bringing analytical thinking and versatility to contribute to innovative software solutions.
            </h3>
          </p>
        </section>

        {/* Education Section */}
        <section className="section education">
          <h2>Education</h2>
          <p>
            <strong>Bachelor’s in Computer Science</strong>
            <br />
            <strong>University of Louisiana at Monroe | Monroe, LA </strong>
            <br />
            2021 - 2025
          </p>

        </section>

        {/* Projects Section */}
        <div className="box">

        
        <section id="projects" className="section projects">
          <h2>
            Projects
          </h2>

          <p>
            Here are some of the projects I have worked on:
          </p>

        </section>
        {/* Project Carousel Section */}
        <ProjectCard />
        </div>
      </div>
      <div id="contact" className="contact-form">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;

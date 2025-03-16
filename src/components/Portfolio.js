import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="container body">
  

      {/* Cover Letter Section */}
      <section className="section">
        <h1 className="header">Cover Letter</h1>
        <p className="text">Dear Hiring Manager, I am excited to apply my programming skills to real-world projects...</p>
      </section>

      {/* Resume Section */}
      <section className="section">
        <h1 className="header">Resume</h1>
        <a href="https://your-resume-link.com" className="link" target="_blank" rel="noopener noreferrer">View My Resume</a>
      </section>

      {/* Portfolio Section */}
      <section className="section">
        <h1 className="header">Projects</h1>
        <a href="https://github.com/your-github-project1" className="link" target="_blank" rel="noopener noreferrer">Project 1</a>
        <br />
        <a href="https://github.com/your-github-project2" className="link" target="_blank" rel="noopener noreferrer">Project 2</a>
      </section>
    </div>
  );
};
export default Portfolio
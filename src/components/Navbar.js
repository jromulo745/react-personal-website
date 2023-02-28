import React from 'react';
import AboutMe from './AboutMe';
import ReactDOM from 'react-dom/client';


function Navbar() {

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav">
          <li>
            <a style={{cursor: 'pointer'}} onClick={() => {alert('hello')}}>Home</a>
          </li>
          <li>
            <a href="./about-me.html">About Me</a>
          </li>
          <li>
            <a href="https://github.com/jromulo745" target="_blank">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/joshua-jefson-romulo-5358581b5" target="_blank">LinkedIn</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
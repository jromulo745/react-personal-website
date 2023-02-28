import React from 'react';

function InfoCluster() {
  return (
    <div className="boxes">  
        <div className="container">
          <a href="./about-me.html" className="box">
            <h2>About Me</h2>
            <img src={require('../images/photo.png')} width="127" height="169" style={{borderRadius: '10px'}} />
            <p>Please click this box to view more information about me</p>
          </a>

          <a href="https://github.com/jromulo745" target="_blank" className="box">
            <h2>GitHub</h2>
            <img src={require('../images/github-mark-white.png')} width="159" height="162" style={{marginBottom: '26px'}} />
            <p>Check out my GitHub!</p>
          </a>

          <a href="https://www.linkedin.com/in/joshua-jefson-romulo-5358581b5" target="_blank" className="box">
            <h2>LinkedIn</h2>
            <img src={require('../images/LI-In-Bug.png')} width="201" height="170" />
            <p>Connect with me on LinkedIn!</p>
          </a>
        </div>
      </div>
  );
}

export default InfoCluster;
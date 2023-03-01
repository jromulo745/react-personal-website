// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Banner from './components/Banner';
import InfoCluster from './components/InfoCluster';
import Footer from './components/Footer';
import React, {useState} from "react";
import AboutMe from './components/AboutMe';
import WebApps from './components/WebApps';

import './App.css';

function App() {

  const [home, showHome] = useState(true);
  const [about, showAbout] = useState(false);
  const [apps, showApps] = useState(false);

  function changeView(link) {
    if (home == false && link == 1) { // make Home visible while others not
      showHome(true);
      showAbout(false);
      showApps(false);
    }

    else if (about == false && link == 2) { // make About Me visible while others not
      showAbout(true);
      showHome(false);
      showApps(false);
    }
    
    else if (apps == false && link == 3 ) { // make Apps visible while others not
      showApps(true);
      showHome(false);
      showAbout(false);
    }
  }

  return (
    <div>
      {/* <Navbar /> */}
      <nav className="navbar">
        <div className="container">
          <ul className="nav">
            <li>
              <a style={{cursor: 'pointer'}} onClick={() => {changeView(1)}}>Home</a>
            </li>
            <li>
              <a style={{cursor: 'pointer'}} onClick={() => {changeView(2)}}>About Me</a>
            </li>
            <li>
              <a style={{cursor: 'pointer'}} onClick={() => {changeView(3)}}>Apps</a>
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
      <Header />
      {home ? <Banner /> : null}      
      
      {/* {home ? <InfoCluster /> : null} */}
      {home ? 
        (<div className="boxes">  
          <div className="container">
            <a style={{cursor: 'pointer'}} onClick={() => changeView(2)} className="box">
              <h2>About Me</h2>
              <img src={require('./images/photo.png')} width="127" height="169" style={{borderRadius: '10px'}} />
              <p>Please click this box to view more information about me</p>
            </a>
  
            <a href="https://github.com/jromulo745" target="_blank" className="box">
              <h2>GitHub</h2>
              <img src={require('./images/github-mark-white.png')} width="159" height="162" style={{marginBottom: '26px'}} />
              <p>Check out my GitHub!</p>
            </a>
  
            <a href="https://www.linkedin.com/in/joshua-jefson-romulo-5358581b5" target="_blank" className="box">
              <h2>LinkedIn</h2>
              <img src={require('./images/LI-In-Bug.png')} width="201" height="170" />
              <p>Connect with me on LinkedIn!</p>
            </a>
          </div>
        </div>)
        : null}

      {about ? <AboutMe /> : null}
      {apps ? <WebApps /> : null}
      <Footer />
    </div>
  );
}

export default App;

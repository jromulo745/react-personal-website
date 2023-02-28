import React from 'react';

function Footer() {
  return(
    <footer>
      <div className="footer_container">
        <img src={require('../images/DALL·E 2023-01-25 18.25.04 - high resolution of an owl with a dark background.png')}/>
        <div className="footer_box message">
          <p>Copyright <span style={{fontFamily: 'Times New Roman, Times, serif'}}>&copy;</span> Joshua Jefson Romulo</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React from 'react';
import styles from '../styles.module.css';

function AboutMe() {
  window.scrollTo(0, 0);
  return (
    <div className={styles.boxes}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h2 style={{textAlign: 'center'}}>Work Photo</h2>
          <img src={require('../images/photo.png')} width="283" height="377" />
          <img src={require('../images/csueb.eb.wg.png')} width="145" height="112" style={{marginTop: '10px', marginBottom: '10px', marginLeft: '42px', marginRight: '60px', opacity: '30%'}} />
        </div>

        <div className={`${styles.box} ${styles.list_box}`}>
          <h2 style={{textAlign: 'center'}}>About me</h2>
          <p style={{textAlign: 'left', margin: '20px'}}>I am a computer science graduate from CSUEB with experience with the following languages: 
            Python, Java, C++, HTML, CSS, JavaScript, and MIPS Assembly. I have also worked for Cal State 
            East Bay's Information Technology department as an analyst aiding with digital accessibility 
            media production and IT asset procurement.</p>

          <h2 style={{textAlign: 'center', marginTop: '30px'}}>Work Experience</h2>
          <ul style={{textAlign: 'left', margin: '10px 50px'}}>
            <li>Information Technology Services (ITS) Accessibility Production Assistant</li>
            <ul>
              <li>Processing student requests for physical and electronic course materials and textbooks into Accessible Format using Assistive Technology and OCR software.</li>
              <li>Upholding of an electronic inventory.</li>
              <li>Providing triage services to the ICT process via campus ticketing system (Service Desk).</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
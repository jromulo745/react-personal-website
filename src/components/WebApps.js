import React from 'react';
import styles from '../styles.module.css';

function WebApps() {

  function handleFileRead(event) {
    const content = event.target.result.toString();
    console.log(content);
    let counter = 0;
    for (let i = 0; i < content.length; i++){
      counter++;
    }
    alert(counter + " characters are stored in the file");
  }

  function handleFileInputChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = handleFileRead;
    reader.readAsText(file);
  }

  return (
    <div>
      <h2 style={{marginBottom: '10px'}}>File Character Counter</h2>
      <div className={styles.box} style={{border: 'solid'}}>
        <div className='container'>
          <input type="file" onChange={handleFileInputChange} />
        </div>
      </div>
    </div>
    
  );
}

export default WebApps;
import React, {useState} from 'react';
import styles from '../styles.module.css';

// import text_file from '../../public/text_file.txt';

function WebApps() {

  // -----------------------------------------------------------------

  const hover_style = {
    cursor: 'pointer',
  };

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

  // -----------------------------------------------------------------

  let questions;
  let choices;
  const [counter, setCounter] = useState(0);
  const [current_question, setQuestion] = useState('');
  const [question_cluster, showQuestion] = useState(false);
  const [next_button, shownNextButton] = useState(false);
  const [current_choice_1, setChoice1] = useState('');
  const [current_choice_2, setChoice2] = useState('');
  const [current_choice_3, setChoice3] = useState('');
  const [current_choice_4, setChoice4] = useState('');
  const [current_choice_5, setChoice5] = useState('');
  const [correct_answer, setAnswer] = useState('');

  // load questions text file data
  fetch('/multiple-choice-explanation-template-quiz/questions.txt')
  .then((response) => response.text())
  .then(data => {
    questions = data.split('\n');
  })

  // load choices text file data
  fetch('/multiple-choice-explanation-template-quiz/choices.txt')
  .then((response) => response.text())
  .then(data => {
    choices = data.split('\n');
  });

  function handleClick() {
    let temp = choices[counter].split(',');

    return showQuestion(true) 
    + shownNextButton(true)
    + setQuestion(questions[counter])
    + (temp[0][1] === '*' ? (setChoice1(temp[0].substring(2)), setAnswer(temp[0].substring(2))) : setChoice1(temp[0]))
    + (temp[1][1] === '*' ? (setChoice2(temp[1].substring(2)), setAnswer(temp[1].substring(2))) : setChoice2(temp[1]))
    + (temp[2][1] === '*' ? (setChoice3(temp[2].substring(2)), setAnswer(temp[2].substring(2))) : setChoice3(temp[2]))
    + (temp[3][1] === '*' ? (setChoice4(temp[3].substring(2)), setAnswer(temp[3].substring(2))) : setChoice4(temp[3]))
    + (temp[4][1] === '*' ? (setChoice5(temp[4].substring(2)), setAnswer(temp[4].substring(2))) : setChoice5(temp[4]))
    + setCounter(counter + 1);
  }
  
  function nextQuestion() {
    let temp = choices[counter].split(',');
    return setQuestion(questions[counter]) 
    + setCounter(counter + 1) 
    + (temp[0][1] === '*' ? (setChoice1(temp[0].substring(2)), setAnswer(temp[0].substring(2))) : setChoice1(temp[0]))
    + (temp[1][1] === '*' ? (setChoice2(temp[1].substring(2)), setAnswer(temp[1].substring(2))) : setChoice2(temp[1]))
    + (temp[2][1] === '*' ? (setChoice3(temp[2].substring(2)), setAnswer(temp[2].substring(2))) : setChoice3(temp[2]))
    + (temp[3][1] === '*' ? (setChoice4(temp[3].substring(2)), setAnswer(temp[3].substring(2))) : setChoice4(temp[3]))
    + (temp[4][1] === '*' ? (setChoice5(temp[4].substring(2)), setAnswer(temp[4].substring(2))) : setChoice5(temp[4]))
    + console.log(counter);
  }

  function checkAnswer(choice) {
    console.log(correct_answer);
    console.log(choice);
    if (correct_answer == choice) {
      alert('correct');
    }
  }

  //checkpoint
  return (
    <div className="banner_box banner">
      <h2 style={{marginBottom: '5px'}}>File Character Counter</h2>
      <div className="container">
        <div className='item' style={{backgroundImage: 'none', backgroundColor: '#333333'}}>
          <input style={hover_style} className="box" type="file" onChange={handleFileInputChange} />
        </div>
      </div>
      <h2 style={{marginTop: '5px', marginBottom: '-2px'}}>IT Tester</h2>
      <div className="container">
        {/* ---- */}
        <div className='item' style={{backgroundImage: 'none', backgroundColor: '#333333'}}>
          <div className={`${styles.button} ${styles.button}`}>
            {/* begin test button; null if next button true and content if false */}
            {next_button ? null : (<button style={{marginBottom: '10px', marginTop: '5px'}} onClick={handleClick}>Begin Test</button>)}
            {/* next button */}
            {next_button ? (<button style={{marginBottom: '-10px', marginTop: '5px'}} onClick ={nextQuestion}>Next Question</button>) : null}
          </div>
          {question_cluster ? (<h2 style={{textAlign: 'left', marginLeft: '10px'}}><br />{current_question}</h2>) : null}
          {question_cluster ? ( <div style={{textAlign: 'left', marginLeft: '10px'}} className={`${styles.button} ${styles.button}`}>
            <br />
            <button onClick={() => checkAnswer(current_choice_1)}>{current_choice_1}</button>
            <br />
            <br />
            <button onClick={() => checkAnswer(current_choice_2)}>{current_choice_2}</button>
            <br />
            <br />
            <button onClick={() => checkAnswer(current_choice_3)}>{current_choice_3}</button>
            <br />
            <br />
            <button onClick={() => checkAnswer(current_choice_4)}>{current_choice_4}</button>
            <br />
            <br />
            <button onClick={() => checkAnswer(current_choice_5)} style={{marginBottom: '15px'}}>{current_choice_5}</button> </div>
          ) : null}
        </div>
        {/* ---- */}
      </div>
    </div>
  );
}

export default WebApps;
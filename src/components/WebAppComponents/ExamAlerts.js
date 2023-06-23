import React, {useState} from 'react';
import styles from '../../styles.module.css';

// I used the WebApps structure I wrote as a base here; there's a lot of unnecessary code

function ExamAlerts() {

  // -----------------------------------------------------------------

  let questions;
  let choices;
  const [counter, setCounter] = useState(0);
  const [current_question, setQuestion] = useState('');
  const [question_cluster, showQuestion] = useState(false);
  const [next_button, shownNextButton] = useState(false);

  // load questions text file data
  fetch('/facts/facts.txt')
  .then((response) => response.text())
  .then(data => {
    questions = data.split('\n');
    questions.pop(); // since my arrays are delineated by newlines
    console.log(questions);
  })

  // load choices text file data
  fetch('/multiple-choice-explanation-template-quiz/choices.txt')
  .then((response) => response.text())
  .then(data => {
    choices = data.split('\n');
    choices.pop(); // since my arrays are delineated by newlines
  });

  function handleClick() {

    return showQuestion(true) 
    + shownNextButton(true)
    + setQuestion(questions[counter])
  }
  
  function nextQuestion() {

    return setQuestion(questions[counter]) 
    + setCounter(counter + 1) 
    + console.log(counter)
  }


  //checkpoint
  return (
    <div className="banner_box banner">

      {/* --------------------------------------------------------------- */}

      <h2 style={{marginBottom: '5px'}}>Exam Alerts and Notes</h2>
      <div className="container">
        {/* ---- */}
        <div className='item' style={{backgroundImage: 'none', backgroundColor: '#333333'}}>
          <div className={`${styles.button} ${styles.button}`}>
            {/* begin test button; null if next button true and content if false */}
            {next_button ? null : (<button style={{marginBottom: '10px', marginTop: '5px'}} onClick={handleClick}>Begin Section</button>)}
            {/* next button */}
            {next_button ? (<button style={{marginBottom: '-10px', marginTop: '5px'}} onClick ={nextQuestion}>Next Question</button>) : null}
          </div>
          {question_cluster ? (<h2 style={{textAlign: 'left', marginLeft: '10px'}}><br />{current_question}</h2>) : null}
          
          <div style={{marginBottom: '15px'}}> </div>
        </div>
        {/* ---- */}
      </div>

      {/* --------------------------------------------------------------- */}

    </div>
  );
}

export default ExamAlerts;
import React, {useState} from 'react';
import styles from '../../styles.module.css';

// I used the WebApps structure I wrote as a base here; there's a lot of unnecessary code

function ExamAlertsCoreTwo() {
  
  // -----------------------------------------------------------------
  // comment line strictly to rebuild aws connection
  let questions;
  let choices;

  const [total_questions_amount, setAmount] = useState();
  const [counter_for_display, setDisplayCounter] = useState(0);

  const [counter, setCounter] = useState(0);
  const [current_question, setQuestion] = useState('');
  const [question_cluster, showQuestion] = useState(false);
  const [next_button, shownNextButton] = useState(false);

  // load questions text file data
  fetch('/facts-core-two/facts.txt')
  .then((response) => response.text())
  .then(data => {
    questions = data.split('\n');
    setAmount(questions.length);
    questions.pop(); // since my arrays are delineated by newlines
  })

  function handleClick() {
    return showQuestion(true) 
    + shownNextButton(true)
    + setQuestion(questions[counter])
    + setCounter(counter + 1);
  }
  
  function nextQuestion() {
    return setDisplayCounter(counter_for_display + 1)
    + setQuestion(questions[counter]) 
    + setCounter(counter + 1);
  }

  //checkpoint
  return (
    <div className="banner_box banner">

      {/* --------------------------------------------------------------- */}

      <h2 style={{color: 'magenta', marginBottom: '5px'}}>Exam Alerts and Notes (220-1102)</h2>
      <div className="container">
        {/* ---- */}
        <div className='item' style={{backgroundImage: 'none', backgroundColor: '#333333'}}>
          <div className={`${styles.button} ${styles.button}`}>
            {/* begin test button; null if next button true and content if false */}
            {next_button ? null : (<button style={{marginBottom: '10px', marginTop: '5px'}} onClick={handleClick}>Begin Section</button>)}
            {/* next button */}
            {next_button ? (<button style={{marginBottom: '-10px', marginTop: '5px'}} onClick ={nextQuestion}>Next Question</button>) : null}
          </div>
          {question_cluster ? (<h2 style={{color: 'gray', textAlign: 'center', marginLeft: '10px', marginBottom: '-40px'}}><br />({counter_for_display + 1} of {total_questions_amount - 1})</h2>) : null}
          {question_cluster ? (<h2 style={{textAlign: 'left', marginLeft: '10px'}}><br />{current_question}</h2>) : null}
          
          <div style={{marginBottom: '15px'}}> </div>
        </div>
        {/* ---- */}
      </div>

      {/* --------------------------------------------------------------- */}

    </div>
  );
}

export default ExamAlertsCoreTwo;
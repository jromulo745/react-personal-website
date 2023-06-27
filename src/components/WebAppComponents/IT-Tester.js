import React, {useState} from 'react';
import styles from '../../styles.module.css';

function Tester() {

  // -----------------------------------------------------------------

  let questions;
  let choices;
  const [counter, setCounter] = useState(0);
  const [current_question, setQuestion] = useState('');
  const [question_cluster, showQuestion] = useState(false);
  const [next_button, shownNextButton] = useState(false);
  const [correct_answer, setAnswer] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [disabledSubmit, setSubmitDisabled] = useState(false);
  const [disabledInput, setDisabledInput] = useState(false);

  // load questions text file data
  fetch('/fill-in-tester/questions.txt')
  .then((response) => response.text())
  .then(data => {
    questions = data.split('\n');
    questions.pop(); // since my arrays are delineated by newlines
  })

  // load choices text file data
  fetch('/fill-in-tester/answers.txt')
  .then((response) => response.text())
  .then(data => {
    choices = data.split('\n');
    choices.pop(); // since my arrays are delineated by newlines
  });

  function handleClick() {
    return showQuestion(true) 
    + shownNextButton(true)
    + setQuestion(questions[counter])
    + setAnswer(choices[counter])
    + setDisabled(true)
    + setDisabled(false)
    + setSubmitDisabled(false);
  }

  function nextQuestion() {
    document.getElementById("answer").value = '';
    return + setQuestion(questions[counter])
    + setAnswer(choices[counter])
    + setDisabled(true)
    + setDisabledInput(false)
    + setSubmitDisabled(false);
  }

  // -----------------------------------------------------------------

   function validate(e) {
    e.preventDefault();

    const answer = document.getElementById("answer").value;
    
    if (answer === correct_answer) {
      alert('Correct!');
    }
    else {
      alert('Wrong: The correct answer is this: ' + choices[counter]);
    }
    
    console.log(choices[counter]);
    return setCounter(counter + 1)
    + setDisabled(false)
    + setDisabledInput(true)
    + setSubmitDisabled(true)
  }

  // -----------------------------------------------------------------

  //checkpoint
  return (
    <div className="banner_box banner">

      {/* --------------------------------------------------------------- */}

      <h2 style={{marginTop: '5px', marginBottom: '-2px'}}>IT Tester (Fill-In)</h2>
      <div className="container">
        {/* ---- */}
        <div className='item' style={{backgroundImage: 'none', backgroundColor: '#333333'}}>
          <div className={`${styles.button} ${styles.button}`}>
            {/* begin test button; null if next button true and content if false */}
            {next_button ? null : (<button style={{marginBottom: '10px', marginTop: '5px'}} onClick={handleClick}>Begin Test</button>)}
            {/* next button */}
            {next_button ? (<button style={{marginBottom: '-10px', marginTop: '5px'}} onClick ={nextQuestion} disabled={disabled}>Next Question</button>) : null}
          </div>
          {question_cluster ? (<h2 style={{textAlign: 'left', marginLeft: '10px'}}><br />{current_question}</h2>) : null}
          {question_cluster ? ( <div style={{textAlign: 'left', marginLeft: '10px'}} className={`${styles.button} ${styles.button}`}>
            <form>
                <input style={{marginTop: '25px'}} disabled={disabledInput} type="text" name="answer" id="answer"></input>
                <button id={styles["noStyle"]} onClick={validate} disabled={disabledSubmit}>Submit</button>
              </form>
           </div>
          ) : null}
        </div>
        {/* ---- */}
      </div>

      {/* --------------------------------------------------------------- */}

    </div>
  );
}

export default Tester;
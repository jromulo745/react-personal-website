import React, {useEffect, useState} from 'react';
import styles from '../../styles.module.css';


function Tester() {

  // -----------------------------------------------------------------

  let questions = [];
  let choices = [];

  let final_questions = [];
  let final_choices = [];
  let used_numbers = [];

  const [fquestions, setFQuestions] = useState([]);
  const [fchoices, setFChoices] = useState([]);

  const [total_questions_amount, setAmount] = useState();
  const [counter_for_display, setDisplayCounter] = useState(0);

  const [counter, setCounter] = useState(0);
  const [current_question, setQuestion] = useState('');
  const [question_cluster, showQuestion] = useState(false);
  const [next_button, showNextButton] = useState(false);
  const [correct_answer, setAnswer] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [disabledSubmit, setSubmitDisabled] = useState(false);
  const [disabledInput, setDisabledInput] = useState(false);

  async function getCombined() {
    //load combined json data
    const res = await fetch('fill-in-tester/combined.json');
    const resJSON = await res.json();
    for (let i in resJSON) {
      console.log(i, resJSON[i]);
      questions.push(i);
      choices.push(resJSON[i]);
    }
    for (let i_1 = 0; i_1 < questions.length; i_1++) {
      let random_number = getRandomIntInclusive(0, questions.length - 1);
      while (used_numbers.includes(random_number) === true) {
        random_number = getRandomIntInclusive(0, questions.length - 1);
      }
      used_numbers.push(random_number);
      final_questions.push(questions[random_number]);
      final_choices.push(choices[random_number]);
    }
    setFChoices(final_choices);
    setFQuestions(final_questions);
    setAmount(final_questions.length);
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  function handleClick() {
  
    return showQuestion(true) 
    + showNextButton(true)
    + setQuestion(fquestions[counter])
    + setAnswer(fchoices[counter])
    + setDisabled(false)
    + setSubmitDisabled(false);
  }

  function nextQuestion() {
    document.getElementById("answer").value = '';
    document.getElementById("answer").style.backgroundColor = "#FFFFFF";
    return + setQuestion(fquestions[counter])
    + setAnswer(fchoices[counter])
    + setDisabled(true)
    + setDisabledInput(false)
    + setSubmitDisabled(false)
    + setDisplayCounter(counter_for_display + 1);
  }

  // -----------------------------------------------------------------

  function validate(e) {
    e.preventDefault();

    const answer = document.getElementById("answer").value;

    if (answer.toUpperCase() === correct_answer.toUpperCase()) {
      document.getElementById("answer").style.backgroundColor = "#078e2d";
      setTimeout(function() {
        alert('Correct!');
      }, 100);
    }
    else {
      document.getElementById("answer").style.backgroundColor = "#930707";
      setTimeout(function() {
        alert('Wrong: The correct answer is this: ' + fchoices[counter]);
      }, 100);
    }

    return setCounter(counter + 1)
    + setDisabled(false)
    + setDisabledInput(true)
    + setSubmitDisabled(true)
  }

  useEffect(() => {
    getCombined();
  }, []);

  // -----------------------------------------------------------------

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
          {question_cluster ? (<h2 style={{color: 'gray', textAlign: 'center', marginLeft: '10px', marginBottom: '-40px'}}><br />({counter_for_display + 1} of {total_questions_amount})</h2>) : null}
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
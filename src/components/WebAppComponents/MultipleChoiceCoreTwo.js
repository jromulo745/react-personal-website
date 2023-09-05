import React, { useState, useEffect } from 'react';
import styles from '../../styles.module.css';
import jsonData from './json-files/explanations.json';

function MultipleChoiceCoreTwo() {
  
  const hover_style = {
    cursor: 'pointer',
  };

  // -----------------------------------------------------------------

  let questions = [];
  let choices = [];
  let explanations = [];

  let final_question_boolean = false;

  const [total_questions_amount, setAmount] = useState();
  const [counter_for_display, setDisplayCounter] = useState(0);

  let final_questions = [];
  let final_choices = [];
  let final_explanations = [];
  let used_numbers = [];

  const [counter, setCounter] = useState(0);
  const [current_question, setQuestion] = useState('');
  const [question_cluster, showQuestion] = useState(false);
  const [next_button, shownNextButton] = useState(false);
  const [current_choice_1, setChoice1] = useState('');
  const [current_choice_2, setChoice2] = useState('');
  const [current_choice_3, setChoice3] = useState('');
  const [current_choice_4, setChoice4] = useState('');
  const [current_choice_5, setChoice5] = useState('');
  const [buttonColor1, setButtonColor1] = useState('04AA6D');
  const [buttonColor2, setButtonColor2] = useState('04AA6D');
  const [buttonColor3, setButtonColor3] = useState('04AA6D');
  const [buttonColor4, setButtonColor4] = useState('04AA6D');
  const [buttonColor5, setButtonColor5] = useState('04AA6D');
  const [correct_answer, setAnswer] = useState('');
  const [correct_button, setCorrectButton] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [next_button_disable, setNextButtonDisabled] = useState(false);

  const [fquestions, setFQuestions] = useState([]);
  const [fchoices, setFChoices] = useState([]);
  const [fexplanations, setFExplanations] = useState([]);


  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  async function getCombined() {
    //load questions data
    const res = await fetch('/multiple-choice-core-two/multiple-combined.json')
    const resJSON = await res.json();

    for (let i in resJSON) {
      questions.push(i);
      choices.push(resJSON[i]);
    }

    for (let i in jsonData) {
      explanations.push(i)
    }

    for (let i_1 = 0; i_1 < questions.length; i_1++) {
      let random_number = getRandomIntInclusive(0, questions.length - 1);
      while (used_numbers.includes(random_number) === true) {
        random_number = getRandomIntInclusive(0, questions.length - 1);
      }
      used_numbers.push(random_number);
      final_questions.push(questions[random_number]);
      final_choices.push(choices[random_number]);
      final_explanations.push(explanations[random_number]);
    }
    setFChoices(final_choices);
    setFQuestions(final_questions);
    setFExplanations(final_explanations);
    setAmount(final_choices.length);
  }

  function handleClick() {
    // let initial = fchoices[counter].toString().split(',');
    let initial = [];
    initial = fchoices[counter];

    let temp = [];
    let inner_used_numbers = [];
  
    for (let i = 0; i < initial.length; i++) {
      let inner_random_number = getRandomIntInclusive(0, initial.length - 1);
      while (inner_used_numbers.includes(inner_random_number) === true) {
        inner_random_number = getRandomIntInclusive(0, initial.length - 1);
      }
      inner_used_numbers.push(inner_random_number);
      temp.push(initial[inner_random_number]);
    }

    return showQuestion(true) 
    + shownNextButton(true)
    + setQuestion(fquestions[counter])
    + (temp[0][0] === '*' ? (setChoice1(temp[0].substring(1)), setAnswer(temp[0].substring(2)), setCorrectButton('1')) : setChoice1(temp[0]))
    + (temp[1][0] === '*' ? (setChoice2(temp[1].substring(1)), setAnswer(temp[1].substring(2)), setCorrectButton('2')) : setChoice2(temp[1]))
    + (temp[2][0] === '*' ? (setChoice3(temp[2].substring(1)), setAnswer(temp[2].substring(2)), setCorrectButton('3')) : setChoice3(temp[2]))
    + (temp[3][0] === '*' ? (setChoice4(temp[3].substring(1)), setAnswer(temp[3].substring(2)), setCorrectButton('4')) : setChoice4(temp[3]))
    + (temp[4][0] === '*' ? (setChoice5(temp[4].substring(1)), setAnswer(temp[4].substring(2)), setCorrectButton('5')) : setChoice5(temp[4]))
    + setCounter(counter + 1);
  }
  
  function nextQuestion() {
    if ((counter + 1) === total_questions_amount) {
      final_question_boolean = true;
    }

    let initial = [];
    initial = fchoices[counter];
    
    let temp = [];
    let inner_used_numbers = [];
  
    for (let i = 0; i < initial.length; i++) {
      let inner_random_number = getRandomIntInclusive(0, initial.length - 1);
      while (inner_used_numbers.includes(inner_random_number) === true) {
        inner_random_number = getRandomIntInclusive(0, initial.length - 1);
      }
      inner_used_numbers.push(inner_random_number);
      temp.push(initial[inner_random_number]);
    }

    return setQuestion(fquestions[counter]) 
    + setCounter(counter + 1) 
    + setDisplayCounter(counter_for_display + 1)
    + (temp[0][0] === '*' ? (setChoice1(temp[0].substring(1)), setAnswer(temp[0].substring(2)), setCorrectButton('1')) : setChoice1(temp[0]))
    + (temp[1][0] === '*' ? (setChoice2(temp[1].substring(1)), setAnswer(temp[1].substring(2)), setCorrectButton('2')) : setChoice2(temp[1]))
    + (temp[2][0] === '*' ? (setChoice3(temp[2].substring(1)), setAnswer(temp[2].substring(2)), setCorrectButton('3')) : setChoice3(temp[2]))
    + (temp[3][0] === '*' ? (setChoice4(temp[3].substring(1)), setAnswer(temp[3].substring(2)), setCorrectButton('4')) : setChoice4(temp[3]))
    + (temp[4][0] === '*' ? (setChoice5(temp[4].substring(1)), setAnswer(temp[4].substring(2)), setCorrectButton('5')) : setChoice5(temp[4]))
    + setButtonColor1('#04AA6D')
    + setButtonColor2('#04AA6D')
    + setButtonColor3('#04AA6D')
    + setButtonColor4('#04AA6D')
    + setButtonColor5('#04AA6D')
    + setDisabled(false)
    + setNextButtonDisabled(final_question_boolean);
  }

  function alertUser() {
    alert(fexplanations[counter - 1]);
  }

  function checkAnswer(choice, selected_button) {
    return setDisabled(true)
    + (setButtonColor1('#AAAAAA'), setButtonColor2('#AAAAAA'), setButtonColor3('#AAAAAA'), setButtonColor4('#AAAAAA'), setButtonColor5('#AAAAAA'))
    + (correct_button === '1' ? setButtonColor1('#04AA6D') : null)
    + (correct_button === '2' ? setButtonColor2('#04AA6D') : null)
    + (correct_button === '3' ? setButtonColor3('#04AA6D') : null)
    + (correct_button === '4' ? setButtonColor4('#04AA6D') : null)
    + (correct_button === '5' ? setButtonColor5('#04AA6D') : null)

    + ((selected_button !== correct_button) && (selected_button === '1') ? setButtonColor1('#FF0000'): null)
    + ((selected_button !== correct_button) && (selected_button === '2') ? setButtonColor2('#FF0000'): null)
    + ((selected_button !== correct_button) && (selected_button === '3') ? setButtonColor3('#FF0000'): null)
    + ((selected_button !== correct_button) && (selected_button === '4') ? setButtonColor4('#FF0000'): null)
    + ((selected_button !== correct_button) && (selected_button === '5') ? setButtonColor5('#FF0000'): null)
  }

  useEffect(() => {
    getCombined();
  }, []);

  //checkpoint
  return (
    <div className="banner_box banner">
      <h2 style={{marginTop: '5px', marginBottom: '-2px'}}>IT Tester (220-1102)</h2>
      <div className="container">
        {/* ---- */}
        <div className='item' style={{backgroundImage: 'none', backgroundColor: '#333333'}}>
          <div className={`${styles.button} ${styles.button}`}>
            {/* begin test button; null if next button true and content if false */}
            {next_button ? null : (<button style={{marginBottom: '10px', marginTop: '5px'}} onClick={handleClick}>Begin Test</button>)}
            {/* next button */}
            {next_button ? (<button style={{marginBottom: '-10px', marginTop: '5px'}} disabled={next_button_disable} onClick ={nextQuestion}>Next Question</button>) : null}
            {next_button ? (<button style={{marginLeft: '15px', marginBottom: '-10px', marginTop: '5px'}} disabled={next_button_disable} onClick ={alertUser}>Show explanation</button>) : null}
          </div>
          {question_cluster ? (<h2 style={{color: 'gray', textAlign: 'center', marginLeft: '10px', marginBottom: '-40px'}}><br />({counter_for_display + 1} of {total_questions_amount})</h2>) : null}
          {question_cluster ? (<h2 style={{textAlign: 'left', marginLeft: '10px'}}><br />{current_question}</h2>) : null}
          {question_cluster ? ( <div style={{textAlign: 'left', marginLeft: '10px'}} className={`${styles.button} ${styles.button}`}>
            <br />
            <button style={{backgroundColor: buttonColor1}} disabled={disabled} onClick={() => {checkAnswer(current_choice_1, '1');}}>{current_choice_1}</button>
            <br />
            <br />
            <button style={{backgroundColor: buttonColor2}} disabled={disabled} onClick={() => {checkAnswer(current_choice_2, '2')}}>{current_choice_2}</button>
            <br />
            <br />
            <button style={{backgroundColor: buttonColor3}} disabled={disabled} onClick={() => {checkAnswer(current_choice_3, '3')}}>{current_choice_3}</button>
            <br />
            <br />
            <button style={{backgroundColor: buttonColor4}} disabled={disabled} onClick={() => {checkAnswer(current_choice_4, '4')}}>{current_choice_4}</button>
            <br />
            <br />
            <button style={{backgroundColor: buttonColor5, marginBottom: '15px'}} disabled={disabled} onClick={() => {checkAnswer(current_choice_5, '5')}}>{current_choice_5}</button> </div>
          ) : null}
        </div>
        {/* ---- */}
      </div>
    </div>
  );
}

export default MultipleChoiceCoreTwo;
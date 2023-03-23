
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { quizcontext } from './App';

function Quiz() {

  const [count, setCount] = useState(0);
  const [match, setmatch] = useState('')
  const {score , setscore} = useContext(quizcontext)
  const navigate = useNavigate()

  const questions = [

    {
      question: "What do you call a programmer who doesn't know JavaScript?",
      a: "Script Kiddie",
      b: "A jQuery ninja",
      c: "An HTML hero",
      d: "A confused coder",
      answer: "d",
    },
    {
      question: "What's a programmer's favorite place to relax?",
      a: "The beach",
      b: "The mountains",
      c: "The JavaScript console",
      d: "The coding dojo",
      answer: "c",
    },
    {
      question:
        "What's the difference between a JavaScript developer and a magician?",
      a: "One creates illusions, the other creates animations",
      b: "One can change reality, the other can change HTML",
      c: "One uses sleight of hand, the other uses event listeners",
      d: "There is no difference, they're both wizards",
      answer: "b",
    },
    {
      question:
        "What does a JavaScript developer say when they're stuck in an infinite loop?",
      a: "'Stop the world, I want to get off!'",
      b: "'I need a break, let's go get some coffee.'",
      c: "'I guess I'll just keep going until my computer explodes.'",
      d: "'I'll just hit refresh, that should fix it.'",
      answer: "a",
    },
    {
      question: "What's a JavaScript developer's favorite fruit?",
      a: "Apples",
      b: "Bananas",
      c: "Oranges",
      d: "NaNs (Not a Number)",
      answer: "d",
    },
    {
      question: "How many lines of code does it take to screw in a lightbulb?",
      a: "0, you can use jQuery",
      b: "1, but it's minified",
      c: "10, but 9 of them are comments",
      d: "100, because the lightbulb keeps changing requirements",
      answer: "b",
    },
    {
      question: "What do you call a group of programmers?",
      a: "A team",
      b: "A swarm",
      c: "A function",
      d: "An array",
      answer: "b"
    },
    {
      question: "What's a JavaScript developer's favorite type of sandwich?",
      a: "The sandwich() function",
      b: "The Array BLT",
      c: "The Object-oriented sandwich",
      d: "The Callback Club",
      answer: "a"
    },
    {
      question: "What's a JavaScript developer's favorite type of coffee?",
      a: "Java",
      b: "Cappuccino",
      c: "Mocha",
      d: "Decaf (just kidding, they don't drink decaf)",
      answer: "a"
    },
    {
      question: "Why do programmers prefer dark mode?",
      a: "It's easier on the eyes",
      b: "It makes them look cool",
      c: "It's a coding tradition",
      d: "It's the only way to write secure code",
      answer: "a"
    }

  ];
  function handlechange(e) {
    setmatch(e.target.value)
  }
  console.log(match)
  function scorehandler() {
    let correctanswer = questions[count].answer
    if (match === correctanswer) {
      setscore(score +1)

    }
  }
    console.log(score)
  function counthandler () {
    if(count <9){
      setCount(count +1)
    }
    else{
      navigate("/Score")
      console.log("sanjay")
    }
  }

    return (
      <div className='questionDivParent'>
        <div className='questionDiv'>
          <h1>{questions[count].question}</h1>

          <ul className='questions-options'>
            <li>
              <input type="radio" name='answer' id='answer1' onChange={handlechange} value="a"></input>
              <label htmlFor="answer1" id='option1'> {questions[count].a}  </label>
            </li>

            <li>
              <input type="radio" name='answer' id='answer2' onChange={handlechange} value="b"></input>
              <label htmlFor="answer2" id='option1'> {questions[count].b}  </label>
            </li>

            <li>
              <input type="radio" name='answer' id='answer3' onChange={handlechange} value="c"></input>
              <label htmlFor="answer3" id='option1'> {questions[count].c}  </label>
            </li>

            <li>
              <input type="radio" name='answer' id='answer4' onChange={handlechange} value="d"></input>
              <label htmlFor="answer4" id='option1'> {questions[count].d}  </label>
            </li>
          </ul>


          <button className='nextBtn' onClick={() => { counthandler(); scorehandler() }}>Next</button>
        </div>
      </div>
    )
  }




export default Quiz
import React, { useState } from 'react'
import {QuizData} from '../Data/QuizData'
import QuizResult from './QuizResult';
const Quiz = () => {
    const [currentQuestions,setCurrentQuestion] = useState(0);
    const [score,setScore] = useState (0);
    const [clickedOption,setClickedOption] = useState(0);
    const [showResult,setShowResult] = useState(false)
    const changeQuestion = () => {
      updateScore();
      if(currentQuestions<QuizData.length-1){
        setCurrentQuestion(currentQuestions+1)
        setClickedOption(0);
      }else{
          setShowResult(true)

      }
     
    }
    const updateScore = () =>{
      if(clickedOption===QuizData[currentQuestions].answer)
      setScore(score+1);
    }
    const resetAll = () => {
      setShowResult(false)
      setCurrentQuestion(0)
      setClickedOption(0)
      setScore(0)
    }
  return (
    <div>
      <p className='heading-txt'>TODO APP</p>
      <div className='container'>
        {showResult ? (
          <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/> 
        ):(
          <>
        <div className='question'>
            <span id='question-number'>{currentQuestions+1}</span>
            <span id='question-txt'>{QuizData[currentQuestions].question}</span>
            </div>
            {QuizData[currentQuestions].options.map((option,i)=>{
            return(
                <button className={`option-btn ${
                  clickedOption == i+1?"checked":null
                }`} 
                key={i} 
                onClick={()=> setClickedOption(i+1) }>
                  
                    {option}
                </button>
            )
        })}
         <input type='button' value="Next" id='next-button'  onClick={()=> changeQuestion()}/>
         </>
        )}
        </div>
        
    </div>
  )
}

export default Quiz

import React from 'react'

const QuizResult = ({score,totalScore}) => {
  return (
    <div>
     Your Score: {score} <br/>
     Total Score: {totalScore}
    </div>
  )
}

export default QuizResult

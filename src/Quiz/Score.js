import React, { useContext } from 'react'
import { quizcontext } from './App'
function Score() {
    const {score} = useContext(quizcontext)
  return (
    <div>
        <h1>Your score is{score}</h1>
    </div>
  )
}

export default Score
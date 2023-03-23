import React, { createContext, useState } from 'react'
import Header from './Header'
import Register from './Registr'
import Login from './Login'
import About from './About'
import Quiz from './Quiz'
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import "./Quiz.css"
import Score from './Score'
export const quizcontext = createContext(null)


function App() {
  const [score, setscore] = useState(0)
  return (
    <>
    <quizcontext.Provider value= {{score, setscore}}>
   <BrowserRouter>
   <Header/>
    <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Quiz' element={<Quiz/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Score' element={<Score/>}></Route>
    </Routes>
   </BrowserRouter>
   </quizcontext.Provider>
   </>
  )
}

export default App
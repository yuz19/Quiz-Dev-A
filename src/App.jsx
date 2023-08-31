import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import Quiz from './components/Quiz'
import './App.css'
import {Route,Routes} from "react-router-dom"

function App() {
   

  return (
    <>
       <NavBar/>
       <Routes>
         <Route path="/" element={<Quiz/>}/>
       </Routes>
    </>
  )
}

export default App

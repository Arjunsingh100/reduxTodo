import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import UpdateText from './components/UpdateText';
import Todo from './components/todo';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Todo />} />
      <Route path='/updateText/:id/:index' element={<UpdateText />}/>
    </Routes>
    </>
  )
}

export default App

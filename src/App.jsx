import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Home from './components/Home/Home'

function App() {
 

  return (
    <div className="App">
      <Header/>
    <Outlet/>
     
    </div>
  )
}

export default App

import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import Navigation from './components/client/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <h1>App</h1>
      {/* {false? <Register setUserData={setUserData}/>: null}
      {false? <Login/>: null} */}
    </>
  )
}

export default App

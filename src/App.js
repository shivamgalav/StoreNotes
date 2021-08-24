import './App.css';
// import Card from './components/Card';
import Form from './components/Form';
import React, { useState } from 'react'
import Navbar from './components/Navbar';

function App() {
  const [darkMode, setdarkMode] = useState(false);
  const changeMode = ()=>{
    if(darkMode === false){
      setdarkMode(true);
    }
    else{
      setdarkMode(false);
    }
    console.log(darkMode)
  }
  return (
    <>
    <Navbar setdark = {changeMode}/>
    <Form/>
    </>
  );
}

export default App;

import './App.css';
// import Card from './components/Card';
import Form from './components/Form';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
let style = {
  color : "black",
  backgroundColor: "white"
}
function App() {
  
  const [darkMode, setdarkMode] = useState(false);
  const changeMode = ()=>{
    if(darkMode === false){
      setdarkMode(true);
      style = {
        color : "white",
        backgroundColor: "black"
      }
      document.body.style.backgroundColor = "#313131"
    }
    else{
      setdarkMode(false);
      style = {
        color : "black",
        backgroundColor: "white"
      }
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
    <Navbar setdark = {changeMode} mode = {darkMode} style = {style}/>
    <Form mode = {darkMode} style = {style}/>
    </>
  );
}

export default App;

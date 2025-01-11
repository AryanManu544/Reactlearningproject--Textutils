import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
//import About from './components/About' <About/>;
import { useState } from 'react';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [mode,setmode] = useState("light")
  const togglemode =() => {
    if (mode === "light"){
      setmode('dark')
      document.body.style.backgroundColor = "black"
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
  <Navbar title = "TextUtils" aboutText = "About TextUtils" mode= {mode} togglemode= {togglemode}/>
  <div className='container my-3'>
  <Textform heading = "Enter text to analyze below" mode= {mode}/>
  <Analytics/>
  </div>
    </>
  );
}

export default App;

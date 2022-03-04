//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textconvert from './components/Textconvert';
import Alert from './components/Alert';
import { useState } from 'react';
//import About from './components/About';
//import { Switch } from 'react-router-dom' ;
//import { BrowserRouter, Routes, Route } from "react-router-dom";

                             
function App() {
  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState("this is alert")
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode = () =>{
    if (mode==='light') {
       setMode('dark');
       document.body.style.backgroundColor='#13406d';  
       showAlert("Dark mode has been enabled","success")    
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'; 
      showAlert("Light mode has been enabled","success") 
    }
  }
  
  return (
<>
 
      <Navbar title="My_React_App" mode={mode} alert={alert} toggleMode={toggleMode}/>
      <Alert alert={alert} />
    <div className='container my-3'>
    <Textconvert showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
    </div>
       
      
    
</>
  );
}

export default App;
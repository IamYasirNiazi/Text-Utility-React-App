import { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message)=>{
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
    setAlert(null);
    }, 1500);
  }

  // const removecls = ()=>{
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-primary');
  // }

  const darkModeFunc = ()=>{
    
    // const darkModeFunc = (cls)=>{
    // // removecls();
    // console.log(cls);
    // document.body.classList.add('bg-'+ cls)

    // document.title = 'TextUtils | Dark Mode';
    // setInterval(() => {
    // document.title = 'TextUtils | Dark Mode';
    // }, 2000);

    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#242424';
      document.body.style.color = 'white';
      showAlert('success', 'Dark Mode is enabled');
    }
    else if(mode==='success'){
      setMode('dark');
      document.body.style.backgroundColor = '#242424';
      document.body.style.color = 'white';
      showAlert('success', 'Dark Mode is enabled');
    }
    else if(mode==='danger'){
      setMode('dark');
      document.body.style.backgroundColor = '#242424';
      document.body.style.color = 'white';
      showAlert('success', 'Dark Mode is enabled');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('success', 'Light Mode is enabled');
    
      // document.title = 'TextUtils | Light Mode';
      // setInterval(() => {
      // document.title = 'TextUtils | Light Mode';
      // }, 1000);
    }
  }

  const greenBtnFunc = ()=>{
  
   if(mode==='light'){
    setMode('success');
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'white';
    showAlert('success', 'Green Mode is enabled');
   }
  //  else if(mode==='dark'){
  //   setMode('success');
  //   document.body.style.backgroundColor = 'green';
  //   document.body.style.color = 'white';
  //  }
   else if(mode==='danger'){
    setMode('success');
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'white';
    showAlert('success', 'Green Mode is enabled');
   }
  //  else{
  //   setMode('light');
  //   document.body.style.backgroundColor = 'white';
  //  }

  }

  const redBtnFunc = ()=>{
    
    if(mode==='light'){
      setMode('danger');
      document.body.style.backgroundColor = 'red';
      document.body.style.color = 'white';
      showAlert('success', 'Red Mode is enabled');
     }
    //  else if(mode==='dark'){
    //   setMode('danger');
    //   document.body.style.backgroundColor = 'red';
    // document.body.style.color = 'white';
    //  }
     else if(mode==='success'){
      setMode('danger');
      document.body.style.backgroundColor = 'red';
      document.body.style.color = 'white';
      showAlert('success', 'Red Mode is enabled');
     }
    //  else{
    //   setMode('light');
    //   document.body.style.backgroundColor = 'white';
    //  }
   }


  return (
    <>
    {/* <Router> */}

    <Navbar logo="TextUtils App" about="About Us" mode={mode} green={greenBtnFunc} red={redBtnFunc} dark={darkModeFunc} />
    <Alerts alert={alert} />

    {/* <Routes> */}
          {/* <Route path="/" element={ <TextForm heading="Enter Your Text" mode={mode} showAlert={showAlert} /> } /> */}
          {/* <Route path="/about" element={ <About mode={mode} /> } /> */}
    {/* </Routes> */}
    
    <TextForm heading="Enter Your Text" mode={mode} showAlert={showAlert} />
    {/* <About mode={mode} /> */}

    {/* </Router> */}
    </>
  );
}

export default App;

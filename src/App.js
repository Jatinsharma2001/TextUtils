import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#125170';
      showAlert("Dark mode has been enabled", "success");
      setTimeout(() => {
        document.title = "Premium Text-Utils.";
      }, 2000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  const redToggle = () => {
    if (mode === 'light') {
      setMode('red');
      document.body.style.backgroundColor = 'red';
      showAlert("Red mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
    <Router>
      <Navbar
        title="textUtils"
        home="Home"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
        redToggle={redToggle}
      />
      <div className="container my-3">
        <Alert alert={alert} />
        <Routes>
          <Route path="/Home" element={<Textform />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      </Router>
      </>
    
  );
}

export default App;

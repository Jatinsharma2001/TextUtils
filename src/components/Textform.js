import React, { useState } from 'react';


export function Textform(props) {
  const [text, setText] = useState("");
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

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleUpClick = () => {
    setText(text.toUpperCase());
    showAlert("Converted To Uppercase", "success");
  }

  const handleLoClick = () => {
    setText(text.toLowerCase());
    showAlert("Converted To Lowercase", "success");
  }

  const handleClearClick = () => {
    setText("");
    showAlert("Text Cleared", "success");
  }

  const numberOfSentences = (text) => {
    return text.split(/[."!?" ]+/).filter(Boolean).length;
  };

  const handleCopyText = () => {
    let textArea = document.getElementById("mybox");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    showAlert("Copied To Clipboard", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ');
    setText(newText);
    showAlert("Extra Space Removed", "success");
  };

 
  const changeColor = () => {
    if (props.mode === 'red' || props.mode === 'dark') {
      return { backgroundColor: 'black', color: 'white' };
    } else {
      return { backgroundColor: 'white', color: 'black' };
    }
  };
  return (
    <>
     {alert && (
      <div className={`alert alert-${alert.type}`} role="alert">
        {alert.msg}
      </div>
    )}
      <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.label}</h1>
        <label htmlFor="mybox" className="form-label"  ></label>
        <textarea
          className="form-control"
          placeholder="Enter your Text"
          value={text}
          onChange={handleOnChange}
          
          id="mybox"
          rows="8"
        ></textarea>
      </div>

      <button id="myButton1" className="btn btn-outline-success mx-3"  style={changeColor()}  onClick={handleUpClick}>
        Convert to Uppercase
      </button>

      <button id="myButton2" className="btn btn-outline-success"  style={changeColor()} onClick={handleLoClick}>
        Convert to Lowercase
      </button>

      <button id="myButton3" className="btn btn-outline-success mx-3"  style={changeColor()} onClick={handleClearClick}>
        Clear Text
      </button>

      <button id="myButton4" className="btn btn-outline-success mx-3"  style={changeColor()} onClick={handleCopyText}>
        Copy Text
      </button>

      <button id="myButton5" className="btn btn-outline-success mx-3"  style={changeColor()} onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your Text Summary!</h1>
        <p>You have {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read this Text</p>
        <p>You have {numberOfSentences(text)} sentences</p>
        
      </div>
    </>
  );
}

export default Textform;




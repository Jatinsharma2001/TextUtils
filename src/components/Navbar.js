import React from 'react';
import About from './About';
import Textform from './Textform';
import { Link } from 'react-router-dom'; 

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
        <Link to="/Home" className="textUtils">Home</Link>
        </li>
        <li>
          <Link to="/About" className="textUtils">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

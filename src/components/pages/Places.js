import React from 'react'
import '../../App.css';
import Sidebar from '../Sidebar.js'
import Navbar from '../Navbar.js';
function Places() {
    return (
  <div className="player-wrapper">
    <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
    <h1>Restraunt List here:</h1>
  </div>
  
  
    );
  }
export default Places
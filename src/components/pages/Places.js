import React from 'react'
import Sidebar from '../Sidebar.js'
import Navbar from '../Navbar.js';
import '../../App.css';
import Footer from '../Footer';

function Places() {
    return (
  <div className="player-wrapper">
    <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
    <h1>Restraunt List here:</h1>
    <Footer />
  </div>
  
  
    );
  }
export default Places
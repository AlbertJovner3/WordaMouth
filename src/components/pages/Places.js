import React, {useState} from 'react'
import Sidebar from '../Sidebar.js'
import Navbar from '../Navbar.js';
import '../../App.css';
import Footer from '../Footer';

const Places= () => {
  const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
      setIsOpen(!isOpen)
    }
    
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
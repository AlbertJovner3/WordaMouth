import React, {useState} from 'react'
import Sidebar from './components/Sidebar.js'
import Navbar from './components/Navbar.js';
import '../../App.css';
import Cards from './components/Cards';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
      setIsOpen(!isOpen)
    }

    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
      <Cards />
      <Footer />
      </>
    );
};

export default Home;
 
import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar/Sidebar.js'
import Navbar from '../Components/Navbar/Navbar.js';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

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
 
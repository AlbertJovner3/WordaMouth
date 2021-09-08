import React, {useState} from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import PlacesContent from '../components/Places/PlacesContent';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';


const Places = () => {
    const [isOpen, setIsOpen] = useState(false)
      
    const toggle = () => {
      setIsOpen(!isOpen)
    };
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar  toggle={toggle}/>
        <HeroSection/>
        <PlacesContent />
        <Footer />
      </>
    )
}

export default Places;
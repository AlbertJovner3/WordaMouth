import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/Videos/Background.mp4' autoPlay loop muted />
      <h1>Word 'a Mouth</h1>
      <p>Local Cafes, Bars + Restaurants</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Restrunt List
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;

import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Buttontwo } from './Buttontwo';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video.mp4' autoPlay loop muted />
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
        <Buttontwo
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          ? <i className='far fa-play-circle' />
        </Buttontwo>
      </div>
    </div>
  );
}

export default HeroSection;

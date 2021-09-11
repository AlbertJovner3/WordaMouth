import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/coffee.jpg'
              text='SCP-005 poses no immediate risk in any direct sense. Even so!'
              label='Safe'
              path='/places'
            />
            <CardItem
              src='images/hamburger.jpg'
              text='SCP-002 is to remain connected to a suitable power supply at all times.'
              label='Euclid'
              path='/places'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/korean.jpg'
              text='When handling items SCP-004-2 through SCP-004-13, proper procedure is vital.'
              label='Euclid'
              path='/places'
            />
            <CardItem
              src='images/pasta.jpg'
              text='Whereas the nature of SCP-006 does not warrant any extensive containment.'
              label='Safe'
              path='/places'
            />
            <CardItem
              src='images/taco.jpg'
              text='SCP-003 is to be maintained at a constant temperature of no less than 35°C'
              label='Euclid'
              path='/places'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

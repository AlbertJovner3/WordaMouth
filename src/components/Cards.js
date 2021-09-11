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
              text='Find the best local cafes hidden around the corner'
              label='Cafes'
              path='/places'
            />
            <CardItem
              src='images/hamburger.jpg'
              text='Food that just makes you feel good that is hard to find'
              label='Comfort'
              path='/places'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/korean.jpg'
              text='Korean cuisine in your local area'
              label='Korean'
              path='/places'
            />
            <CardItem
              src='images/pasta.jpg'
              text='Some fantastic Italian near you'
              label='Italian'
              path='/places'
            />
            <CardItem
              src='images/taco.jpg'
              text='Great mexican food guaranteed to fill you up'
              label='Mexican'
              path='/places'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

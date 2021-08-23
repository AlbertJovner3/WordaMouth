import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/pasta.jpg'
              text='Best local italian cuisine'
              label='Italian'
              path='/places'
            />
            <CardItem
              src='images/coffee.jpg'
              text='Great local cafes with some of the best hot drinks and food'
              label='Cafes'
              path='/places'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/korean.jpg'
              text='Try something different with local Korean cuisine'
              label='Korean'
              path='/places'
            />
            <CardItem
              src='images/hamburger.jpg'
              text='All the comfort foods made in local restrunts and bars'
              label='Comfort'
              path='/places'
            />
            <CardItem
              src='images/taco.jpg'
              text='Underated Mexican cuisine in the local area'
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

import React from 'react'

import { 
    ReviewH1, 
    ReviewH2, 
    ReviewP, 
    ReviewsBox, 
    ReviewsCard, 
    ReviewsIcon, 
    ReviewsWrapper 
} from './ReviewsElement';

const Reviews = () => {
    return (
        <ReviewsBox>
            <ReviewH1>Reviews</ReviewH1>
            <ReviewsWrapper>
                <ReviewsCard>
                    <ReviewsIcon src='images/pasta.jpg' />
                    <ReviewH2>hello hello</ReviewH2>
                    <ReviewP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, delectus!</ReviewP>
                </ReviewsCard>
                <ReviewsCard>
                    <ReviewsIcon src='images/coffee.jpg' />
                    <ReviewH2>Hi hello</ReviewH2>
                    <ReviewP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, delectus!</ReviewP>
                </ReviewsCard>
                <ReviewsCard>
                    <ReviewsIcon src='images/taco.jpg' />
                    <ReviewH2>hello How are you</ReviewH2>
                    <ReviewP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, delectus!</ReviewP>
                </ReviewsCard>
                <ReviewsCard>
                    <ReviewsIcon src='images/korean.jpg' />
                    <ReviewH2>hello How are you</ReviewH2>
                    <ReviewP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, delectus!</ReviewP>
                </ReviewsCard>
                <ReviewsCard>
                    <ReviewsIcon src='images/hamburger.jpg' />
                    <ReviewH2>Comfort </ReviewH2>
                    <ReviewP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, delectus!</ReviewP>
                </ReviewsCard>
            </ReviewsWrapper>
        </ReviewsBox>
    );
}

export default Reviews;

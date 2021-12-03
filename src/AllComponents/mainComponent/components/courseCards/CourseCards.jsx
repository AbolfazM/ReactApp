import React from 'react';
import Card1 from './card1/Card1';
import Card2 from './card2/Card2';
import Card3 from './card3/Card3';
import Card4 from './card4/Card4';
import Card5 from './card5/Card5';
import Card6 from './card6/Card6';
import CircleAnim from '../MouseAnim/CircleAnim';

const CourseCards = () => {
    return(
        <div>
            <div className="flex justify-evenly -space-x-20 mobile:flex-wrap mobile:content-center mobile:-space-x-0">
                <Card1 />
                <Card2 />
                <Card3 />
            </div>
            
            <CircleAnim />
            
            <div className="flex justify-evenly -space-x-20 mobile:flex-wrap mobile:content-center mobile:-space-x-0">
                <Card4 />
                <Card5 />
                <Card6 />
            </div>
        </div>
    );
}

export default CourseCards;
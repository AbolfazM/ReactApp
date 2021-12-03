import React from 'react';
import Text from './Text';
import Img from './img.png';

const Nav = () => {

    const SVG = {
        height: '600px',
        position: 'absolute',
        right: '0',
        top: '30px'
    }

    return(
        <div>
            <svg style={SVG} className="-right-12" viewBox="0 0 200 200">
                <path fill="rgba(37, 120, 200)" d="M44.3,-77C55.6,-70.3,61.5,-54.6,68.8,-40.3C76.1,-25.9,84.9,-13,85.6,0.4C86.3,13.8,78.9,27.5,71.2,41.3C63.5,55,55.6,68.8,43.7,76.2C31.8,83.7,15.9,84.8,-0.2,85.3C-16.4,85.7,-32.7,85.3,-45.7,78.5C-58.7,71.7,-68.4,58.4,-74.4,44.2C-80.3,30,-82.6,15,-82.2,0.2C-81.8,-14.5,-78.7,-29.1,-70.9,-40.2C-63.2,-51.3,-50.9,-59.1,-38.3,-65C-25.7,-70.9,-12.9,-75.1,1.9,-78.3C16.6,-81.5,33.1,-83.7,44.3,-77Z" transform="translate(100 100)" />
            </svg>
            <div className="flex justify-end">
                <Text />
                <img data-aos="fade-left" className="max-w-2xl mr-20 top-24 w-full mobile:w-96 relative h-auto tablet:mr-2" src={Img} alt="The img in nav of web" />
            </div>
        </div>
    );
}

export default Nav;
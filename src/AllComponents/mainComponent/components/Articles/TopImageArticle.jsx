import React from 'react';
import TImage from './femalejsdv.png';

const TopImageArticle = () => {
    return(
        <div className="flex justify-start ml-16">
            <img src={TImage} style={{width:'28%',position:'relative',left:'6%', marginTop:'12%'}} className="mobile:hidden" />
        </div>
    );
}

export default TopImageArticle;
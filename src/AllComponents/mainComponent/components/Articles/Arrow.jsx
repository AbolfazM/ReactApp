import React from 'react';
import ArrowImg from './down-arrow.png';

const Arrow = () => {
    return(
        <img data-aos="fade-right" className="animate-bounce mobile:hidden" style={{ position:'absolute', top:'600px',width:'5%',left:'45%'}} src={ArrowImg} alt="Arrow for resume of article" />
    );
}

export default Arrow;
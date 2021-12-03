import React from 'react';
import web from '../web.jpg';

const Card5 = () => {
    return(
        <div data-aos="zoom-in">
            <div className="card hover:shadow-md hover:transition duration-300 ease-in-out">
                <img className="img" src={web} alt={`javascript course`} />
                <h3 className="cardTitle">دوره جامع لورم</h3>
            </div>
            <div className="flex justify-start">
                <button className="btn text-white bg-blue-600 transform hover:rotate-3 transition mobile:duration-200 focus:bg-blue-500 cursor-pointer w-32 h-12 rounded-lg absolute top-40 left-64 text-lg">دانلود دوره</button>
            </div>
            <div>
        </div>
        </div>
    );
}

export default Card5;
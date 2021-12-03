import React from 'react';

const Dots = () => {
    return(
        <div className="w-96 h-80 bg-blue-700 absolute top-16 -left-28 rounded-3xl transform -rotate-45 shadow-2xl border-4 border-blue-500">
            <span className="Dots bg-blue-300 top-32 mt-2"></span>
            <span className="Dots bg-blue-400 top-36 mt-1"></span>
            <span className="Dots bg-blue-500 top-40"></span>
        </div>
    );
}

export default Dots;
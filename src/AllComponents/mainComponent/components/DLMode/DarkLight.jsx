import React from 'react';
import LDMode from './LDMode.png';

const DarkLight = (props) => {
    return(
        <div>
            <img onClick={props.ThemeHandler} className="h-9 w-9 cursor-pointer fixed top-5 left-10 z-50" src={LDMode} alt={`changing theme`} />
        </div>
    );
}

export default DarkLight;
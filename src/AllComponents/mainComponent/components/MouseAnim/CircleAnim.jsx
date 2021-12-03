import React, { useState } from 'react';

const CircleAnim = () => {

    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX);
        setCursorY(e.pageY);
    });

    return(
        <div style={{left: cursorX + 'px', top: cursorY + 'px'}} className="cursor shadow-2xl pointer-events-none mix-blend-difference w-10 h-10 bg-red-700 fixed rounded-full z-10 mobile:hidden"></div>
    );
}

export default CircleAnim;
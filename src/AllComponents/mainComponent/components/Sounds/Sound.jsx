import React, { useEffect, useRef } from 'react';
import WebVoice from './sounds/Webvoice.m4a';

const MySound = () => {

    const mySound = useRef(null);

    useEffect(() => {
        mySound.current.play();
    },[]);

    return(
        <div>
            <audio ref={mySound}>
                <source src={WebVoice}></source>
            </audio>
        </div>
    );
}

export default MySound;
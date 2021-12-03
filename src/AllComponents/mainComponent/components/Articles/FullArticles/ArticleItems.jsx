import React, { useState } from 'react';
import { RiChat3Line, RiHeartLine, RiMore2Fill } from "react-icons/ri";
import More from './More/More';

const ArticleItems = () => {

    const [data, setData] = useState([]);
    const [more, setMore] = useState(false);

    const handleData = () => {
        setData('liked item');
        alert(data);
    }

    const showMore = () => {
        setMore(!more);
        
        if(more === false) {
            setTimeout(() => {
                setMore(false);
            }, 5500);
        }
    }

    const style = {
        cursor: 'pointer',
        color: 'blue'
    }

    return(
        <div className="flex justify-center gap-52 mt-16 mobile:gap-20">
            <RiMore2Fill onClick={showMore} style={style} />
            <RiChat3Line style={style} />
            <RiHeartLine onClick={handleData} style={style} />
            { more ? <More /> : null}
        </div>
    );
}

export default ArticleItems;
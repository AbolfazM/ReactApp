import React from 'react';

const More = () => {

    const listStyle = {
        marginTop: '0.125rem',
        cursor: 'pointer'
    }

    return(
        // transition delay-700
        <div className="h-20 w-36 relative top-6 rounded-sm" style={{right:'60%'}}>
            <div className="list-none text-right text-sm font-bold bg-gray-100 shadow-lg p-2">
                <li style={listStyle}>اطلاعات بیشتر</li>
                <li style={listStyle}>درباره نویسنده</li>
                <li style={listStyle}>اشتراک گذاری</li>
            </div>
        </div>
    );
}

export default More;
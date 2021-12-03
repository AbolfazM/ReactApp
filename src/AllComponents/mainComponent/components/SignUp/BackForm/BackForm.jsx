import React from 'react';
import './Back.css';

const BackForm = () => {

    const FormBody = {
        height: '400px',
        width: '55%',
        position: 'absolute',
        top: '32%',
        left: '24%'
    }

    return(
        <div style={FormBody} className="rounded-sm Some mobile:Some mobile:min-w-full opacity-75 shadow-2xl">
            <h3 className="text-white text-lg left-20 absolute top-52">اگر اکانتی دارید میتوانید وارد شوید</h3>
                <button className="p-2 pl-5 pr-5 absolute top-60 mt-2 left-32 bg-white text-blue-700 text-lg rounded-md transition-colors duration-700 transform hover:bg-blue-700 hover:text-white">ورود کردن</button>            
            <div className="-left-1 mobile:w-full absolute shadow-xl rounded-md p-4 w-96">
                <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-white h-12 w-12"></div>
                    <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-white rounded w-3/4"></div>
                <div className="space-y-2">
                    <div className="h-4 bg-white rounded"></div>
                    <div className="h-4 bg-white rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BackForm;
import React, { useEffect, useRef } from 'react';

const FrontForm = () => {

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    },[])

    let userRef = useRef(null);
    let emailRef = useRef(null);
    let passwordRef = useRef(null);

    let formValidate = () => {
        if (inputRef.current.value === '') {
            console.log('name is true ...');
        }
    }

    const FormFront = {
        height: '450px',
        width: '24%',
        position: 'absolute',
        top: '28%',
        left: '52%'
    }

    return(
        <div style={FormFront} className="space-y-7 bg-blue-200 shadow-2xl rounded-sm">
            <input ref={inputRef} className="Input focus:outline-none focus:bg-white focus:border-blue-500" placeholder="نام خود را وارد کنید" type="text" />
            <input ref={userRef} className="Input focus:outline-none focus:bg-white focus:border-blue-500" placeholder="نام کاربری خود را وارد کنید" type="text" />
            <input ref={emailRef} className="Input focus:outline-none focus:bg-white focus:border-blue-500" placeholder="ایمیل خود را وارد کنید   @" type="email" />
            <input ref={passwordRef} className="Input focus:outline-none focus:bg-white focus:border-blue-500" placeholder="پسورد خود را وارد کنید" type="password" />
            <button onClick={formValidate} className="p-2 pl-5 pr-5 absolute top-80 left-32 bg-blue-500 text-white rounded-md focus:bg-blue-800">ساخت اکانت</button>            
        </div>
    );
}

export default FrontForm;
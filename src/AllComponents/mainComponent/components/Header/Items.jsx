import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png';
import Buy from './buy.svg';
import User from './user.png';

const Items = () => {
    return(
        <div>
            <img className="w-20 animate-pulse absolute right-16 top-0 mobile:hidden tablet:hidden" src={Logo} alt="The Logo of website" />
            <Link to="/Liked">
                <img className="w-8 left-48 absolute top-6 cursor-pointer mobile:hidden tablet:hidden" src={Buy} alt="For users buying" />
            </Link>
            <Link to="/signup">
                <img className="w-7 left-32 absolute top-6 cursor-pointer mobile:hidden tablet:hidden" src={User} alt="open user account" />
            </Link>
            <span className="text-white rounded-lg absolute cursor-pointer left-48 top-6 h-4 w-4 text-center text-sm bg-blue-800 mobile:hidden tablet:hidden">0</span>
        </div>
    );
}

export default Items;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Items from './Items';
import Links from './Links';
import Menu from './speisekarte.png';
import Logo from './logo.png';
import Home from './img/home.png';
import Articles from './img/articles1.png';
import Courses from './img/courses.png';
import About from './img/about.png';
import Github from './img/github.png';
import Instagram from './img/instagram.png';
import Phone from './img/phone.png';

const Header = () => {

    const [hamberMenu, SetHamberMenu] = useState(false);

    const ChangeMenu = () => {
        SetHamberMenu(!hamberMenu);
    }

    const ResMenu = {
        width: '77%',
        height: '49rem',
        position: 'relative'
    }

    return(
        <div className="HeaderMobileRes bg-white mobile:bg-white h-20 shadow-xl w-full z-10 fixed">
            <nav>
                <ul>
                    <img className="w-10 absolute right-0 cursor-pointer h-10 mt-5 mr-5 hidden mobile:block tablet:block" onClick={ChangeMenu} src={Menu} alt="hamberger menu" />
                    <Links />
                </ul>
            </nav>

            {hamberMenu ?
                <div style={ResMenu} className="bg-blue-500 h-full" data-aos="fade-right">
                    <img className="w-32 ml-28" src={Logo} alt="The Logo of website" />
                    <div>
                        <Link to="/">
                            <img className="w-8 relative -right-60 top-14" src={Home} alt="homepage" />
                        </Link>
                        <Link to="/Articles">
                            <img className="w-8 relative -right-60 top-20" src={Articles} alt="articles" />
                        </Link>
                        <Link to="/AllCourses">
                            <img className="w-8 relative -right-60 top-28" src={Courses} alt="courses" />
                        </Link>
                        <Link to="/About">
                            <img className="w-8 relative -right-60 top-36" src={About} alt="About" />
                        </Link>
                    </div>
                    <div className="flex justify-center gap-5 relative right-52 top-10">
                        <Link to="https://github.com/AbolfazMoradi/">
                            <img className="w-8 relative -right-52 top-56" src={Github} alt="my github" />
                        </Link>
                        <Link to="/">
                            <img className="w-8 relative -right-52 top-56" src={Instagram} alt="my instagram" />
                        </Link>
                        <Link to="/">
                            <img className="w-8 relative -right-52 top-56" src={Phone} alt="my phone" />
                        </Link>
                    </div>
                </div>
            : null}

            <Items />
        </div>
    );
}

export default Header;
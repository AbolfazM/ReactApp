import React, { useState } from 'react';
import Header from '../Header/Header';
import MeProfile from './1.png';
import Dots from './Dots';
import Map from './Roodmap/Map';
import MoreInfo from './MoreInfo';
import CircleAnim from '../MouseAnim/CircleAnim';
import Indicator from '../Indicator/Indicator';

const About = () => {
    
    const [Info, showInfo] = useState(false);

    const showMoreInfo = () => {
        showInfo(!Info);
    }

    const about = {
        top: '2000px',
        position: 'relative'
    }


    return(
        <div>
            <Indicator />
            <Header />
            <div>
                <img className="h-52 rounded-full absolute border-4 border-white cursor-pointer top-48 shadow-2xl left-28 z-20" src={MeProfile} alt={`This is my profile`} />
            </div>
            <div>
            </div>
            <div className="h-96 w-96 bg-blue-100 absolute right-0 top-32 rounded-full filter blur-lg"></div>
                <div>
                    <span className="text-lg show-passed border-2 border-blue-100 rounded-sm h-4 w-12 text-center bg-white absolute right-60 top-52">درباره</span>
                    <h1 className="shadow-xl text-3xl font-semibold absolute right-60 top-60">من ابوالفضل ام</h1>
                    <p className="AboutText">این یک متن تستیه و چیز خاصی نی و شایدم باشه</p>
                    <p className="AboutText mt-7">این یک متن تستیه و چیز خاصی نی</p>
                </div>

                <CircleAnim />
                
                <div>
                    <button onClick={showMoreInfo} href="/" className="absolute mobile:mt-28 mobile:w-60 mobile:left-24 top-80 mt-9 right-60 bg-gradient-to-tr from-blue-700 to-blue-600 hover:from-indigo-600 hover:to-blue-600 focus:from-indigo-700 focus:to-blue-600 text-white text-sm font-bold rounded-t-2xl rounded-bl-2xl px-8 py-2.5 shadow-2xl">بیشتر بدانید</button>
                {Info ? 
                    <MoreInfo />
                : null}
                </div>
                <Dots />
                <Map />
                <div>
                    <svg style={about} viewBox="0 0 1440 320"><path fill="rgba(37, 120, 200)" fill-opacity="1" d="M0,32L40,53.3C80,75,160,117,240,112C320,107,400,53,480,69.3C560,85,640,171,720,213.3C800,256,880,256,960,256C1040,256,1120,256,1200,245.3C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                </div>
        </div>
    );
}

export default About;
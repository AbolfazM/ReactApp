import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Text = () => {

    const H2 = {
        top: '240px',
        left: '8.5rem',
        position: 'absolute',
        color: 'rgb(48, 47, 47)',
        fontWeight: 'bold',
    }

    const H4 = {
        position: 'absolute',
        left: '7rem',
        top: '290px',
        color: 'rgb(37, 37, 37)',
        fontWeight: 'bold'
    }

    return(
        <div>
            <div>

                <div data-aos="fade-right" style={H2} className="text-2xl mobile:text-lg mobile:mt-40 mobile:left-10 tablet:mt-64 tablet:left-28">
                    <Typewriter onInit={(h2typewriter) => {
                        h2typewriter.typeString("دوره های آموزشی ما را بب").deleteChars(6).typeString(" را ببینید").pauseFor(1000).start();
                    }} />
                </div>

                <div data-aos="fade-right" style={H4} className="text-xl mobile:text-sm mobile:mt-36 mobile:left-10 tablet:mt-60 tablet:left-24">
                    <Typewriter onInit={(h4typewriter) => {
                        h4typewriter.typeString("با دوره ها عالی  جذاب مهارت را افزایش دهید").pauseFor(3000).start();
                    }} />
                </div>
                
                <div>
                    <Link to="/AllCourses">
                        <button data-aos="fade-right" type="button" className="text-white bg-blue-600 hover:bg-blue-500 p-3 w-32 h-12 rounded-lg absolute mt-5 top-80 left-52 text-lg mobile:flex mobile:justify-center mobile:rounded mobile:h-9 mobile:p-2 mobile:top-60 mobile:w-96 mobile:left-3 tablet:w-full tablet:left-0 tablet:rounded tablet:h-9 tablet:p-2 tablet:mt-60">دیدن دوره ها</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Text;
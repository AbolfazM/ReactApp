import React from 'react';
import { Link } from 'react-router-dom';
import ArticleImg from './articles.jpg';

const Article1 = () => {
    return(
        <div className="h-80 w-60 bg-blue-500 mt-40 relative rounded-lg shadow-xl transition duration-300 hover:shadow-2xl">
            <div className="h-1 w-full bg-white absolute top-32"></div>
            <img className="w-full h-32 rounded-t-lg" src={ArticleImg} alt="img of articles" />
            <div>
                <div className="bg-white w-44 h-5 absolute left-8 text-center mt-10 rounded-sm">
                    <h4>همه چیز درباره8 جاوااسکریپت</h4>
                </div>
                <div className="text-xs text-white w-52 text-right absolute top-52 mr-3">
                    <p>این زبان مفسری میباشد و در مرورگر تفسیر میشود و متن دیگری به ذهنم نمیرسد</p>
                </div>
            </div>

            <Link to="/WhatIsJs">
                <button className="h-8 w-20 rounded-md bg-white text-blue-500 duration-300 relative left-20 top-36 border-2 focus:border-white focus:bg-blue-500 focus:text-white">ادامه</button>
            </Link>
        </div>
    );
}

export default Article1;
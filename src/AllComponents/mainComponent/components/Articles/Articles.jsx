import React from 'react';
import Header from '../Header/Header';
import Indicator from '../Indicator/Indicator';
import CircleAnim from '../MouseAnim/CircleAnim';
import Article1 from './AllArticles/1Article';
import Article2 from './AllArticles/2Article';
import Article3 from './AllArticles/3Article';
import Article4 from './AllArticles/4Article';

const Articles = () => {
    return(
        <div>
            <Indicator />
            <Header />
            <div className="flex justify-evenly space-y-40 -space-x-20 mobile:flex-wrap mobile:content-center mobile:-space-x-0 mobile:space-y-6">
                <Article1 />
                <Article2 />
                <Article3 />
                <Article4 />
            </div>

            <CircleAnim />
            
            <div>
                <svg className="mobile:top-10" viewBox="0 0 1440 320"><path fill="rgba(37, 120, 200)" fill-opacity="1" d="M0,32L40,53.3C80,75,160,117,240,112C320,107,400,53,480,69.3C560,85,640,171,720,213.3C800,256,880,256,960,256C1040,256,1120,256,1200,245.3C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>
        </div>
    );
}

export default Articles;
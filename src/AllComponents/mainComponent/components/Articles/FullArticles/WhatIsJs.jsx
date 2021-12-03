import React from 'react';
import Header from '../../Header/Header';
import TopImageArticle from '../TopImageArticle';
import ArticleNav from './ArticleNav';
import Arrow from '../Arrow';
import ArticleBody from './ArticleBody';
import Footer from '../../Footer/Footer';
import ArticleItems from './ArticleItems';

const WhatIsJs = () => {
    return(
        <div>
            <Header />
            <TopImageArticle />
            <ArticleNav />
            <Arrow />
            <ArticleBody />
            <ArticleItems />
            <Footer />
        </div>
    );
}

export default WhatIsJs;
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../mainComponent/../../App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ItemContent from './components/Items/ItemContent';
import CourseCards from './components/courseCards/CourseCards';
import Article from './components/miniArticle/Article';
import Footer from './components/Footer/Footer';
import Svg from '../Svg/Svg';
import CircleAnim from './components/MouseAnim/CircleAnim';
import DarkLight from './components/DLMode/DarkLight';
import MySound from './components/Sounds/Sound';
import Indicator from './components/Indicator/Indicator';

const App = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  },[]);
  
  const [theme, setTheme] = useState(false);
  const changeTheme = () => {
    setTheme(!theme);
  }

    return (
        <div className={theme ? 'dark' : 'light'}>
            <Indicator />
            <Header />
            <DarkLight ThemeHandler={changeTheme} />
            <MySound />
            <Nav />
            <CircleAnim />
            <Svg />
            <ItemContent />
            <CourseCards />
            <Article />
            <Footer />
        </div>
    );
}

export default App;
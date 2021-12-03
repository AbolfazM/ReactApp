import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './AllComponents/mainComponent/App';
import About from './AllComponents/mainComponent/components/About/About';
import AllCourses from './AllComponents/mainComponent/components/AllCourses/AllCourses';
import Articles from './AllComponents/mainComponent/components/Articles/Articles';
import Email from './AllComponents/mainComponent/components/EmailSign/Email';
import FullArticle from './AllComponents/mainComponent/components/miniArticle/FullArticle';
import SignUp from './AllComponents/mainComponent/components/SignUp/SignUp';
import WhatIsJs from './AllComponents/mainComponent/components/Articles/FullArticles/WhatIsJs';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/WhatIsJs" component={WhatIsJs} />
        <Route path="/signup" component={SignUp} />
        <Route path="/allcourses" component={AllCourses} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
        <Route path="/email" component={Email} />
        <Route path="/fullarticle" component={FullArticle} />
        <Route exact path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
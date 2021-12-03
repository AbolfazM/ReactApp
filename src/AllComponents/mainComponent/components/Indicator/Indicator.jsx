import React, { useState, Fragment } from 'react';
import { Container, ProgressBar } from './Styles';

const Indicator = () => {

    const [scroll, setScroll] = useState(0);

    const onScroll = () => {
        const Scrolled = document.documentElement.scrollTop;
        const MaxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const ScrollPercent = (Scrolled / MaxHeight) * 100;
        setScroll(ScrollPercent);
    };

    window.addEventListener('scroll', onScroll);

    return(
        <Fragment>
            <Container>
                <ProgressBar style={{ width: `${scroll}%` }}></ProgressBar>
            </Container>
        </Fragment>
    );
};

export default Indicator;
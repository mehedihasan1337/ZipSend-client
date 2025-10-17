import React from 'react';
import Banner from './../Banner/Banner';
import Services from '../Services/Services';
import HowItWorks from '../Services/HowItWorks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './../Banner/Banner';
import Services from '../Services/Services';
import HowItWorks from '../Services/HowItWorks';
import Slayed from '../Slayed/Slayed';
import Benefites from '../Benefites/benefites';
import BeMerchant from '../Bemerchant/BeMerchant';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>
            <Slayed></Slayed>
            <Benefites></Benefites>
            <BeMerchant></BeMerchant>
        </div>
    );
};

export default Home;
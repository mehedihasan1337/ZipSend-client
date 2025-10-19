import React from 'react';
import Marquee from "react-fast-marquee";

import logo1 from '../../../assets/brands/amazon.png'
import logo2 from '../../../assets/brands/casio.png'
import logo3 from '../../../assets/brands/moonstar.png'
import logo4 from '../../../assets/brands/randstad.png'
import logo5 from '../../../assets/brands/amazon_vector.png'
import logo6 from '../../../assets/brands/start-people 1.png'
import logo7 from '../../../assets/brands/start.png'
const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7]

const Slayed = () => {
    return (
        <section className='max-w-6xl mx-auto '>
            <div className='text-center text-[#03373D] font-bold text-3xl mt-7  '>
                <h2>We've helped thousands of sales teams</h2>
                <Marquee pauseOnHover speed={50} gradient={false}>
                    {logos.map((logo, idx) => (
                        <div key={idx} className='ml-12 mt-4'>
                            <img src={logo} alt="" />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Slayed; 
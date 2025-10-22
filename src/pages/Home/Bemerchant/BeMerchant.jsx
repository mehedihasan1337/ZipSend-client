import React from 'react';
import merchant from "../../../assets/location-merchant.png"
const BeMerchant = () => {
    return (
        <div>
            <div data-aos="zoom-out-down"  className="bg-no-repeat bg-[url('assets/be-a-merchant-bg.png')] p-2 md:p-20 bg-[#03373D] rounded-3xl ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={merchant}
                        className="md:max-w-sm"
                    />
                    <div>
                        <h1 className="text-4xl text-white font-bold">Merchant and Customer
                            Satisfaction is Our First Priority</h1>
                        <p className="py-6 text-gray-300">
                            We offer the lowest delivery charge with
                            the highest value along with 100% safety of
                            your product. Pathao courier delivers your parcels
                            in every corner of
                            Bangladesh right on time.
                        </p>

                        <div className='grid md:grid-cols-2 gap-3 w-9/12 '>
                            <button className="btn shadow-none bg-[#CAEB66] border-none text-black rounded-3xl">Become a Merchant</button>
                            <button className=" border-2 text-[#CAEB66] border-[#CAEB66] p-2 rounded-4xl hover:text-black hover:bg-[#CAEB66] ">Earn with Profast Courier</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeMerchant;
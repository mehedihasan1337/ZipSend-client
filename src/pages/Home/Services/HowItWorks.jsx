import React from "react";
import { FaTruckPickup, FaMoneyBillWave, FaBuilding, FaWarehouse } from "react-icons/fa";

const steps = [
  {
    icon: FaTruckPickup,
    title: "Booking Pick & Drop",
    description:
      "Easily book a parcel pick-up from your location and have it delivered quickly and securely to the destination.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Cash On Delivery",
    description:
      "Offer your customers the convenience of paying upon delivery with our reliable cash collection service.",
  },
  {
    icon: FaWarehouse,
    title: "Delivery Hub",
    description:
      "Your parcels are managed through our modern delivery hubs for efficient sorting and on-time dispatch.",
  },
  {
    icon: FaBuilding,
    title: "Booking SME & Corporate",
    description:
      "Customized logistics support for SMEs and corporate clients — manage bulk deliveries with full tracking and care.",
  },
];


const HowItWorks = () => {
  return (
    <section data-aos="fade-up" className="py-16" >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-2xl  sm:text-3xl font-bold mb-7 text-[#03373D] border-primary inline-block pb-1">
          How it Works
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl hover:shadow-lg shadow-sm shadow-[#a8dd08] p-6 text-center hover:shadow-[#03373D]  transition-all"
            >
              <div className="flex justify-center mb-4 text-[#a8dd08] text-4xl">
                <item.icon />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#03373D]">
                {item.title}
              </h3>
              <p className="text-black text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

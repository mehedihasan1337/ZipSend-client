import React from "react";
import liveTracking from "../../../assets/live-tracking.png";
import safeDelivery from "../../../assets/safe-delivery.png";

const features = [
  {
    image: liveTracking,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
  },
  {
    image: safeDelivery,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns — anytime you need us.",
  },
  {
    image: safeDelivery,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
];

const Benefites = () => {
  return (
    <section className="py-16 " id="why-choose-us">
      <div  className="max-w-6xl mx-auto px-4 space-y-6">
        {features.map((item, index) => (
          <div data-aos="zoom-in-up"
            key={index}
            className="hover:shadow-lg shadow-sm shadow-[#a8dd08] text-center hover:shadow-[#03373D]  relative bg-base-100 rounded-2xl p-10 flex flex-col sm:flex-row items-center sm:items-center gap-6 transition-all"
          >
            {/* Image */}
            <div className="flex justify-center items-center w-40 h-40 flex-shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-contain max-h-36"
              />
            </div>

            {/* Divider (visible now) */}
            <div className="  w-px bg-gray-300 self-stretch"></div>

            {/* Text */}
            <div className="flex flex-col justify-center text-center sm:text-left">
              <h3 className="text-2xl font-bold mb-2 text-[#03373D]">
                {item.title}
              </h3>
              <p className="text-black text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefites;

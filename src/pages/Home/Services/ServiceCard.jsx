import React from "react";

const ServiceCard = ({ service}) => {
    const {icon: Icon, title, description }=service
  return (
    <div className="card bg-base-100 shadow-md hover:bg-[#CAEB66]  transition p-5 text-center rounded-2xl border border-base-200">
      <div className="flex justify-center mb-3 text-[#03373D]  text-4xl">
        <Icon />
      </div>
      <h3 className="text-lg text-[#03373D] font-semibold mb-2">{title}</h3>
      <p className="text-sm text-black">{description}</p>
    </div>
  );
};

export default ServiceCard;

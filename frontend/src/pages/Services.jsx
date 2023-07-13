

import React from "react";
import ServiceList from "../components/Services/ServiceList";

const Services = () => {
    return  < div className="container">
    <div className="xl:w-[470px] mx-auto">
    <h2 className="heading text-center"> Our Mental Health Services</h2>
    <p className="text__para text-center">
    Our team of dedicated therapists is passionate about providing compassionate care and helping you on your journey towards mental well-being. 
    </p>
    </div>
    <ServiceList />
  </div>;
};

export default Services;

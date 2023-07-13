import React from "react";
import DoctorList from "../../components/Doctors/DoctorList";

const Doctors = () => {
    return   <div className="container">
    <div className="lg:w-[470px] mx-auto">
                <h2 className="heading text-center">
                  Our Therepists
                </h2>
                <p className="text__para text-center">
                  World-class care for everyone. Our health System offers unmatched,
                  expert health care.
                </p>
              </div>
              <DoctorList />
              </div>;
};

export default Doctors;
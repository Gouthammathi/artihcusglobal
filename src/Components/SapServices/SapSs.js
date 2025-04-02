import React from 'react'
import automotive from "../images/automotive.jpg";
import security from "../images/9.jpg";
 
const SapSecurity = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-[300px]">
        <div className="absolute z-20 left-16 top-1/2 transform -translate-y-1/2 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4 text-white">
            SAP Security Service
          </h1>
        </div>
        <img
          src={automotive}
          alt="Background"
          className="w-full h-full object-cover brightness-90"
        />
      </div>
 
      {/* Security Services Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">
              <span className="text-[#f57e20]">SAP Security Services</span>
            </h2>
 
            {/* Image Container */}
            <div className="relative mb-8 flex justify-center">
              <img
                src={security}
                alt="SAP Security Services"
                className="w-[690px] h-[690px] object-contain rounded-lg shadow-lg"
              />
            </div>
 
            {/* Text Content */}
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-black text-lg mb-6">
              SAP Security Services ensure the protection of SAP systems, data, and processes against unauthorized access, cyber threats, and compliance risks. These services include user access management, role design, data encryption, vulnerability assessments, and compliance audits. They safeguard sensitive information while ensuring smooth and secure system operations.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default SapSecurity
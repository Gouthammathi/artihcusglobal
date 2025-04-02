import React from 'react'
import automotive from "../images/automotive.jpg";
import security from "../images/10.jpg";
 
const SapCloud = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-[300px]">
        <div className="absolute z-20 left-16 top-1/2 transform -translate-y-1/2 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4 text-white">
            SAP Migration to Cloud
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
              <span className="text-[#f57e20]">SAP  Migration to Cloud</span>
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
              SAP Migration to Cloud involves transferring SAP systems and data from on-premise infrastructure to a cloud environment. This process enhances scalability, reduces costs, and improves accessibility. It includes planning, data transfer, testing, and optimization to ensure smooth operation in the cloud while leveraging its advanced features like agility and security.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default SapCloud;
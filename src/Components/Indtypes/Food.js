import React from "react";
import manufacturing from "../images/food.jpg";
import manufacturer from "../images/bind.jpg";
import manufacturingg from "../images/beverage.jpg";
 
function Manufacturing() {
  return (
    <div>
      {/* Header Section */}
      <div
        className="text-white py-24"
        style={{
          backgroundImage: `url(${manufacturing})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="px-4 md:px-16 lg:px-36 text-2xl md:text-4xl font">
          Food & Beverage
        </h1>
      </div>
 
      {/* Section 2: Manufacturing Content */}
      <div className="px-4 md:px-16 lg:px-36 py-12 flex flex-col lg:flex-row lg:space-x-8">
        {/* Left Image */}
        <div className="flex justify-center lg:w-1/2 mb-6 lg:mb-0">
          <img
            src={manufacturingg}
            alt="Manufacturing Factory"
            className="w-full md:w-5/6"
          />
        </div>
        {/* Right Content */}
        <div className="lg:w-1/2 text-justify">
          <h2 className="text-orange-500 text-2xl md:text-3xl font-bold mb-4">
            <span className="text-green-300 mr-2 text-3xl md:text-5xl">:</span>
            Food & Beverage
          </h2>
          <p className="text-gray-600 leading-relaxed">
            <span className="text-orange-500 font-bold">SAP EWM</span> is a
            powerful warehouse management system that helps food and beverage
            businesses increase efficiency and reduce costs. It enables
            automation and optimization of key warehouse operations, such as
            stock management, inventory tracking, order processing, and
            shipping. ...
          </p>
          <p className="mt-5">
            SAP EWM is excellent for organizations that have various storage
            sites. Businesses may manage warehouse activities in several
            locations from a single platform.
          </p>
        </div>
      </div>
 
      {/* Section 3: Challenges */}
      <div className="px-4 md:px-16 lg:px-36 py-12 flex flex-col-reverse lg:flex-row lg:space-x-8">
        {/* Right Content */}
        <div className="lg:w-1/2 text-justify mt-6 lg:mt-0">
          <h2 className="text-orange-500 text-2xl md:text-3xl font-bold mb-4">
            <span className="text-green-300 mr-2 text-3xl md:text-5xl">:</span>
            Challenges Faced by Food and Beverage Industry
          </h2>
          <ul className="space-y-2 list-none text-gray-600 font-medium">
            {[
              "Regulatory Compliance",
              "Maintaining Product Quality and Safety",
              "Managing Perishable Inventory",
              "Demand Variability",
              "Complex Supply Chains",
              "Labor Management",
              "Sustainability and Waste Reduction",
              "Efficient Order Fulfillment",
              "Cost Control",
            ].map((challenge, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                {challenge}
              </li>
            ))}
          </ul>
        </div>
        {/* Left Image */}
        <div className="flex justify-center lg:w-1/2">
          <img
            src={manufacturer}
            alt="Manufacturing Factory"
            className="w-full md:w-5/6"
          />
        </div>
      </div>
 
      {/* Section 4: Solutions */}
      <div className="px-4 md:px-16 lg:px-36 mb-10">
        <h2 className="text-orange-500 text-2xl md:text-3xl font-bold mb-4">
          <span className="text-green-300 mr-2 text-3xl md:text-5xl">:</span>
          We are offering SAP EWM solutions for Food & Beverage Industry
        </h2>
        <ul className="space-y-2 list-none text-gray-600 font-medium">
          {[
            "Temperature and Humidity Control",
            "Batch and Lot Management",
            "Expiration Date Management",
            "Advanced Picking Strategies",
            "Quality Control",
            "Cross-Docking and Flow-Through",
            "Labor Management",
            "Automation and Integration",
            "Yard Management",
            "Regulatory Compliance",
            "Analytics and Reporting",
          ].map((solution, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
              {solution}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
 
export default Manufacturing;
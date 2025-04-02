import React from "react";
import manufacturing from "../images/manufacturingg.jpg";
import manufacturer from "../images/Manufacturer.jpg";
import manufacturingg from "../images/manufacturing.jpg";
 
function Manufacturing() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="text-white py-24 px-6 md:px-12 lg:px-36"
        style={{
          backgroundImage: `url(${manufacturing})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Manufacturing</h1>
      </div>
 
      {/* Section 2: Manufacturing Content */}
      <div className="px-6 md:px-12 lg:px-36 py-12 lg:flex lg:space-x-8">
        {/* Left Image */}
        <div className="flex justify-center lg:w-1/2 mb-6 lg:mb-0">
          <img
            src={manufacturingg}
            alt="Manufacturing Factory"
            className="w-full md:w-4/5 lg:w-5/6"
          />
        </div>
 
        {/* Right Content */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-orange-500 text-2xl md:text-3xl font-bold mb-4">
            <span className="text-green-300 mr-2 text-4xl md:text-5xl">:</span>
            Manufacturing
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To adapt to the digital revolution and meet today’s market demands, industrial companies must create cutting-edge operational ecosystems and foster supplier collaboration. This involves developing intelligent solutions and platforms that reduce costs, enhance service capabilities, and deliver a consistent customer experience.
            <span className="text-orange-500 font-bold"> Artihcus Global</span>{" "}
            provides solutions that help manufacturers improve performance in
            various areas, including talent and supply chain management,
            process automation, quality control, and more.
          </p>
        </div>
      </div>
 
      {/* Section 3: Challenges */}
      <div className="px-6 md:px-12 lg:px-36 py-12 lg:flex lg:space-x-8">
        {/* Challenges Content */}
        <div className="flex-1 max-w-xl mb-6 lg:mb-0">
          <h2 className="text-orange-500 text-2xl md:text-3xl font-bold mb-4">
            <span className="text-green-300 mr-2 text-4xl md:text-5xl">:</span>
            Challenges Faced by Manufacturer
          </h2>
          <ul className="space-y-2 list-none text-gray-600 font-medium">
            {[
              "Achieving high efficiency in offshoring and reshoring supply chains",
              "Building resilience in the face of geopolitical, competitive, and regulatory uncertainty",
              "Realizing the full potential of technological innovation",
              "Managing increasing product and supply chain complexity",
              "Maximizing capacity and asset utilization",
              "Improving staff productivity, safety, efficiency, and satisfaction",
            ].map((challenge, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                {challenge}
              </li>
            ))}
          </ul>
        </div>
 
        {/* Right Image */}
        <div className="flex justify-center lg:w-1/2">
          <img
            src={manufacturer}
            alt="Manufacturing Factory"
            className="w-full md:w-4/5 lg:w-5/6"
          />
        </div>
      </div>
    </div>
  );
}
 
export default Manufacturing;
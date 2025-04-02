import React from "react";
import manufacturing from "../images/pharma.jpg";
import manufacturer from "../images/bottle.jpg";
import manufacturingg from "../images/bottless.jpg";
 
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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Pharmaceutical
        </h1>
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
            Pharmaceutical
          </h2>
          <p className="text-gray-600 leading-relaxed">
            SAP EWM (Extended Warehouse Management) in the pharmaceutical
            industry enables accurate and compliant warehouse management, which
            is essential when handling delicate items. It supports stringent
            standards and traceability requirements by providing real-time
            inventory visibility and precise tracking through RFID and barcode
            scanning.
          </p>
          <p className="mt-5">
            <span className="text-orange-500 font-bold">Artihcus Global</span>{" "}
            has successfully implemented SAP EWM for pharmaceutical companies
            while adhering to pharmaceutical product serialization rules. These
            implementations included the integration of{" "}
            <span className="text-orange-500 font-bold">
              SAP Advanced Track & Trace for Pharmaceuticals (ATTP)
            </span>
            . SAP EWM offers features like batch management and serial number
            management, which help in inventory identification.
          </p>
          <p className="mt-3">
            For companies that rely heavily on Quality Management (QM)
            functionality, we specialize in incorporating EWM features such as
            inspection lot summary, pre-sampling in production, and recurrent
            inspections.
          </p>
        </div>
      </div>
 
      {/* Section 3: Benefits */}
      <div className="px-6 md:px-12 lg:px-36 py-12 lg:flex lg:space-x-8">
        {/* Benefits Content */}
        <div className="flex-1 max-w-xl mb-6 lg:mb-0">
          <h2 className="text-orange-500 text-2xl md:text-3xl font-bold mb-4">
            <span className="text-green-300 mr-2 text-4xl md:text-5xl">:</span>
            Benefits Of SAP EWM for Pharmaceutical Industry
          </h2>
          <ul className="space-y-2 list-none">
            {[
              "Compliance with Regulations",
              "Enhanced Traceability",
              "Improved Stock Accuracy",
              "Efficient Storage Management",
              "Streamlined Batch Release and Recall Processes",
              "Quality Management Integration",
              "Compliance with GMP Requirements",
              "Sample Management",
              "Real-Time Monitoring and Reporting",
              "Seamless ERP Integration",
            ].map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                {benefit}
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
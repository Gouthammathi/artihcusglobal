import React from 'react';
import headerImage from '../images/header.jpg';
import tmImage from '../images/sap-tm.png';
import tmOmImage from '../images/tm-om.png';
 
const Button = ({ label }) => {
  return (
    <button className="bg-[#E3D7D6] text-black py-2 px-4 rounded-full font-normal">
      {label}
    </button>
  );
};
 
function Tm() {
  const buttonLabels = [
    "Transportation Requirement Management and Configuration",
    "Defining Transportation Relevance Orders and Deliveries",
    "Creating Freight Units",
    "Configuring Conditions",
    "Managing Delivery Creation",
    "Creating Handling Units and Building Packages",
    "Transportation Planning Configuration",
    "Explaining the Transportation Planning Processes",
    "Defining Selection and Planning Profiles",
    "Configuring Transportation Cockpit Layouts",
    "Planning Interactively",
    "Scheduling of Freight Orders",
    "Optimizing Freight Orders",
    "Creating Transportation Proposals",
    "Subcontracting Freight Orders",
    "Creating Load Plans",
    "Defining a Short-cut Planning Process",
    "Transportation Execution",
    "Configuring Freight Order Types",
    "Explaining the Concept of Transportation Units and Service Orders",
    "Generating Outputs",
    "Monitoring Transportation Events",
    "Integrating Warehouses"
  ];
 
  return (
    <>
      {/* Header Section */}
      <section className="relative">
        <div
          className="bg-cover bg-center bg-no-repeat h-[250px]"
          style={{ backgroundImage: `url(${headerImage})` }}
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold mt-6 text-white">SAP TM</h2>
            </div>
          </div>
        </div>
      </section>
 
      {/* Main Content Section */}
      <div className="container mx-auto pb-5 mt-8 px-4 sm:px-8 md:px-16 lg:px-36">
        <div className="flex flex-wrap">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 px-2">
            <div className="text-center lg:text-left">
              <div className="inline-block mb-2">
                <span className="text-2xl font-bold text-orange-400 ml-48">SAP TM</span>
              </div>
            </div>
            <p className="leading-relaxed mt-2">
              SAP offers you numerous possibilities to provide transport processes with efficient
              support. Through the SAP ERP possibilities of the LE-TRA, SAP provides the SAP
              Transportation Management (SAP TM).
            </p>
            <br />
            <p className="leading-relaxed">
              By using SAP TM, you efficiently support the improvement and automation of all
              processes relevant to transport, e.g., freight cost billing or transport planning and
              bidding. By integrating SAP EWM (SAP Extended Warehouse Management), the improvements
              are already made in your warehouse. There is no need for external transport
              management systems at all. Interfaces, dependencies, and costs will be significantly
              reduced.
            </p>
          </div>
 
          {/* Image Section with tm.jpg - Bigger and aligned to the right */}
          <div className="w-full lg:w-1/2 px-4 flex justify-end">
            <img
              src={tmImage} // Replace with your Transportation Management image
              alt="Transportation Management"
              className="max-w-full sm:w-96 lg:w-[700px] h-80 mt-10"
              loading="lazy"
            />
          </div>
        </div>
      </div>
 
      {/* Additional Content */}
      <div className="container mx-auto pb-5 mt-8 px-4 sm:px-8 md:px-16 lg:px-36">
        <div className="text-center">
          <p className="font-bold text-black text-l mr-20">Artihcus Global facilitates efficient transport processes with the optimal SAP Transportation Management (SAP TM).</p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
            {/* Buttons Section */}
            <div className="flex flex-wrap justify-start gap-4 w-full">
              {buttonLabels.map((label, index) => (
                <Button key={index} label={label} />
              ))}
            </div>
          </div>
 
          {/* Text and Image Section */}
          <div className="flex flex-wrap mt-8">
            {/* Left Text Section */}
            <div className="w-full lg:w-1/2 px-4">
              <p className="mt-5 mb-5">
                With a well thought out software solution in the transport process, you can standardize processes and tap into savings potentials in single and double-figure percentages.
              </p>
              <p className="mb-5">
                Quantitatively speaking, freight costs can be reduced while at the same time increasing the transparency of the courier services. This allows, on the one hand, the possibility to select the carrier with the best price and, on the other hand, puts you in a better negotiating position for carrier contracts.
              </p>
              <p className="mb-20">
                In synergy with the SAP warehouse management for the intralogistics processes, it also facilitates an improvement in the notification and preparation of goods as well as the time slot booking and yard management.
              </p>
            </div>
           
            {/* Right Image Section */}
            <div className="w-full lg:w-1/2 px-4 flex justify-end">
              <img
                src={tmOmImage} // Replace with your Transportation Management Operations image
                alt="Transportation Management Operations"
                className="max-w-full sm:w-96 lg:w-[600px] h-80"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Tm;
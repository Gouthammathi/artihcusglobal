import React, { useState } from "react";
import Contact from "../images/Contact.jpg";
import sap from "../images/4.jpg";
import shadow from "../images/shadow.png";
import { Minus, Plus } from "lucide-react";
 
const CornerDecoration = () => (
  <div className="absolute right-4 top-4 w-6 h-6">
    <div className="absolute right-0 top-0 w-3 h-3 border-t-2 border-r-2 border-white opacity-50" />
    <div className="absolute right-0 bottom-0 w-3 h-3 border-b-2 border-r-2 border-white opacity-50" />
  </div>
);
 
const SapIntegration = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
 
  const challenges = [
    {
      title: "Customer Relationship Management",
      description: "Disseminate vital customer information, sales orders, and service details to enhance customer interaction and satisfaction."
    },
    {
      title: "Supply Chain Management",
      description: "Maximize inventory oversight, improve demand predictions, and streamline logistics to minimize costs and boost performance."
    },
    {
      title: "Human Resource Management",
      description: "Maintain the uniformity and precision of HR information to enhance your business processes and enable accurate HR oversight."
    },
    {
      title: "Financial Systems",
      description: "Attain more precise financial reporting, streamlined budgeting, and enhanced expense governance to secure your business's overall financial health."
    },
    {
      title: "E-Commerce Platforms",
      description: "Facilitate real-time data interchange, proficient order management, and refined inventory oversight to enhance overall business responsiveness."
    },
    {
      title: "Manufacturing Execution Systems",
      description: "Refine production scheduling, quality assurance, and material requirement planning to maximize processes and escalate operational efficiency."
    },
    {
      title: "BI Platforms",
      description: "Empower better decision-making and strategic planning with insight-driven analytics to uncover growth prospects and stay ahead of market dynamics."
    },
    {
      title: "IoT Platforms",
      description: "Leverage real-time information from IoT devices to boost predictive maintenance capabilities, optimize asset usage, and elevate operational efficiency."
    },
    {
      title: "Mobile Applications",
      description: "Provide enhanced access to SAP data and services at any time and any location to empower employees with the necessary information for informed decision-making."
    }
  ];
 
  const steps = [
    {
      title: "Reduced disruptions",
      points: [
        "Any software malfunction significantly affects overall operations. Our SAP assistance service helps quickly identify the root causes of issues and resolve them swiftly, minimizing the potential negative impacts on business continuity.",
      ]
    },
    {
      title: "Proactive surveillance",
      points: [
        "Our SAP support team employs advanced monitoring tools and strategies to detect potential issues before they escalate into disturbances, thereby preventing downtimes and performance bottlenecks.",
      ]
    },
    {
      title: "Enhanced system performance",
      points: [
        "We help in configuring and optimizing SAP software to reach peak efficiency, boost productivity, and ensure effective operations.",
      ]
    },
    {
        title: "Always current",
        points: [
          "SAP periodically releases updates with new features and fixes. Overlooking them can create complications with post-installation processes. Our SAP support group is consistently informed about new patches and can guarantee the efficient application of updates, keeping businesses at the forefront of advancements.",
        ]
      }
  ];
 
  const modules = {
    'SAP Process Integration/Process Orchestration': {
      description: "SAP PI/PO enables integration among diverse organizational systems and applications. It allows the orchestration of intricate business processes and provides a centralized platform for message interchange, data mapping, and routing."
    },
    'SAP Integration Suite': {
      description: "This offering provides tools and services to connect SAP applications with external systems and services. It includes pre-built integration content, adapters, and connectors to facilitate communication between cloud-based and on-premise applications."
    },
    'API s': {
      description: "APIs promote interoperability among varying software systems and enable them to communicate effectively. They support integration with external applications, mobile solutions, and IoT devices."
    },
    'Enterprise Service Bus': {
      description: "Enterprise Service Bus acts as middleware for merging various systems and applications throughout an organization. It manages message routing, transformation, and mediation between SAP and other systems."
    },
    'Custom Connections': {
      description: "Our specialists design and create connectors and interfaces tailored to your business's specific integration requirements that standard adapters or APIs cannot fulfill."
    },
   
   
  };
 
  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };
 
  return (
    <div className="bg-gray-100">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] bg-blue-900 text-white">
        <div className="absolute z-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold mb-4">
          SAP Integration
          </h1>
          <p className="text-white text-lg max-w-2xl">
          We will support you in forging a cohesive SAP environment through our extensive expertise in SAP integration honed over decades.
          </p>
        </div>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80">
          <img
            src={Contact}
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
      </div>
 
 
      {/* Content Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
          {/* Left Side Content */}
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-3">
                <h2 className="text-4xl font-bold md:text-5xl ">
                  <span className="text-emerald-400">:</span>
                  <span className="text-[#f57e20]">Establish a Robust Link Between Your Systems With SAP Connectivity.</span>
                </h2>
              </div>
 
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-black leading-relaxed">
                Isolated data, ineffective collaboration, and sluggish decision-making
                are frequent challenges arising from functioning in separate systems within
                 an organization. SAP connectivity can alleviate these obstacles, provided it
                  is executed by a seasoned integrator.
                </p>
               
                <p className="text-lg md:text-xl text-black leading-relaxed mt-4">
                Utilize our 20 years of knowledge and profound insight into SAP solutions
                to establish a coherent IT ecosystem and a singular source of truth for
                all your data organization-wide. Allow us to assist you in facilitating
                effective collaboration among departments throughout the company, ensuring
                data accuracy and relevance, and accelerating decision-making.
                </p>
              </div>
            </div>
          </div>
 
          {/* Right Side Image */}
          <div className="relative w-full md:w-1/2">
            <div className="relative w-full max-w-[600px] ml-auto">
              <img
                src={sap}
                alt="SAP"
                className="w-full h-auto relative z-10"
              />
              <img
                src={shadow}
                alt=""
                className="absolute -bottom-8 left-0 w-full h-auto z-0"
              />
            </div>
          </div>
        </div>
      </div>
 
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl  mb-12 max-w-7xl mx-auto">
            <span className="text-[#f57e20]">What We Can Connect</span>
          </h2 >
          <content className="ml-20 mt-5"><b>To create a unified IT architecture across the organization, we will help you establish integration between the following SAP and non-SAP systems:</b></content>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#f57e20]/20 group"
              >
                <h3 className="text-xl font-semibold text-[#f57e20] mb-6 pb-2 border-b border-gray-200 group-hover:border-[#f57e20]/30 transition-colors duration-300">
                  {challenge.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
 
      {/* Data Integration Section */}
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              <span className="text-[#f57e20]">Data Integration Magic</span>
            </h2>
           
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <p className="text-gray-800 text-lg mb-8 font-bold">
                Introducing Artihcus DataLark, our proprietary solution that simplifies
                data migration and integration to an effortless process. Based on your
                requirements, DataLark can:
              </p>
             
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#f57e20] mt-2 mr-3"></div>
                  <span className="text-gray-700 text-lg">
                    Manage data migration, integration, transformation, and validation.
                  </span>
                </li>
               
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#f57e20] mt-2 mr-3"></div>
                  <span className="text-gray-700 text-lg">
                    Import data from files, DBMS, applications, cloud services,
                    message queues, and beyond.
                  </span>
                </li>
               
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#f57e20] mt-2 mr-3"></div>
                  <span className="text-gray-700 text-lg">
                    Seamlessly integrate with WMS, MES, eCommerce, HR, and numerous
                    other systems.
                  </span>
                </li>
               
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#f57e20] mt-2 mr-3"></div>
                  <span className="text-gray-700 text-lg">
                    Automate event- or schedule-driven processes.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
 
      {/* Implementation Partner Section - Updated */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl  mb-10">
              <span className="text-[#f57e20]">SAP CONNECTIVITY SERVICES: OUR APPROACH TO ACHIEVING IT</span>
            </h2>
            <content className="ml-15  leading-relaxed">For over 20 years, we’ve refined numerous SAP Integration strategies. Depending on your requirements, our specialists will collaborate closely with your stakeholders to select the ideal strategy and ensure your integrations are both seamless and cost-efficient.</content>
            <div className="relative space-y-6 mt-5">
              {Object.entries(modules).map(([moduleName, moduleData], index) => (
                <div
                  key={index}
                  className={`mb-4 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    expandedSection !== null && expandedSection < index
                      ? 'transform translate-y-32'
                      : 'transform translate-y-0'
                  }`}
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full bg-[#f57e20] text-white p-6 flex justify-between items-center hover:bg-[#e06d1b] transition-all duration-300 rounded-lg relative group"
                  >
                    <span className="text-xl font-semibold">{moduleName}</span>
                    <span
                      className={`absolute right-6 text-2xl font-light transition-transform duration-300 ease-in-out ${
                        expandedSection === index ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      {expandedSection === index ? '−' : '+'}
                    </span>
                  </button>
                 
                  <div
                    className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden absolute w-full ${
                      expandedSection === index ? 'max-h-[1000px] opacity-100 z-10' : 'max-h-0 opacity-0 -z-10'
                    }`}
                    style={{
                      transitionDelay: expandedSection === index ? '0ms' : '0ms',
                      visibility: expandedSection === index ? 'visible' : 'hidden'
                    }}
                  >
                    <div
                      className={`bg-gray-50 p-8 rounded-b-lg shadow-inner transform transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        expandedSection === index
                          ? 'translate-y-0 opacity-100'
                          : '-translate-y-4 opacity-0'
                      }`}
                    >
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {moduleData.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
 
      {/* Add margin bottom to create space before footer */}
      <div className="mb-16"></div>
 
      {/* Scroll to Top Button */}
      <div className="fixed bottom-8 right-8">
        <button
          className="bg-[#f57e20] text-white p-3 rounded-full shadow-lg hover:bg-[#e06d1b] transition-colors duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
 
export default SapIntegration;
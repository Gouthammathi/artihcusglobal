import React, { useState } from "react";
import Contact from "../images/Contact.jpg";
import sap from "../images/3.jpg";
import shadow from "../images/shadow.png";
import { Minus, Plus } from "lucide-react";
 
const CornerDecoration = () => (
  <div className="absolute right-4 top-4 w-6 h-6">
    <div className="absolute right-0 top-0 w-3 h-3 border-t-2 border-r-2 border-white opacity-50" />
    <div className="absolute right-0 bottom-0 w-3 h-3 border-b-2 border-r-2 border-white opacity-50" />
  </div>
);
 
const SapMigration = () => {
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
    'SAP Cloud Migration Evaluation': {
      description: "In-depth evaluation and a detailed plan for SAP migration overseen by our team of experts in SAP and enterprise cloud transformation, which includes estimates on cost, timeline, and target architecture."
    },
    'SAP Migration and Integration': {
      description: "Transitioning and integrating SAP ECC, BW, Business Suite on HANA, S/4HANA, RISE with SAP, or any SAP application, along with adjacent applications/bolt-ons (Vertex, OpenText, etc.) from any setting."
    },
    'Data Center Transformation': {
      description: "Extensive expertise in transforming data centers, including custom applications and integrations, to deliver modern business capabilities in the cloud."
    },
    'Automated Migration And Management Platform': {
      description: "Coordination of the latest SAP and cloud technologies, including Azure Migrate, SUM/DMO, HSR, alongside proprietary automations, to ensure the highest quality, quickest timelines, and least disruption to business operations."
    },
    'Unmatched SAP Expertise': {
      description: "SAP Certified solutions for Amazon Web Services (AWS), Google Cloud, and Microsoft Azure."
    },
    'Comprehensive SAP And IT Service': {
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
          SAP Migration
          </h1>
          <p className="text-white text-lg max-w-2xl">
          Transition SAP and essential supporting applications to the cloud safely, ensuring minimal disruption to business operations.
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
                  <span className="text-[#f57e20]">Cost-effective, secure, and agile.</span>
                </h2>
              </div>
 
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-black leading-relaxed">
                Fast-track your SAP migration to the cloud and initiate your journey toward modernization to attain greater scalability, flexibility, and operational benefits that enhance value.
                </p>
                <div className="space-y-3">
                <h2 className="text-4xl font-bold md:text-5xl ">
                  <span className="text-emerald-400">:</span>
                  <span className="text-[#f57e20]">Simplify and accelerate your SAP transition to the cloud</span>
                </h2>
              </div>
 
                <p className="text-lg md:text-xl text-black leading-relaxed mt-4">
                As pioneers in migrating SAP to the public cloud, Protera employs a thoroughly designed cloud adoption framework complemented by automation to lower complexity, speed up timelines, and cut costs associated with critical application migrations compared to traditional methods.
                </p>
                <p className="text-lg md:text-xl text-black leading-relaxed mt-4">
                Whether it's SAP migration, upgrades to SAP HANA and S/4HANA, transformation with RISE with SAP, or comprehensive data center modernization, Protera has the expertise to migrate and upgrade even the most intricate enterprise systems, concentrating on measurable business results.
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
 
   
 
      {/* Data Integration Section */}
 
 
      {/* Implementation Partner Section - Updated */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl  mb-10">
              <span className="text-[#f57e20]">Artihcus SAP Migration Services Offer</span>
            </h2>
           
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
 
export default SapMigration;
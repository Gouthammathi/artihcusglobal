import React, { useState } from "react";
import Contact from "../images/Contact.jpg";
import custom from "../images/custom.jpg";
import { Minus, Plus } from "lucide-react";
 
const CornerDecoration = () => (
  <div className="absolute right-4 top-4 w-6 h-6">
    <div className="absolute right-0 top-0 w-3 h-3 border-t-2 border-r-2 border-white opacity-50" />
    <div className="absolute right-0 bottom-0 w-3 h-3 border-b-2 border-r-2 border-white opacity-50" />
  </div>
);
 
const Custom = () => {
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
    'Initiation': {
      description: "In the initiation phase, we establish the groundwork for an efficient and well-organized development process by clarifying objectives and setting up vital components.",
      subheading: "This phase includes the following important tasks:",
      points: [
        "Assembling and organizing a project team",
        "Clearly defining roles and responsibilities (RACI matrix)",
        "Choosing an effective communication strategy",
        "Determining the Quality Assurance method",
        "Agreeing on a strategy for post-release support",
        "Organizing the Project Management framework, which covers change management, project monitoring, and project management methodologies",
        "Configuring all necessary development tools and infrastructure (repositories, cloud provider accounts, version control systems, basic CI)"
      ]
    },
    'Planning': {
      description: "The aim of this phase is to develop a detailed project plan that outlines various phases, defined timelines, and key milestones.",
      subheading: "Defining the Planning Phase:",
      points: [
        "Defining project phases",
        "Setting key anticipated milestones",
        "Dividing the project into sprints",
        "Carefully prioritizing the project scopes"
      ]
    },
    'Execution and Monitoring': {
      description: "Our team meticulously oversees both the technical and operational elements of your project, providing thorough updates regarding progress and performance. Experience the rewarding journey of seeing your concept transformed into a fully developed product as we diligently foster its growth and success with consistent dedication and expertise. Following each iteration, we will deliver a strong product increment to the pre-production environment and grant stakeholders authorized access to assess its functionality and provide constructive feedback.",
      subheading: "Artihcus will offer you regular demonstrations. We will closely monitor and manage all project health metrics, including:",
      points: [
        "Continuous updates on project advancement",
        "Smart budget management",
        "Effective risk identification and mitigation"
      ],
      description: "Following each iteration, we will deliver a strong product increment to the pre-production environment and grant stakeholders authorized access to assess its functionality and provide constructive feedback.",
      subheading: "As a result, you can:",
      points: [
        "Observe the ongoing enhancement of functionality throughout the development cycle",
        "Stay updated on the project's progress and budget allocation through user-friendly visualizations, comprehensive documentation, and insightful analytics",
        "Gain essential insights into the current situation and future outlook, equipping you to make informed decisions at every step of the journey"
      ]
 
    },
    'Delivery': {
      description:<b>We launch the product directly onto the specified platform by:</b> ,
      points: [
        "Providing all necessary information according to platform specifications",
        "Ensuring compliance with security policies and regulations",
        "Set up and prepare the production environment for a smooth launch",
        "Preparing user guides for intuitive use",
      ]
    },
    'Product Maintenance and Support':
    {
      description: "We maintain open lines of communication with you post-release to ensure everything operates smoothly as planned. Our product support services include two specific methods:",
      description:<b>Provision of services under a Support and Maintenance agreement:</b>,
      points:[
        "We assess the necessary support hours, evenly distributing them over the agreed period.",
        "Our specialists will monitor product performance and provide regular updates for your review.",
        "For any desired modifications or enhancements regarding product functionality, we will develop and incorporate new features.",
        "If any warranty-related concerns arise, we will address and resolve them promptly without any charge.",
        "We provide a dedicated development team familiar with your product, which can function as an extension of your workforce, allowing you to place your full trust in them.",
      ]
    },
    'Coverage Of Warrenty Cases': {
      description: "We are fully confident in the quality of our delivered products and extend a warranty that includes any bugs identified during use. You can be assured that we will address and rectify them quickly at no extra cost to you.",
     
    }
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
            Custom Software Solutions
          </h1>
          <p className="text-white text-sm max-w-2xl">
            How We Structure the Custom Development Process.
          </p>
        </div>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80">
          <img
            src={Contact}
            alt="Background"
            className="w-full h-full object-cover opacity-100"
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
                <h2 className="text-4xl font-bold md:text-3xl ">
                  <span className="text-emerald-400">:</span>
                  <span className="text-[#f57e20]">What Can You Anticipate When You Partner with Us ?</span>
                </h2>
              </div>
 
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-black leading-relaxed">
                  Regardless of whether you possess a traditional vision for your solution or a
                  succinct outline of your concepts, we are here to assist you in turning them into
                  a concrete reality. Our partnership promises adaptability and alignment with your
                  specific needs:
                </p>
 
                <div className="text-lg md:text-xl text-black leading-relaxed mt-4 mb-8">
                  <ul className="list-none space-y-4">
                    {[
                      "A clearly articulated concept",
                      "A defined vision of the product's scope",
                      "Insight into your target demographic",
                      "A well-established business model"
                    ].map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-[#f57e20] mt-2"></div>
                        </div>
                        <span className="text-gray-700 flex-grow">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h2 className="text-4xl font-bold md:text-3xl ">
                    <span className="text-emerald-400">:</span>
                    <span className="text-[#f57e20]">What Can You Anticipate When You Partner with Us ?</span>
                  </h2>
                  <p className="text-lg md:text-xl text-black leading-relaxed">
                    We promise smooth integration and peak performance of your product across various platforms, including but not limited to the App Store, Google Play Marketplace, AWS, Google Cloud Platform, Microsoft Azure, and others.
                  </p>
                </div>
              </div>
            </div>
          </div>
 
          {/* Right Side Image */}
          <div className="relative w-full md:w-1/2">
            <div className="relative w-full max-w-[600px] ml-auto">
              <img
                src={custom}
                alt="SAP"
                className="w-full h-auto relative z-10"
              />
 
            </div>
          </div>
        </div>
      </div>
 
 
 
      {/* Data Integration Section */}
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              <span className="text-[#f57e20]">Stages of the Solution</span>
            </h2>
 
            <div className="space-y-6">
              {[
                {
                  title: "Discovery",
                  description: "The discovery stage is an essential component that lays the groundwork for successful product development. By engaging in thorough exploration and analysis, this stage reveals important insights, offering a clear blueprint that outlines the value, goals, and scope of your project.",
                  subheading: "Defining the Discovery Stage:",
                  items: [
                    "Cuts down on missed deadlines by 75%",
                    "Decreases development expenses by as much as 50%"
                  ]
                },
                {
                  title: "Estimation & Proposal",
                  description: "At Arthcus, we examine and evaluate the key variables that influence the cost of your product development. By analyzing these factors, we offer helpful insights to effectively minimize expenses",
                  subheading: "Including",
                  items: [
                    "Detailed risk assessment",
                    "Choice of technology stack",
                    "Breakdown of tasks",
                    "Time and effort estimation for project activities",
                    "High-level project timeline",
                    "Key presumptions regarding the project"
                  ]
                },
                {
                  title: "Discovery Phase Benefits",
                  description: "The discovery stage also yields crucial universal artifacts that serve as a valuable reference and provide input during the implementation phase, regardless of the vendor you select. By utilizing these resources, you can significantly improve your likelihood of delivering an MVP on budget and on time. You can view some examples of the artifacts you receive after the discovery stage above.",
                  subheading: "Further artifacts include:",
                  items: [
                    "User interface mock-ups / Prototype",
                    "Specific roadmap for the MVP phase",
                    "Implementation strategy",
                    "Documentation (both architectural and functional)"
                  ]
                }
              ].map((stage, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {stage.title}
                  </h2>
 
                  <p className="text-gray-600 mb-4">
                    {stage.description}
                  </p>
 
                  {stage.subheading && (
                    <h3 className="font-medium text-gray-800 mb-2">
                      {stage.subheading}
                    </h3>
                  )}
 
                  <ul className="space-y-2">
                    {stage.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <span className="text-[#f57e20] mt-1">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
 
      {/* Implementation Partner Section - Updated */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl  mb-10">
              <span className="text-[#f57e20]">Based on the insights we've gathered, we present you with an accurate estimate for the project cost along with our customized proposal</span>
            </h2>
            <div className="relative space-y-6 mt-5">
              {Object.entries(modules).map(([moduleName, moduleData], index) => (
                <div
                  key={index}
                  className="mb-4"
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full bg-[#f57e20] text-white p-6 flex justify-between items-center hover:bg-[#e06d1b] transition-all duration-300 rounded-lg relative group"
                  >
                    <span className="text-xl font-semibold">{moduleName}</span>
                    <span className="text-2xl font-light">
                      {expandedSection === index ? '−' : '+'}
                    </span>
                  </button>
 
                  <div
                    className={`transition-all duration-300 overflow-hidden ${expandedSection === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div
                      className={`bg-gray-50 p-8 rounded-b-lg shadow-inner transform transition-all duration-300 ${expandedSection === index
                          ? 'translate-y-0 opacity-100'
                          : '-translate-y-4 opacity-0'
                        }`}
                    >
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        {moduleData.description}
                      </p>
                      {moduleData.subheading && (
                        <h4 className="text-gray-800 font-medium mb-3">
                          {moduleData.subheading}
                        </h4>
                      )}
                      {moduleData.points && (
                        <ul className="space-y-3">
                          {moduleData.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start gap-3">
                              <div className="flex-shrink-0">
                                <div className="h-2 w-2 rounded-full bg-[#f57e20] mt-2"></div>
                              </div>
                              <span className="text-gray-700 flex-grow">{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
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
 
export default Custom;
import React, { useState } from "react";
import Contact from "../images/Contact.jpg";
import sap from "../images/7.jpg";
import shadow from "../images/shadow.png";
 
const CornerDecoration = () => (
  <div className="absolute right-4 top-4 w-6 h-6">
    <div className="absolute right-0 top-0 w-3 h-3 border-t-2 border-r-2 border-white opacity-50" />
    <div className="absolute right-0 bottom-0 w-3 h-3 border-b-2 border-r-2 border-white opacity-50" />
  </div>
);
 
const SapRollout = () => {
  const [expandedSection, setExpandedSection] = useState(null);
 
//   const challenges = [
//     {
//       title: "Complexity",
//       description: "SAP implementations can be notably intricate due to the extensive array of modules available. Our group will meticulously plan and execute the essential configurations to align with your organization's requirements."
//     },
//     {
//       title: "Customization vs. standardization",
//       description: "Finding the right equilibrium between necessary customizations and reliance on standard SAP procedures can prove challenging. Our specialists will assist you in achieving the optimal balance without heightening complexity or expenses."
//     },
//     {
//       title: "Data migration",
//       description: "Transferring data from legacy systems to SAP can be an intimidating endeavor. Our responsibility is to guarantee data accuracy, integrity, and consistency throughout the entire migration process."
//     },
//     {
//       title: "Performance",
//       description: "Enhancing SAP performance to meet business demands and user expectations can be arduous. Allow our skilled team to identify bottlenecks, fine-tune configurations, and scale infrastructure correctly to ensure that your new system operates at peak efficiency."
//     },
//     {
//       title: "Integrations",
//       description: "Integrating SAP with existing systems and third-party applications can be critical for your project. Our team will help ensure compatibility, data consistency, and seamless interoperability — even in diverse environments."
//     },
//     {
//       title: "Risk management",
//       description: "Proactively pinpointing and mitigating risks throughout the SAP implementation process is vital. From project delays to budget excesses to compliance hurdles — we understand common pitfalls and how to circumvent them."
//     }
//   ];
 
  const steps = [
    {
     
      points: [
        "Developing standard templates that provide the groundwork for the rollout, encompassing the fundamental business processes and system settings.",
        "Modifying templates to align with local business customs, legal stipulations, and adherence to regulations.",
        "Modifying templates to align with local business customs, legal stipulations, and adherence to regulations.",
        "Conducting system tests in a regulated setting to pinpoint and rectify any issues before official launch.",
        "Delivering detailed training programs to ensure all users are adept at navigating the new system.",
        "This initiative facilitates the expansion of your business, risk management, and operational optimization.",
      ]
    },  
  ];
 
  const implementationPhases = [
    {
      title: "Standardization",
      content: "In this phase, we ascertain the implementation strategy, recommend a high-level system architecture, and define a project implementation methodology."
    },
    {
      title: "Improved Efficiency",
      content: "By standardizing operations across all sites, firms can eradicate redundancies and enhance workflows."
    },
    {
      title: "Boosted Data Accuracy",
      content: "We examine your current business processes using the AS-IS model. Additionally, at this stage, our team performs a fit/gap analysis and showcases a demo solution. The final project scope (the TO-BE model) is outlined."
    },
    {
      title: "Expandability",
      content: "Our specialists customize SAP solutions, integrate them into your IT infrastructure, and conduct testing. If necessary, we can develop new functions."
    },
    {
      title: "Cost Effectiveness",
      content: "At this point, the SAP system goes live. We transfer data from legacy systems into the SAP production environment. Then, our team tests and verifies roles/authorizations for all users and prepares a postgo-live support strategy. This phase also includes end-user training."
    },
    {
      title: "Better Compilance",
      content: "Our experts resolve any lingering issues, complete integration with the SAP Solution Manager for operations, and offer go-live assistance. This is also when the users/support team begins their engagement with the new software."
    },
    {
        title: "Path To Success With Artihcus",
        content: "Achieving success with Artihcus involves seven key phases that can be customized to your business needs."
    },
    {
        title: "Evaluation And Strategy",
        content: "This preliminary stage consists of assessing the current business functions and IT framework. It entails identifying rollout objectives, project scope, and necessary resources. Guided by the findings, we formulate a comprehensive strategy that delineates the project timeline, key milestones, and risk management approaches."
    },
    {
        title: "Template Creation",
        content: "In this phase, our team develops a standardized template that specifies the principal business operations and system configurations. This template acts as the foundational plan for the rollout across various locales."
    },
    {
        title: "Localization",
        content: "We customize the standard template to fulfill the specific legal and business needs of each location. This encompasses local taxation laws, language, currency, and regulatory compliance. The objective is to assure that the SAP system operates effectively and adheres in each region."
    },
    {
        title: "Integration",
        content: "The new SAP systems must be interconnected with other existing platforms and third-party applications. This stage guarantees a seamless data flow across the organization and ensures that all systems operate cohesively."
    },
    {
        title: "Testing And Configuration",
        content: "Prior to system launch, it undergoes thorough testing to confirm that all components function as expected. This involves unit testing, integration testing, and user acceptance testing."
    },
    {
        title: "Training And Assistance",
        content: "The concluding phase involves instructing end users and providing ongoing support. Effective training is critical for user acceptance. Continuous support guarantees prompt resolution of any post- deployment issues."
    },
    {
        title: "Data Transfer",
        content: "This pivotal phase entails migrating existing data into the new SAP systems. It requires precise mapping and transformation to ensure data integrity and accuracy. A successful data transition is vital for the smooth functioning of the system post-implementation."
    },
   
   
  ];
 
  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };
 
  return (
    <div className="bg-gray-100">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] bg-blue-900 text-white">
        <div className="absolute z-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold mb-4">
            SAP Rollout Service
          </h1>
          <p className="text-white text-lg max-w-2xl">
            Deploy your pre-configured and established SAP procedures across various geographical areas or business divisions.
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
                <h2 className="text-4xl md:text-5xl ">
                  <span className="text-emerald-400">:</span>
                  <span className="text-[#f57e20]">SAP Implementation Rollout:</span>
                </h2>
              </div>
 
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-black leading-relaxed">
                SAP Implementation Rollout represents a procedure of disseminating an
                already established SAP system configuration from one site or unit within
                 a corporation to additional ones. This is a tactical initiative that
                  necessitates meticulous planning, tailoring, and implementation of
                   the system to new segments of the enterprise. The aim is to unify
                    business procedures and data management across distinct geographical
                    regions or corporate divisions while taking local necessities and regulations into account.
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
 
     
     
 
      {/* Implementation Steps Section */}
      <div className="bg-[#faf6ef] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-2xl font-bold mb-12 max-w-7xl mx-auto">
            <span className="text-[#f57e20]">To aid you in establishing a cohesive and uniform SAP environment, Artihcus offers the following services</span>
          </h2>
 
          <div className="max-w-7xl mx-auto space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-[#f57e20] mb-4">
                  {step.title}
                </h3>
               
                {step.subtitle && (
                  <p className="font-semibold text-black mb-4">
                    {step.subtitle}
                  </p>
                )}
 
                <ul className="list-disc list-inside space-y-3">
                  {step.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-black leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
 
      {/* Implementation Partner Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              <span className="text-[#f57e20]">Advantages of SAP Rollout</span>
            </h2>
            <div className="relative pb-32">
              {implementationPhases.map((phase, index) => (
                <div
                  key={index}
                  className={`mb-8 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    expandedSection !== null && expandedSection < index
                      ? 'transform translate-y-32'
                      : 'transform translate-y-0'
                  }`}
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full bg-[#f57e20] text-white p-6 flex justify-between items-center hover:bg-[#e06d1b] transition-all duration-300 rounded-lg relative group shadow-md"
                  >
                    <span className="text-xl font-semibold">{phase.title}</span>
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
                      expandedSection === index ? 'max-h-[1000px] opacity-100 z-10 mt-2' : 'max-h-0 opacity-0 -z-10'
                    }`}
                  >
                    <div
                      className={`bg-gray-50 p-8 rounded-b-lg shadow-inner transform transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        expandedSection === index
                          ? 'translate-y-0 opacity-100'
                          : '-translate-y-4 opacity-0'
                      }`}
                    >
                      <p className="text-gray-700 leading-relaxed text-lg">{phase.content}</p>
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
 
export default SapRollout;
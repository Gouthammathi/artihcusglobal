import React, { useState } from "react";
import Contact from "../images/Contact.jpg";
import sap from "../images/1.jpg";
import shadow from "../images/shadow.png";
import { useParams } from 'react-router-dom';
const CornerDecoration = () => (
  <div className="absolute right-4 top-4 w-6 h-6">
    <div className="absolute right-0 top-0 w-3 h-3 border-t-2 border-r-2 border-white opacity-50" />
    <div className="absolute right-0 bottom-0 w-3 h-3 border-b-2 border-r-2 border-white opacity-50" />
  </div>
);
 
const SapImplementation = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const { id } = useParams();
  const challenges = [
    {
      title: "Complexity",
      description: "SAP implementations can be notably intricate due to the extensive array of modules available. Our group will meticulously plan and execute the essential configurations to align with your organization's requirements."
    },
    {
      title: "Customization vs. standardization",
      description: "Finding the right equilibrium between necessary customizations and reliance on standard SAP procedures can prove challenging. Our specialists will assist you in achieving the optimal balance without heightening complexity or expenses."
    },
    {
      title: "Data migration",
      description: "Transferring data from legacy systems to SAP can be an intimidating endeavor. Our responsibility is to guarantee data accuracy, integrity, and consistency throughout the entire migration process."
    },
    {
      title: "Performance",
      description: "Enhancing SAP performance to meet business demands and user expectations can be arduous. Allow our skilled team to identify bottlenecks, fine-tune configurations, and scale infrastructure correctly to ensure that your new system operates at peak efficiency."
    },
    {
      title: "Integrations",
      description: "Integrating SAP with existing systems and third-party applications can be critical for your project. Our team will help ensure compatibility, data consistency, and seamless interoperability — even in diverse environments."
    },
    {
      title: "Risk management",
      description: "Proactively pinpointing and mitigating risks throughout the SAP implementation process is vital. From project delays to budget excesses to compliance hurdles — we understand common pitfalls and how to circumvent them."
    }
  ];
 
  const steps = [
    {
      title: "Understanding your needs and objectives",
      points: [
        "You complete an SAP implementation needs assessment.",
        "Our specialists scrutinize your assessment information.",
        "If necessary, we propose a Design Thinking workshop to better comprehend your requirements. Choosing the ideal SAP implementation strategy:"
      ]
    },
    {
      title: "Choosing the ideal SAP implementation strategy",
      subtitle: "Based on the needs assessment, we will typically recommend one of these strategies:",
      points: [
        "Cloud implementation to ensure scalability and flexibility and minimize infrastructure management burdens.",
        "On-premise implementation to gain full control and customization opportunities to satisfy specific business needs."
      ]
    },
    {
      title: "Business proposal",
      points: [
        "After all calculations and discussions, we present you with a business proposal",
        "Final adjustments, contract signing, and... we initiate the project."
      ]
    }
  ];
 
  const implementationPhases = [
    {
      title: "Discover",
      content: "In this phase, we ascertain the implementation strategy, recommend a high-level system architecture, and define a project implementation methodology."
    },
    {
      title: "Prepare",
      content: "The second stage involves kick-off meetings with your experts to confirm documentation, project plans, tracking, and reporting mechanisms. Together, we also establish a project team and its respective roles/responsibilities."
    },
    {
      title: "Explore",
      content: "We examine your current business processes using the AS-IS model. Additionally, at this stage, our team performs a fit/gap analysis and showcases a demo solution. The final project scope (the TO-BE model) is outlined."
    },
    {
      title: "Realize",
      content: "Our specialists customize SAP solutions, integrate them into your IT infrastructure, and conduct testing. If necessary, we can develop new functions."
    },
    {
      title: "Deploy",
      content: "At this point, the SAP system goes live. We transfer data from legacy systems into the SAP production environment. Then, our team tests and verifies roles/authorizations for all users and prepares a postgo-live support strategy. This phase also includes end-user training."
    },
    {
      title: "Run",
      content: "Our experts resolve any lingering issues, complete integration with the SAP Solution Manager for operations, and offer go-live assistance. This is also when the users/support team begins their engagement with the new software."
    }
  ];
 
  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };
 
  return (
    <div className="bg-gray-100">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] bg-blue-900 text-white">
        <h1 className="absolute z-20 text-4xl font-bold left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          SAP Implementation
        </h1>
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
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="text-emerald-400">:</span>
                  <span className="text-[#f57e20]">WE UNDERSTAND YOUR NEED FOR A SUCCESSFUL SAP IMPLEMENTATION ON THE FIRST ATTEMPT:</span>
                </h2>
              </div>
 
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-black leading-relaxed">
                  SAP provides the global standard software that empowers businesses
                  to attain growth, agility, and value. Nonetheless, to harness the
                  advantages of your SAP implementation, you require a reliable
                  vendor equipped with the appropriate expertise, experience, and
                  tools.
                </p>
 
                <p className="text-lg md:text-xl text-black leading-relaxed">
                  Our cadre of SAP specialists brings extensive knowledge and a
                  proven history of victorious implementations across various
                  sectors. With careful attention to every detail, we collaborate
                  closely with you to grasp your distinct business requirements and
                  goals, then support you throughout the execution and launch phases
                  — all while adhering to your timeline and budget limitations.
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
 
      {/* Challenges Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl  mb-12 max-w-7xl mx-auto">
            <span className="text-[#f57e20]">SAP IMPLEMENTATION CHALLENGES WE TACKLE</span>
          </h2>
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-[#f57e20] mb-4">
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
 
      {/* Implementation Steps Section */}
      <div className="bg-[#faf6ef] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl  mb-12 max-w-7xl mx-auto">
            <span className="text-[#f57e20]">SAP IMPLEMENTATION IN THREE SIMPLE STEPS</span>
          </h2>
 
          <div className="max-w-7xl mx-auto space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-[#f57e20] mb-4">
                  {step.title}
                </h3>
               
                {step.subtitle && (
                  <p className="font-semibold text-gray-700 mb-4">
                    {step.subtitle}
                  </p>
                )}
 
                <ul className="list-disc list-inside space-y-3">
                  {step.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-gray-700 leading-relaxed">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-emerald-400">:</span>
              <span className="text-[#f57e20]">Your Comprehensive SAP Implementation Partner</span>
            </h2>
 
            <p className="text-gray-700 text-lg mb-12">
              For SAP implementation projects, we adhere to SAP Activate and ASAP (Accelerated SAP) methodologies.
              By utilizing these well-established techniques, our experts can enhance time-to-value and — depending
              on the project — move from analysis to launch in as little as six months.
            </p>
 
            <div className="relative pb-32">
              {implementationPhases.map((phase, index) => (
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
 
export default SapImplementation;
import React, { useState } from "react";
import Contact from "../images/Contact.jpg";
import sap from "../images/2.jpg";
import shadow from "../images/shadow.png";
import { Minus, Plus } from "lucide-react";
 
const CornerDecoration = () => (
  <div className="absolute right-4 top-4 w-6 h-6">
    <div className="absolute right-0 top-0 w-3 h-3 border-t-2 border-r-2 border-white opacity-50" />
    <div className="absolute right-0 bottom-0 w-3 h-3 border-b-2 border-r-2 border-white opacity-50" />
  </div>
);
 
const SapSupport = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
 
  const challenges = [
    {
      title: "Post-implementation support",
      description: "We provide SAP post-implementation support that includes designing customized client success strategies, rapidly addressing any post-launch problems, and refining the overall system's performance for your sustained success."
    },
    {
      title: "Crisis support",
      description: "In the realm of SAP systems, crises can emerge from various sources: regulatory changes, employee turnover, technical faults, and more. Our expertise enables us to swiftly pinpoint the root causes, address them without delay, and implement preventive measures or develop contingency strategies, safeguarding operational stability."
    },
    {
      title: "SAP Application Oversight",
      description: "We take care of everything from installing, configuring, and maintaining SAP HANA in-memory databases to monitoring and optimizing them for top performance. Let our proficient team of database architects and administrators solve and rectify any associated issues and guarantee data integrity through robust backup and recovery strategies."
    },
    {
      title: "SAP HANA Oversight",
      description: "Enhancing SAP performance to meet business demands and user expectations can be arduous. Allow our skilled team to identify bottlenecks, fine-tune configurations, and scale infrastructure correctly to ensure that your new system operates at peak efficiency."
    },
    {
      title: "SAP ABAP Development",
      description: "Facing errors or issues with legacy code? Need modifications or custom applications developed using SAP ABAP? Our team specializes in ABAP code enhancement, modernization, and unit testing. We can also deliver structured documentation to facilitate smooth knowledge transfer."
    },
    {
      title: "Organizational transformation management:",
      description: "Efficient change management processes are vital for long-term success. Without the appropriate resources, your organization may encounter inefficiencies and reduced productivity. We assist in shaping a vision for the transformation, evaluating the skills and knowledge required, establishing methods to address concerns, defining key performance metrics, and creating and executing custom training programs for employees."
    },
    {
        title: "SAP licensing assistance",
        description: "Grasping the complexities of SAP software licensing is crucial to avoid unnecessary expenses. For a large organization, managing numerous products and license types can be daunting. We provide proactive solutions: quarterly assessments, compliance resolution, negotiations with SAP, and strategic planning, streamlining license management for efficiency and cost savings."
      },
      {
        title: "SAP UX/UI services",
        description: "If some traditional SAP interfaces lead to user dissatisfaction, our expert UX/UI team can assist. Harness our SAP Fiori and SAPUI5 development services to develop customized Fiori applications that are intuitive, visually appealing, and compatible with any device or screen."
      },
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
    'SAP S/4HANA Digital Core': [
      'Financial Accounting', 'Controlling', 'Treasury', 'Funds Management',
      'Investment Management', 'Project System', 'Real Estate Management',
      'Central Finance', 'Financial Consolidation', 'Materials Management',
      'Sales and Distribution', 'Plant Maintenance', 'Service Management',
      'Production Planning and Control', 'Quality Management', 'Asset Management',
      'IFRS16', 'Records Case Management', 'Document Management System',
      'Production Planning and Detailed Scheduling'
    ],
    'Digital Supply Chain Management': [
      'Extended Warehouse Management',
      'Transportation Management',
      'Logistics Business Network',
      'Advanced Planning and Optimization',
      'Event Management',
      'Track & Trace',
      'Integrated Business Planning',
      'Yard Logistics'
    ],
    'Product Lifecycle Management': [
      'Enterprise Product Engineering',
      'Enterprise Product Development',
      'Enterprise Portfolio and Project Oversight',
      'Recipe Formulation and Specification Oversight',
      'Environment, Health, and Safety Oversight',
      'Digital Manufacturing Cloud',
      'Engineering Control Hub',
      'Manufacturing Execution System',
      'Product Lifecycle Cost Assessment'
    ],
    'Business Intelligence': [
      'SAP BW/4HANA',
      'SAP Data Wisdom',
      'SAP Business Warehouse',
      'SAP Business Planning and Consolidation',
      'SAP BI-IP',
      'SAP Business Objects',
      'SAP Insight Cloud',
      'SAP Lumira',
      'SAP Crystal Reports'
    ],
    // Add similar arrays for other modules:
    'Asset Management': [
      'Enterprise Asset Oversight',
      'SAP Mobile Asset Oversight',
      'SAP Multi-Resource Coordination',
      'SAP Work Supervisor'
    ],
    'Procurement': [
      'Central Acquisition Hub',
      'SAP Enterprise Contract Oversight and Compilation',
      'S/4HANA Fiori applications',
      'SAP S/4HANA Central Acquisition',
      'SAP Global Trade Services',
      'SAP Ariba Catalog',
      'SAP Ariba Sourcing',
      'SAP Ariba Supplier Lifecycle and Performance Management',
      'SAP Ariba Purchasing and Billing',
      'SAP Ariba Agreements',
      'SAP Ariba Expenditure Analysis',
      'SAP Ariba Supplier Risk Assessment'
    ],
    'Human Capital Management': [
      'SAP SuccessFactors',
      'SAP Human Capital Oversight',
      'Employee Central',
      'Onboarding',
      'Performance and Objectives',
      'Recruitment Management',
      'Succession Planning and Development',
      'Learning Management',
      'Time Tracking',
      'Compensation Management',
      'Reporting',
      'Travel Coordination',
      'Organizational Development',
      'Personnel Management',
      'Personnel Time Tracking',
      'Payroll Management',
      'SAP Concur'
    ],
    'Customer Experience': [
      'SAP Commerce Cloud',
      'SAP Marketing Cloud',
      'SAP Sales Cloud',
      'SAP Qualtix'
    ],
    'Business Process Management': [
      'SAP Intelligent Business Process Governance',
      'SAP Signavio',
      'SAP Celonis Process Analysis'
    ],
    'Integration Technologies': [
      'SAP NetWeaver Process Integration',
      'SAP NetWeaver Business Process Management',
      'SAP Business Objects Data Services',
      'SAP NetWeaver Development Studio',
      'SAP Cloud Platform Integration',
      'SAP Integration Suite for Business Technology Platform'
    ],
    'Governance, Risk, and Compliance and Security': [
      'SAP Enterprise Threat Detection',
      'Field Masking and UI Logging for SAP S/4HANA',
      'SAP GRC',
      'SAP Identity Management',
      'SAP Single Sign-On'
    ]
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
          SAP Assistance Service
          </h1>
          <p className="text-white text-lg max-w-2xl">
          Delegate the upkeep of your systems to a reliable partner and concentrate on what truly matters.
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
                  <span className="text-[#f57e20]">Even an Effectively Implemented SAP System Requires Assistance to Operate Efficiently. Rely on Us to Manage This</span>
                </h2>
              </div>
 
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-black leading-relaxed">
                Initiating a new SAP system is just part of the journey. Regardless of the excellence
                of your system's implementation, the subsequent maintenance phase is crucial, where you
                need to keep your platform current, troubleshoot issues as they arise, and make enhancements
                 to ensure optimal performance.
                </p>
 
                <p className="text-lg md:text-xl text-black leading-relaxed">
                Utilize our specialized SAP assistance service for comprehensive peace of mind.
                Allow our team to promptly resolve any ongoing issues within the prescribed SLAs,
                 ensuring the seamless operation of your entire SAP ecosystem.
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
          <h2 className="text-3xl md:text-4xl font-bold  mb-12 max-w-7xl mx-auto">
            <span className="text-[#f57e20] ">SAP Assistance Services We Provide</span>
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
 
      {/* SAP Support Tiers Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-emerald-400">:</span>
              <span className="text-[#f57e20]">Three Tiers of Our SAP Support Service</span>
            </h2>
 
            <p className="text-gray-700 text-lg mb-12">
              Artihcus presents three levels of our SAP support service, each crafted to meet various needs and provide diverse opportunities
            </p>
 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "L1 Support",
                  services: [
                    "Gathering client information",
                    "Identifying and localizing system concerns",
                    "Analyzing and determining impacts"
                  ]
                },
                {
                  title: "L2 Support",
                  services: [
                    "Managing maintenance/repair requests",
                    "Correcting errors that do not require system alterations",
                    "Implementing supplementary solutions as warranted"
                  ]
                },
                {
                  title: "L3 Support",
                  services: [
                    "Addressing intricate issues necessitating expertise",
                    "Utilizing additional resources if required",
                    "Potentially involving vendor support"
                  ]
                }
              ].map((tier, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {tier.title}
                  </h2>
                 
                  <ul className="space-y-3">
                    {tier.services.map((service, serviceIndex) => (
                      <li
                        key={serviceIndex}
                        className="flex items-start"
                      >
                        <span className="text-orange-500 mr-2">•</span>
                        <span className="text-gray-700 leading-relaxed">
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
 
      {/* Implementation Partner Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16">
              <span className="text-[#f57e20]">SAP Products and Modules We Support</span>
            </h2>
            <div className="space-y-6">
              {Object.entries(modules).map(([moduleName, subModules], index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full p-6 bg-[#f57e20] text-white flex justify-between items-center hover:bg-[#e06d1b] transition-all duration-200"
                  >
                    <span className="text-lg font-semibold tracking-wide">{moduleName}</span>
                    {expandedSection === index ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </button>
                 
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      expandedSection === index ? 'max-h-[500px]' : 'max-h-0'
                    } overflow-hidden`}
                  >
                    {subModules.length > 0 && (
                      <div className="bg-gray-50 p-8 border border-gray-200">
                        <div className="flex flex-wrap gap-4">
                          {subModules.map((subModule, idx) => (
                            <span
                              key={idx}
                              className="px-5 py-2.5 bg-gray-200 text-gray-800 rounded-full text-sm font-medium transform transition-all duration-200 hover:scale-105 hover:bg-gray-300"
                            >
                              {subModule}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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
 
export default SapSupport;
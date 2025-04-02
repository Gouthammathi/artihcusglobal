import React, { useState } from "react";
import Contact from "../images/Contact.jpg";
import infra from "../images/infra.jpg";
import shadow from "../images/shadow.png";
import { Minus, Plus } from "lucide-react";
 
const CornerDecoration = () => (
  <div className="absolute right-4 top-4 w-6 h-6">
    <div className="absolute right-0 top-0 w-3 h-3 border-t-2 border-r-2 border-white opacity-50" />
    <div className="absolute right-0 bottom-0 w-3 h-3 border-b-2 border-r-2 border-white opacity-50" />
  </div>
);
 
const DevOpsServicesPills = () => {
  const services = [
    ["DevOps consulting", "Deployment, design, and automation", "Continuous delivery", "Infrastructure-as-code", "Google Cloud Platform"],
    ["Containerization", "Container orchestration", "CI/CT/CD", "Automation & optimization", "Infrastructure monitoring and auditing", "Disaster recovery"],
    ["DevOps as a service", "WinOps services"]
  ];
 
  return (
    <div className="space-y-4 mt-6">
      {services.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap gap-3">
          {row.map((service, serviceIndex) => (
            <div
              key={serviceIndex}
              className="bg-[#f3e5e5] text-gray-800 px-6 py-2 rounded-full text-sm md:text-base whitespace-nowrap hover:bg-[#f57e20] hover:text-white transition-colors duration-300"
            >
              {service}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
 
const TechStackPills = () => {
  const technologies = [
    "Apache",
    "Nginx",
    "AWS",
    "Azure",
    "Google Cloud Platform",
    "Kubernetes",
    "Docker",
    "Jenkins",
    "Bamboo",
    "Zabbix",
    "New Relic, etc."
  ];
 
  return (
    <div className="space-y-4 mt-6">
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-[#f3e5e5] text-gray-800 px-6 py-2 rounded-full text-sm md:text-base whitespace-nowrap hover:bg-[#f57e20] hover:text-white transition-colors duration-300"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};
 
const Infrastructure = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
 
  const challenges = [
    {
      title: "Cloud Consulting",
      description: "To guarantee cost efficiency and optimal performance of your cloud applications, our specialists meticulously analyze your business needs to devise a customized infrastructure and workload strategy."
    },
    {
      title: "Cloud solution development",
      description: "With extensive experience in deploying cloud solutions, our infrastructure architects assist you in defining the outcomes expected from your future system and then use their expertise to design, construct, and implement the desired solutions."
    },
    {
      title: "Cloud migration services",
      description: "Artihcus’s team is equipped to assist your company in moving from outdated systems to a versatile cloud infrastructure featuring modern computing capabilities, enhanced networking speeds, and ample storage, enabling you to redirect your resources toward other critical strategic objectives."
    },
    {
      title: "Cloud infrastructure management",
      description: "We commit to developing well-structured architectures for your cloud solutions and can also provide DevOps services that facilitate efficient orchestration, upkeep, and performance of your applications."
    },
    {
      title: "Cloud monitoring and maintenance",
      description: "To ensure optimal operation for your cloud applications, our specialists utilize their skills in round- the-clock monitoring and analytics, swiftly addressing any issues that arise, be it related to performance, functionality, or other cloud concerns."
    },
   
    {
      title: "Cloud integration services",
      description: "Beyond creating effective cloud infrastructures, we also aid our clients in establishing all necessary integrations for successful operations, whether with proprietary solutions, other cloud services, or specified third-party vendors."
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
    'Network Visibility': {
      description: "When planning, designing, deploying, configuring, and integrating interconnected open infrastructures, we enhance visibility across the network to enable security teams to detect, prevent, and neutralize attacks as soon as possible."
    },
    'Hosts and endpoints security': {
      description: "Artihcus professionals devise, design, deploy, and manage security measures for hosts/operating systems while also implementing file integrity monitoring solutions to safeguard your applications and ensure uninterrupted business operations."
    },
    'Malware control and prevention': {
      description: "Our teams offer advanced threat protection measures that can respond to sophisticated threats and shield your business from complex malware targeting sensitive information."
    },
    'DevOps Services': {
      description: "For organizations seeking to reduce the systems development life cycle and achieve continuous delivery while maintaining high software quality, we provide a variety of DevOps services that integrate development and IT operations into a single offering:",
      renderContent: () => <DevOpsServicesPills />
    },
    'Tech Stack': {
      description: "Our specialists leverage industry-leading technologies and platforms to deliver robust and scalable solutions:",
      renderContent: () => <TechStackPills />
    },
    'Run': {
      description: "Our experts resolve any lingering issues, complete integration with the SAP Solution Manager for operations, and offer go-live assistance. This is also when the users/support team begins their engagement with the new software."
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
          Infrastructure Services
 
          </h1>
          <p className="text-white text-lg max-w-2xl">
          Speed up your digital transformation securely!
          </p>
        </div>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80">
          <img
            src={Contact}
            alt="Background"
            className="w-full h-full object-cover "
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
                  <span className="text-[#f57e20]">Infrastructure Services</span>
                </h2>
              </div>
 
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-black leading-relaxed">
                In today’s digital landscape, infrastructure serves as the foundation for contemporary businesses, and Artihcus possesses all the necessary expertise for effective development, management, and upkeep. Whether your focus is on cloud services, infrastructure security, DevOps, IoT, or transitioning to SAP S4/HANA, we are here to assist you.
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
                src={infra}
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
            <span className="text-[#f57e20]">Cloud infrastructure services</span>
          </h2 >
          <content className="ml-20 mt-5">Artihcus's proficiency in delivering cloud services and constructing cloud infrastructures encompasses everything from consulting to development, management, and maintenance.</content>
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
     
 
      {/* Implementation Partner Section - Updated */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl  mb-10">
              <span className="text-[#f57e20]">INFRASTRUCTURE SECURITY SERVICES</span>
            </h2>
            <content className="ml-15  leading-relaxed">Recognizing that internet-connected open infrastructures often face significant cyber threats, we are here to help you secure and streamline your digital transformation.</content>
            <div className="relative space-y-6 mt-5">
              {Object.entries(modules).map(([moduleName, moduleData], index) => (
                <div
                  key={index}
                  className="mb-16"
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
                    className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden relative ${
                      expandedSection === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div
                      className={`bg-gray-50 p-8 rounded-b-lg shadow-inner transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        expandedSection === index
                          ? 'translate-y-0 opacity-100'
                          : '-translate-y-4 opacity-0'
                      }`}
                    >
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {moduleData.description}
                      </p>
                      {moduleData.renderContent && moduleData.renderContent()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
 
      {/* IoT Services Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-10">
              <span className="text-[#f57e20]">IoT Development Services</span>
            </h2>
            <content className="ml-15 leading-relaxed mb-12 block">
              The specialists at Artihcus provide their knowledge in delivering advanced IoT solutions that enable our clients to leverage device-generated data for optimal business results.
            </content>
           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "IoT Consulting",
                  description: "With a Research and Development team available, we ensure a thorough evaluation of your business requirements and comprehensive risk assessment, which, when combined with our extensive experience, leads to the development of IoT solutions that significantly enhance your organization's performance."
                },
                {
                  title: "Custom IoT Development",
                  description: "Our teams design both native and cross-platform IoT applications that facilitate intelligent access to and analysis of data produced by smart devices, thus equipping businesses with insights into their customers' desires and needs, closely monitoring their performance, identifying weaknesses, and making more informed decisions."
                },
                {
                  title: "IoT Integration Services",
                  description: "Artihcus's expertise also encompasses the creation of intricate platforms that enable bidirectional communication among IoT devices, systems, and analytics. The IoT integration services we provide empower businesses to realize increased agility, foster innovation, and enable smart decisions based on accurate data."
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#f57e20]/20 group"
                >
                  <h3 className="text-xl font-semibold text-[#f57e20] mb-6 pb-2 border-b border-gray-200 group-hover:border-[#f57e20]/30 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
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
 
export default Infrastructure;
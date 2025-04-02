import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
 
// SAPCard component remains the same
const SAPCard = ({ title, description, icon, onClick }) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 max-w-xs flex flex-col items-center text-center relative group">
      <div className="absolute inset-0 rounded-lg border border-orange-500/30"></div>
      <div className="w-12 h-12 mb-4 text-orange-500">
        {icon ? (
          <img src={icon} alt={`${title} Icon`} className="w-full h-full" />
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full"
          >
            <path
              d="M3 8l9-5 9 5v8l-9 5-9-5V8z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 8l9 5 9-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <h2 className="text-white text-xl font-bold mb-3">{title}</h2>
      <p className="text-gray-300 mb-6 text-sm">{description}</p>
      <button
        onClick={onClick}
        className="px-4 py-1.5 rounded-md
          bg-transparent text-orange-500 border-2 border-orange-500
          hover:bg-orange-500 hover:text-white
          active:bg-orange-600 active:border-orange-600
          transform transition-all duration-200 ease-in-out
          hover:scale-105 active:scale-95
          cursor-pointer
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50
          shadow-md hover:shadow-lg
          text-sm"
      >
        View More
      </button>
    </div>
  );
};
 
const Services = () => {
  const navigate = useNavigate();
  const sapServices = [
    {
      title: "SAP Implementation",
      description: "Deploy SAP to streamline processes, enhance efficiency, train users, and ensure success.",
      icon: null,
      route: "sap-implementation"
    },
    {
      title: "SAP Rollouts",
      description: "Standardize processes, ensure data consistency, and integrate operations across locations.",
      icon: null,
      route: "sap-rollouts"
    },
    {
      title: "SAP Support",
      description: "Ensure smooth operations, resolve issues, and optimize system performance with SAP support.",
      icon: null,
      route: "sap-support"
    },
    {
      title: "SAP Migration",
      description: "SAP Migration moves systems and data to new environments, ensuring minimal business disruption.",
      icon: null,
      route: "sap-migration"
    },
    {
      title: "SAP Application Management Services",
      description: "SAP AMS ensures reliable support, performance optimization, and seamless integration for evolving business needs.",
      icon: null,
      route: "sap-app-mng"
    },
    {
      title: "SAP Security Services",
      description: "SAP Security protects systems with access control, encryption, and audits, ensuring secure operations.",
      icon: null,
      route: "sap-security-services"
    },
    {
      title: "SAP Integration",
      description: "SAP Integration links systems for seamless data exchange, unified workflows, and real-time insights.",
      icon: null,
      route: "sap-integration"
    },
    {
      title: "SAP Migration To Cloud",
      description: "SAP Cloud Migration moves systems to the cloud for scalability, cost savings, and agility.",
      icon: null,
      route: "sap-migrate"
    },
    {
      title: "SAP S/4 HANA On Premis",
      description: "SAP S/4HANA On-Premise offers full control, customization, and flexibility for compliance-focused businesses.",
      icon: null,
      route: "sap-hana"
    },
    {
      title: "SAP S/4 HANA RISE with SAP",
      description: "SAP S/4HANA RISE offers a cloud-based transformation with services for modernizing and optimizing operations.",
      icon: null,
      route: "sap-rise"
    },
    {
      title: "SAP S/4 HANA Grow with SAP",
      description: "SAP S/4HANA Grow supports SMEs with scalable digital transformation and continuous growth.",
      icon: null,
      route: "sap-grow"
    },
    {
      title: "Custom Software",
      description: "Custom software delivers personalized features, enhancing efficiency, scalability, and user experience for unique business needs.",
      icon: null,
      route: "custom-soft"
    },
    {
      title: "Infrastructure Services",
      description: "Infrastructure Services ensure reliable, scalable, and secure IT operations through server management, cloud services, and security.",
      icon: null,
      route: "infra-serv"
    },
    {
      title: "Mobile Development",
      description: "Mobile Development creates apps for smartphones and tablets, focusing on UX, performance, and seamless integration.",
      icon: null,
      route: "mob-dev"
    },
    {
      title: "Web Development",
      description: "Web Development creates and maintains websites, combining front-end and back-end for functionality and responsiveness.",
      icon: null,
      route: "web-dev"
    },
    {
      title: "AI Solutions",
      description: "AI Solutions automate tasks, enhance decision-making, and optimize operations through technologies like machine learning and data analytics.",
      icon: null,
      route: "ai-solutions"
    },
    {
      title: "AI Services",
      description: "AI Services provide consulting and technologies like machine learning and automation to optimize processes and drive innovation.",
      icon: null,
      route: "ai-services"
    },
  ];
 
  // Changed initial state to show first 11 SAP cards
  const [displayedCards, setDisplayedCards] = useState(sapServices.slice(0, 11));
  const [activeButton, setActiveButton] = useState('SAP');
 
  const handleViewMore = (route) => {
    const cleanRoute = route.replace('/services/', '');
    navigate(`/services/${cleanRoute}`);
  };
 
  const handleSAPServices = () => {
    setDisplayedCards(sapServices.slice(0, 11)); // Show all 11 SAP services
    setActiveButton('SAP');
  };
 
  const handleApplicationServices = () => {
    setDisplayedCards(sapServices.slice(11, 15));
    setActiveButton('Application');
  };
 
  const handleArtificialIntelligence = () => {
    setDisplayedCards(sapServices.slice(15, 17));
    setActiveButton('AI');
  };
 
  return (
    <div className="bg-black">
      <div className="relative bg-cover bg-center py-16">
        <div className="absolute inset-0 bg-black"></div>
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">Services We Offer</h2>
            <p className="text-white text-lg mb-6">
              Modernize and automate your warehouse.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button
                onClick={handleSAPServices}
                className={`px-6 py-2 rounded-md text-white transition-colors duration-300 ${activeButton === 'SAP' ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-300 text-gray-900 hover:bg-orange-500 hover:text-white'}`}
              >
                SAP Services
              </button>
              <button
                onClick={handleApplicationServices}
                className={`px-6 py-2 rounded-md transition-colors duration-300 ${activeButton === 'Application' ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-300 text-gray-900 hover:bg-orange-500 hover:text-white'}`}
              >
                Application Services
              </button>
              <button
                onClick={handleArtificialIntelligence}
                className={`px-6 py-2 rounded-md transition-colors duration-300 ${activeButton === 'AI' ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-300 text-gray-900 hover:bg-orange-500 hover:text-white'}`}
              >
                Artificial Intelligence
              </button>
            </div>
          </div>
 
          {/* Grid showing 4 cards per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedCards.map((service, index) => (
              <SAPCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                onClick={() => handleViewMore(service.route)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Services;
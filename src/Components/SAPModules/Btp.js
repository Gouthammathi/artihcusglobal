import React, { useState } from 'react';
import headerImage from '../images/header.jpg';
import btpImage from '../images/sap-btp.png';
import adaImage from '../images/btp-ada.png';
import daImage from '../images/btp-Da.png';
import integrationImage from '../images/btp-Integration.png';
 
function Btp() {
  const [activeInfoIndex, setActiveInfoIndex] = useState(null);
 
  // Function to handle button click
  const handlePlusButtonClick = (index, e) => {
    e.stopPropagation();
    setActiveInfoIndex(activeInfoIndex === index ? null : index);
  };
 
  // Accordion items
  const accordionItems = [
    {
      title: 'Application Development and Automation',
      info: (
        <div className="flex flex-wrap">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 px-4">
            <p className="text-base mb-4">
              Enhance your company’s applications and streamline business processes by leveraging the SAP Build portfolio! Take advantage of both professional and no-code tools to accelerate application creation, while robotic process automation (RPA) bots and pre-built processes simplify business operations. Simplify critical business tasks and increase efficiency by seamlessly integrating SAP S/4HANA "Clean Core" add-ons. By incorporating customizable add-ons, you can extend the capabilities of SAP 3 Cloud ERP solutions like SAP SuccessFactors and SAP Ariba, adding specialized features to meet specific business needs.</p>
            <ul className="space-y-4">
              <li>
                <span className="text-orange-400 font-semibold">SAP Build Code</span> <br></br>Enhance efficiency by leveraging AI-driven code creation with Joule Copilot, designed for Java and JavaScript projects, Node.js environments, and mobile application development.
              </li>
              <li>
                <span className="text-orange-400 font-semibold">SAP Build Work Zone</span><br></br> Collaborate efficiently with teams and partners using SAP Build Work Zone, a unified platform for brainstorming, prototyping, and project management.
              </li>
              <li>
                <span className="text-orange-400 font-semibold">SAP BTP ABAP Environment</span><br></br>Create and launch ABAP cloud applications and add-ons with ease using the SAP BTP ABAP Environment.
              </li>
            </ul>
          </div>
          {/* Right Content */}
          <div className="w-full lg:w-1/2 px-4">
            <img
              src={adaImage}
              alt="Application Development and Automation"
              className="w-full h-auto mb-4"
            />
            <ul className="space-y-4">
              <li>
                <span className="text-orange-400 font-semibold">SAP Build Apps</span><br></br> Easily develop and improve business applications, automate tasks, and design websites for enterprises.
              </li>
              <li>
                <span className="text-orange-400 font-semibold">SAP Build Process Automation</span><br></br> Streamline your business operations with SAP Build’s Process Automation capabilities, improving workflows and boosting productivity.
              </li>
              <li>
                <span className="text-orange-400 font-semibold">SAP Fiori</span><br></br> Enhance the user experience with SAP Fiori’s modern design and flexible interface, simplifying workflows and boosting efficiency.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Data and Analytics',
      info: (
        <div className="flex flex-wrap">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 px-4">
            <p className="text-base mb-4">
              With our comprehensive data and analytics solutions, you can ensure proper governance, aggregation, collection, and management of your data, while gaining valuable insights:
            </p>
            <ul className="space-y-4">
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <span></span> Access critical insights wherever your data resides, enabling informed decision-making regardless of data location.
                </li>
                <li>
                  <span></span> Transform your planning processes with a business data fabric, facilitating agile decision-making and strategy development.
                </li>
              </ul>
 
              <li>
                <span className="text-orange-400 font-semibold">SAP HANA Cloud</span><br></br>This future-focused, in-memory database management system equips architects with the tools to create and implement smart data solutions on a large scale.
              </li>
              <li>
                <span className="text-orange-400 font-semibold">SAP Datasphere</span> <br></br>Boost efficiency by merging data integration, cataloging, semantic modeling, data storage, and workload virtualization for both SAP and non-SAP data sources.
              </li>
            </ul>
          </div>
          {/* Right Content */}
          <div className="w-full lg:w-1/2 px-4">
            <img
              src={daImage} // Use an appropriate image for Data and Analytics
              alt="Data and Analytics"
              className="w-96 h-52 mb-4"
            />
            <ul className="space-y-4">
              <li>
                <span className="text-orange-400 font-semibold">SAP Analytics Cloud</span> <br></br>Gain detailed analytics and strategic planning capabilities through seamless integration with SAP applications and external data sources, enabling a comprehensive understanding of your business.
              </li>
              <li>
                <span className="text-orange-400 font-semibold">SAP Master Data Governance</span><br></br>Improve the reliability of essential business data with a centralized approach to managing and overseeing master data, ensuring accuracy, consistency, and uniformity.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
 
    {
      title: 'Integration',
      info: (
        <div className="flex flex-wrap">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 px-4">
            <p className="text-base mb-4">
              Integrate all of your enterprise's diverse systems into a unified landscape to streamline business processes!</p>
            <ul className="space-y-4">
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <span></span> Accelerate results with thousands of prebuilt integrations and connectors to SAP and third-party applications, ensuring transparency and business expertise throughout the integration process.</li>
                <li>
                  <span></span> Simplify integration with AI-powered development tools, driving innovation and enabling scalable, agile operations across diverse IT environments.</li>
              </ul>
            </ul>
          </div>
 
          {/* Right Content */}
          <div className="w-full lg:w-1/2 px-4">
            <img
              src={integrationImage} // Replace this with your actual image source for Pick-Pack
              alt="Integration"
              className="w-full h-auto mb-4"
            />
          </div>
          <p className="text-orange-400 font-semibold ml-4 mt-6">SAP Integration Suite</p><br />
          <p className="ml-4 mt-2">Interface and automate your business processes easily with an extensive set of integrations, connectors, APIs, and best practices, ensuring faster ROI and practical growth.</p>
        </div>
      ),
    },
 
    {
      title: 'Extended Planning and Analysis',
      info: (
        <div className="flex flex-wrap">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 px-4">
            <p className="mt-6 mb-10">Leverage data and technology strategically!</p>
            <p className="mt-4 mb-10">
              The concept of Extended Planning and Analysis goes beyond simple product offerings. Building on existing SAP BTP solutions for integration, data analysis, and artificial intelligence, it drives key business benefits in the following areas:
            </p>
            <ul className="space-y-4 mt-4">
              <li>
                <span className="text-orange-400 font-semibold">Financial Planning</span><br></br>Perform real-time analysis for both planning and actuals within a single integrated solution, enhancing financial decision-making processes.
              </li>
              <li>
                <span className="text-orange-400 font-semibold">Workforce Planning</span><br></br> Drive positive change in workforce management by ensuring optimal utilization of resources and talent.
              </li>
            </ul>
          </div>
 
          {/* Right Content */}
          <div className="w-full lg:w-1/2 px-4">
            <img
              src={require('../images/btp-planning.png')}
              alt="Extended Planning and Analysis"
              className="w-full h-auto mb-4"
            />
            <ul className="space-y-4 mt-4">
              <li>
                <span className="text-orange-400 font-semibold">Supply Chain Planning</span><br></br> Tailored SAP solutions designed to meet the specific needs of your business can improve supply chain resilience and productivity.
              </li>
              <li>
                <span className="text-orange-400 font-semibold">Sales Planning</span><br></br> Unlock growth opportunities and market potential through strategic sales planning solutions that maximize revenue and sales quotas.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Artificial Intelligence',
      info: (
        <div className="flex flex-wrap">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 px-4">
            <p className="font-bold text-black mt-6">Enhance your applications with AI-driven capabilities!</p>
            <ul className="list-disc pl-5 mt-4 space-y-4">
              <li>Integrate AI into your applications in a flexible and scalable way by using ready-to-use, business-specific, pre-trained models.</li>
              <li>Create intelligent assistants tailored to your specific needs and seamlessly incorporate AI capabilities into existing systems and processes using the power of the SAP Generative Artificial Intelligence Center.</li>
              <li>Throughout the lifecycle of AI solutions, ensure data privacy, compliance with regulatory requirements, and act ethically and transparently.</li>
            </ul>
            <p className="text-orange-400 font-semibold mt-8">SAP AI Business Services</p>
            <p classname="mt-2">Enhance your applications with intelligence by leveraging AI models pre-trained on business-critical data, enabling quick integration and deployment.</p>
          </div>
 
          {/* Right Content */}
          <div className="w-full lg:w-1/2 px-4">
            <img
              src={require('../images/btp-ai.png')}
              alt="Artificial Intelligence"
              className="w-full h-72 mb-4"
            />
            <p className="text-orange-400 font-semibold mt-10">SAP AI Core & AI Launchpad</p>
            <p classname="mt-2">Achieve seamless deployment and operation of AI models at scale with SAP AI Core, while ensuring data privacy and cost-effectiveness. SAP AI Launchpad offers centralized management of the entire machine learning lifecycle, improving collaboration and efficiency.</p>
          </div>
          <div><p className="text-orange-400 font-semibold mt-10 ml-5">Gen AI Hub</p>
            <p className="ml-5 mt-2">Gen AI Hub is a centralized SAP BTP platform that accelerates the creation and sharing of AI models, algorithms, and best practices, driving innovation and collaboration across your organization. Harness the collective intelligence of your teams to co-create and refine AI solutions that foster continuous improvement and agility in addressing evolving business challenges.</p>
          </div>
        </div>
      ),
    },
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
              <h2 className="text-2xl font-bold mt-6 text-white">SAP BTP</h2>
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
              <div className="inline-block mb-4">
                <span className="text-2xl font-bold text-orange-400 ml-48">SAP BTP</span>
              </div>
            </div>
            <p className="leading-relaxed mt-4">
              SAP BTP (Business Technology Platform) is a comprehensive, open, multi-cloud Platform-as-a-Service
              (PaaS) offering from SAP. It provides a wide range of technologies and services designed to support
              the development, integration, and extension of SAP applications and solutions. SAP BTP enables
              businesses to build, integrate, and operate applications and services more efficiently in the cloud.
            </p>
            <p className="leading-relaxed mt-4">
              SAP BTP empowers real-time data management, advanced analytics, seamless system integration, rapid
              development of custom solutions, and the creation of add-ons for existing systems.
            </p>
          </div>
 
          {/* Image Section */}
          <div className="w-full lg:w-1/2 px-4 flex justify-end">
            <img
              src={btpImage}
              alt="Business Technology Platform"
              className="max-w-full sm:w-96 lg:w-[400px] h-80 "
              loading="lazy"
            />
          </div>
        </div>
      </div>
 
      {/* Accordion Section */}
      <div className="container mx-auto pb-5">
        <div className="flex flex-wrap justify-center px-4 sm:px-8 md:px-16 lg:px-36">
          <div className="w-full lg:flex flex-col items-center">
            {accordionItems.map((item, index) => (
              <div key={index} className="mb-4 w-full">
                <div className="relative bg-orange-400 rounded-md shadow-lg w-full sm:w-[500px] lg:w-[1000px]">
                  {/* Static Box (Heading) */}
                  <div className="px-8 py-6 text-white text-m">{item.title}</div>
 
                  {/* Plus/Minus Symbol */}
                  <span
                    onClick={(e) => handlePlusButtonClick(index, e)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl cursor-pointer"
                  >
                    {activeInfoIndex === index ? '−' : '+'}
                  </span>
                </div>
 
                {/* Info Content - Only shown when button is clicked */}
                {activeInfoIndex === index && (
                  <div className="mt-2 bg-gray-100 p-6 rounded-lg shadow w-full sm:w-[500px] lg:w-[1000px]">
                    {item.info}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Btp;
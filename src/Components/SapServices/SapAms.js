import React, { useState } from "react";
import Contact from "../images/Contact.jpg";
import sap from "../images/5.jpg";
import shadow from "../images/shadow.png";
 
const CornerDecoration = () => (
  <div className="absolute right-4 top-4 w-6 h-6">
    <div className="absolute right-0 top-0 w-3 h-3 border-t-2 border-r-2 border-white opacity-50" />
    <div className="absolute right-0 bottom-0 w-3 h-3 border-b-2 border-r-2 border-white opacity-50" />
  </div>
);
 
const SapImplementation = () => {
  const [expandedSection, setExpandedSection] = useState(null);
 
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
      title: "Technical support",
      points: [
        "Establishing, upgrading, and managing your SAP system architecture.",
        "Configuring the operating system, database, and SAP instances.",
        "Safeguarding system performance, security, and accessibility",
        "Overseeing system logs and troubleshooting incidents",
        "Developing tailored ABAP programs, interfaces, or enhancements, alongside creating programs with other technologies like Node.js, Java, React, etc., when necessary"
      ]
    },
    {
      title: "Functional support",
      subtitle: "Based on the needs assessment, we will typically recommend one of these strategies:",
      points: [
        "Adjusting SAP modules (e.g., FI, CO, MM, SD, etc.) to fulfill specific needs",
        "Defining master data, organizational structures, and business rules",
        "Facilitating user training and assisting end-users",
        "Validating business scenarios and ensuring unbroken processes",
        "Investigating issues related to master data, transactions, or reports",
        "Advising on best practices for effective SAP application usage"
      ]
    },
    {
      title: "SAP Basis Administration",
      points: [
        <b>"For those managing multiple SAP applications or interfacing with
             additional operating systems and databases simultaneously, our
             SAP Basis Administration services are valuable, encompassing:"</b>,
        "Installation, upgrades, and maintenance of systems",
        "Monitoring performance and addressing issues",
        "Managing users and permissions",
        "Ensuring system security and adherence to compliance",
        "Integrating with other systems and interfaces",
        "Implementing backup, recovery, and high-availability strategies",
        "Offering technical consultation and support"
      ]
    }
  ];
 
  const implementationPhases = [
    {
      title: "Managed SAP Support",
      content: `**Do you require someone to assume total responsibility for managing your SAP system? Our managed SAP support encompasses:**
 
      • Custom SLA-based assistance tailored to your business needs
      • Proactive supervision and regular health evaluations for system stability
      • A dedicated team of experienced professionals for swift issue resolution
      • Continuous improvement initiatives to boost system performance
      • Predictable cost framework for efficient budget management`
    },
    {
      title: "On-Demand SAP Support",
      content: `**Do you have an SAP team but encounter unforeseen challenges that they cannot swiftly resolve? Rely on our on-demand SAP assistance, providing you:**
 
      • Instant access to expert support for urgent issues or initiatives
      • Adaptable help for brief partnerships or sporadic aid
      • Pay-as-you-go pricing structure for economical support usage
      • Rapid response times to reduce downtime and guarantee business continuity`
    },
    {
      title: "Staff Expansion",
      content: `**Looking for specialized expertise or additional manpower to bolster your internal team? Discover our staff expansion services and take advantage of:**
 
      • Highly proficient SAP-certified consultants smoothly integrated into your enterprise
      • Assistance for ongoing operations, targeted projects, or peak demand times
      • Flexible staffing solutions to accommodate fluctuating resource needs
      • Increased efficiency and faster project execution with seasoned professionals onboard`
    },
  ];
 
  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };
 
  return (
    <div className="bg-gray-100">
      {/* Banner Section */}
      <div className="relative w-full h-[300px]">
        <div className="absolute z-20 left-16 top-1/2 transform -translate-y-1/2 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4 text-white">
            SAP Application Management Service
          </h1>
          <p className="text-white text-lg">
            Guarantee long-lasting application functionality and readily adapt them to suit your evolving business requirements.
          </p>
        </div>
        <img
          src={Contact}
          alt="Background"
          className="w-full h-full object-cover brightness-90"
        />
      </div>
 
      {/* Content Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
          {/* Left Side Content */}
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl  font-bold">
                  <span className="text-emerald-400">:</span>
                  <span className="text-[#f57e20]">Why Does Your Business Require SAP AMS ?</span>
                </h2>
              </div>
 
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-black leading-relaxed">
                Artihcus's SAP Application Management Services encompass more
                than mere assistance with an established SAP setup. We introduce a
                unique engagement model leveraging the Maintain- Implement-Improve strategy
                that allows you to concentrate on the essence of your operations — while we take
                 care of the seamless functionality of your entire SAP ecosystem.
                </p>
 
                <p className="text-lg md:text-xl text-black leading-relaxed">
                Employ the pertinent knowledge and expertise of SAP AMS specialists to
                unleash the full potential of your SAP applications, enhance performance,
                 lower maintenance expenses, and reduce mistakes. Our proficiency with both
                 SAP and non-SAP platforms equips us to effectively fine-tune your system, ensuring your tranquillity.
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
     
 
      {/* Implementation Steps Section */}
      <div className="bg-[#faf6ef] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 max-w-7xl mx-auto">
            <span className="text-[#f57e20]">Application Management Services We Provide</span>
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
 
      {/* Support Tiers Section with adjusted spacing */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 max-w-7xl mx-auto">
            <span className="text-emerald-400">:</span>
            <span className="text-[#f57e20]">Benefits of Artihcus AMS Services & Solutions</span>
          </h2>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Global Reach",
                content: "Our worldwide presence guarantees round-the-clock maintenance, immediate tracking of SAP system modifications, and instant problem resolution. By offering continuous support and effective issue management, we help you conserve valuable time and resources, ensuring your SAP systems operate without interruption."
              },
              {
                title: "Rapid Issue Resolution",
                content: "Our global delivery team functions across various time zones, enabling us to quickly address and refine your SAP solution. Armed with skilled professionals and specialized tools, our AMS team promptly pinpoint root causes and delivers dependable solutions, reducing system downtime and its impact on your business."
              },
              {
                title: "Extensive Expertise",
                content: "With over 20 years of experience as an SAP Gold Partner across more than 30 sectors, we possess a keen understanding of prevalent business challenges and apply tried-and-true methods to solve them. In addition to application management, Artihcus excels in SAP implementation and customization, adhering to SAP standards as a Global Strategic Supplier."
              },
              {
                title: "Adaptability and Scalability",
                content: "We provide SAP Application Management Services tailored to your unique business requirements and scope. As your enterprise evolves, our solutions effortlessly adjust to keep pace with your growth and transformations."
              },
              {
                title: "Proactive Oversight",
                content: "Expert analysis and optimization of your SAP systems to enhance performance and efficiency. We identify and resolve bottlenecks, tune system parameters, and implement performance improvements."
              },
             
              {
                title: "Clear Reporting",
                content: "We provide comprehensive reports and analytics on system performance, issue resolution, and resource utilization. Our transparent approach offers you insights into the overall condition of your SAP environment."
              },
              {
                title: "Improved Security",
                content: "We adhere to essential security protocols, such as GDPR, ISO/IEC 27001, and SAP's security directives, implementing stringent security measures including regular vulnerability assessments, advanced encryption, and access controls to guard your data and ensure regulatory compliance."
              },
              {
                title: "Ongoing Enhancement",
                content: "We execute regular updates and improvements to keep your SAP systems aligned with the latest features and best practices."
              },
            ].map((tier, index) => (
              <div
                key={index}
                className={`border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 ${
                  index >= 6 ? 'md:col-span-1.5' : ''
                }`}
              >
                <h3 className="text-xl font-semibold text-[#f57e20] mb-4 pb-2 border-b border-gray-200">
                  {tier.title}
                </h3>
               
                <p className="text-black leading-relaxed">
                  {tier.content}
                </p>
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
              <span className="text-[#f57e20]">SAP AMS Support Frameworks</span>
            </h2>
 
            <div className="relative">
              {implementationPhases.map((phase, index) => (
                <div
                  key={index}
                  className="mb-4"
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full bg-[#f57e20] text-white p-6 flex justify-between items-center hover:bg-[#e06d1b] transition-all duration-300 rounded-lg"
                  >
                    <span className="text-xl font-semibold">{phase.title}</span>
                    <span className="text-2xl font-light">
                      {expandedSection === index ? '−' : '+'}
                    </span>
                  </button>
                 
                  {expandedSection === index && (
                    <div className="bg-gray-50 p-8 rounded-b-lg shadow-inner mt-1">
                      <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                        <span className="font-bold">{phase.content.split('**')[1]}</span>
                        {phase.content.split('**')[2]}
                      </p>
                    </div>
                  )}
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
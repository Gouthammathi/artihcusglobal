import React, { useState } from 'react'
import Contact from "../images/Contact.jpg"
import hana from "../images/hana.jpg"
 
const HanaRise = () => {
    const [expandedSection, setExpandedSection] = useState(null);
 
    const riseModules = {
        'Why Opt For Rise with SAP?': {
            points:[ " How can you condense the migration period to a new data management system and execute a project in 6 months?",
            "Complex business metamorphosis necessitates considerable fiscal and temporal investment; hence, SAP has crafted a unique solution.",
            "Which groundbreaking technologies will aid in modernizing business functions within your organization?",
            "RISE with SAP: enables project implementation under the 'as a service' model (Business Transformation-as-a-Service, BTaaS).",
            "What migration strategy is most suitable for you: which existing ERP system customizations should be acknowledged and which processes will need adjustments?",
            "Its aim: is to assist your organization in swiftly and effortlessly becoming an intelligent enterprise while boosting your business efficacy.",
            ],
           
        },
        'What Do You Receive With Rise With SAP?': {
            points: [
                "The RISE with SAP package encompasses everything essential for the successful digital evolution of your organization:",
                "Inclusive audit program of current processes for transitioning to an intelligent enterprise",
                "Support from SAP technical experts and consultants",
                "SAP instruments to transfer all data to SAP S/4HANA Cloud and modify business processes"
            ]
        },
        'Cloud ERP': {
            description: "SAP S/4HANA Cloud — Next-Generation Cloud ERP (Public or Private Cloud."
        },
        'SAP Business Technology Platform': {
            description: "SAP Business Technology Platform provides all capabilities to launch the S/4HANA platform"
        },
        'Integlligent Business Processes': {
            description: "Thorough business process examination with SAP Business Process Intelligence solutions."
        },
        'SAP Business Network Starter Pack': {
            description: "SAP network merging Ariba Network, SAP Logistics Business Network, and SAP Asset Intelligence Network."
        },
        'Infrastructure': {
            description: "Flexibility in selecting providers: SAP hosting or hyperscalers (AWS, Google, MS Azure) and IaaS model."
        },
        'Built-in Tools And Sevices ': {
            description: "Custom Code Migration App, SAP Readiness Check, SAP Learning Hub, among others."
        }
       
       
    };
 
    const toggleSection = (index) => {
        setExpandedSection(expandedSection === index ? null : index);
    };
 
    return (
        <div>
            <div className="relative w-full h-[300px] bg-blue-900 text-white">
                <div className="absolute z-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Rise with SAP
                    </h1>
                    <p className="text-white text-lg max-w-2xl">
                        Business metamorphosis using the 'all-encompassing' model: transforming in six months instead of stretching over two years.
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
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
                    {/* Left Side Content */}
                    <div className="w-full px-4 py-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
                            {/* Left Side Content */}
                            <div className="w-full md:w-1/2">
                                <div className="space-y-6">
                                    <h2 className="text-2xl md:text-3xl font-bold">
                                        <span className="text-emerald-400">:</span>
                                        <span className="text-[#f57e20]">
                                            Business Transformation as a Service through Rise with SAP
                                        </span>
                                    </h2>
 
                                    <div className="space-y-4">
                                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                            Swift transformation demands more than a mere technical shift to the cloud. The Rise with SAP solution, based on
                                            the Business Transformation as a Service model, will facilitate your endeavor.
                                        </p>
 
                                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                            Business Transformation as a Service means integrating cutting-edge technologies into your company's current
                                            operations, as well as reshaping them according to your organization's ideal transition blueprint to an intelligent
                                            enterprise.
                                        </p>
 
                                        <p className="text-sm md:text-base text-gray-700 leading-relaxed font-bold">
                                            By revolutionizing your business with Rise with SAP, you gain a comprehensive S/4HANA cloud system equipped
                                            with all the resources you need to gradually evolve into an intelligent enterprise.
                                        </p>
                                    </div>
                                </div>
                            </div>
 
                            {/* Right Side Image */}
                            <div className="w-full md:w-1/2">
                                <div className="w-full">
                                    <img
                                        src={hana}
                                        alt="SAP"
                                        className="w-full h-auto relative z-10"
                                    />
 
                                </div>
                            </div>
                        </div>
 
 
 
                        {/* Implementation Section */}
                        <div className="w-full mt-12 bg-amber-50 p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
                                <span className="text-emerald-400 mr-2">:</span>
                                <span className="text-[#f57e20]">How Can I Implement S/4HANA ?</span>
                            </h2>
 
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-800">
                                    Before we conclude, let's quickly review the various ways your business can deploy S/4HANA once you have selected your preferred version:
                                </h3>
 
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="h-2 w-2 rounded-full bg-[#f57e20] mt-2 mr-3"></div>
                                        <span className="text-sm md:text-base text-gray-700 leading-relaxed">
                                            A brownfield conversion involves migrating your current SAP environment to S/4HANA, which can be a complex and risky endeavor for more customized SAP systems.
                                        </span>
                                    </li>
 
                                    <li className="flex items-start">
                                        <div className="h-2 w-2 rounded-full bg-[#f57e20] mt-2 mr-3"></div>
                                        <span className="text-sm md:text-base text-gray-700 leading-relaxed">
                                            A greenfield migration entails establishing S/4HANA as a completely new environment, discarding any traces of legacy SAP processes and minimizing potential obstacles.
                                        </span>
                                    </li>
 
                                    <li className="flex items-start">
                                        <div className="h-2 w-2 rounded-full bg-[#f57e20] mt-2 mr-3"></div>
                                        <span className="text-sm md:text-base text-gray-700 leading-relaxed">
                                            A consolidation transfers data from various ERPs into a unified S/4HANA platform, allowing regional teams to integrate existing ERPs into a system managed by a designated headquarters.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            {/* Rise with SAP Modules Section */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-2xl mb-12 font-bold">
                            <span className="text-[#f57e20]">By revolutionizing your business with Rise with SAP, you gain a comprehensive S/4HANA cloud system equipped with all the resources you need to gradually evolve into an intelligent enterprise.</span>
                        </h2>
 
                        <div className="space-y-8">
                            {Object.entries(riseModules).map(([moduleName, moduleData], index) => (
                                <div
                                    key={index}
                                    className="mb-8"
                                >
                                    <button
                                        onClick={() => toggleSection(index)}
                                        className="w-full bg-[#f57e20] text-white p-6 flex justify-between items-center hover:bg-[#e06d1b] transition-all duration-300 rounded-t-lg"
                                    >
                                        <span className="text-xl font-semibold">{moduleName}</span>
                                        <span className="text-2xl font-light">
                                            {expandedSection === index ? '−' : '+'}
                                        </span>
                                    </button>
 
                                    <div
                                        className={`bg-gray-50 rounded-b-lg shadow-lg transition-all duration-300 ${
                                            expandedSection === index ? 'block' : 'hidden'
                                        }`}
                                    >
                                        <div className="p-8">
                                            {moduleData.points ? (
                                                <div className="space-y-6">
                                                    {moduleData.points.map((point, i) => (
                                                        <p key={i} className={`text-gray-700 text-sm ${i % 2 === 1 ? 'font-bold' : ''}`}>
                                                            • {point}
                                                        </p>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="text-gray-700 text-base">
                                                    {moduleData.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
 
            {/* Advantages of RISE with SAP Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">
                        <span className="text-[#f57e20]">Advantages of RISE with SAP ?</span>
                    </h2>
                   
                    <p className="text-gray-800 text-lg mb-8 font-bold">
                        Primarily, RISE with SAP helps you to evade stress and complications during business transformation.
                    </p>
                   
                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                            <h3 className="text-[#f57e20] text-xl font-semibold mb-4">
                                Rapid return on investment
                            </h3>
                            <p className="text-gray-700">
                                Compared to an on-premises ERP deployment, acquiring a bundled solution reduces total ownership costs by 20%, as there's no requirement to pay for licenses, support, and hosting from various vendors. Furthermore, a swift payback will enable you to achieve your aspirations sooner.
                            </p>
                        </div>
                       
                        {/* Card 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                            <h3 className="text-[#f57e20] text-xl font-semibold mb-4">
                                Simplicity in the organization of the transformation process
                            </h3>
                            <p className="text-gray-700">
                                Transformation via a packaged offering from a single infrastructure and service provider mitigates process intricacy. SAP supplies all necessary tools for extensive business transformation and migration to SAP S/4HANA Cloud, overseeing both system maintenance & support, along with troubleshooting.
                            </p>
                        </div>
                       
                        {/* Card 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                            <h3 className="text-[#f57e20] text-xl font-semibold mb-4">
                                Adaptive and customizable solution
                            </h3>
                            <p className="text-gray-700">
                                By selecting infrastructure and product configuration scenarios that cater to your business needs, you remain unbounded by different IaaS providers when managing your data or systems. A standardized system architecture in the cloud provides the flexibility to scale your technological solutions.
                            </p>
                        </div>
 
                        {/* Card 4 (Previously Bottom Card) */}
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                            <h3 className="text-[#f57e20] text-xl font-semibold mb-4">
                                RISE With SAP Deployment Options
                            </h3>
                            <p className="text-gray-700">
                                Choose the most suitable deployment option — RISE with SAP Public Cloud or RISE with SAP Private Cloud — and allow us to personalize the solution to align with your organizational goals and requirements, ensuring optimal flexibility and efficient resource utilization.
                            </p>
                        </div>
                    </div>
 
                    {/* Implementation Steps Section */}
                    <div className="mt-16">
                        <h2 className="text-3xl font-bold mb-8">
                            <span className="text-[#f57e20]">Four Steps to Transition to an Intelligent Enterprise with Rise with SAP:</span>
                        </h2>
 
                        <div className="bg-white rounded-lg shadow-lg p-8">
                           
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <div className="h-2 w-2 rounded-full bg-[#f57e20] mt-2 mr-3"></div>
                                    <span className="text-gray-700 leading-relaxed">
                                    Starting point: the necessity for improved business performance                                    </span>
                                </li>
 
                                <li className="flex items-start">
                                    <div className="h-2 w-2 rounded-full bg-[#f57e20] mt-2 mr-3"></div>
                                    <span className="text-gray-700 leading-relaxed">
                                    Modernization of business functions with intelligent technology                                    </span>
                                </li>
 
                                <li className="flex items-start">
                                    <div className="h-2 w-2 rounded-full bg-[#f57e20] mt-2 mr-3"></div>
                                    <span className="text-gray-700 leading-relaxed">
                                    Technical migration of tools and services to the cloud                                    </span>
                                </li>
 
                                <li className="flex items-start">
                                    <div className="h-2 w-2 rounded-full bg-[#f57e20] mt-2 mr-3"></div>
                                    <span className="text-gray-700 leading-relaxed">
                                    Establishing an intelligent enterprise with a collective network, tools, and infrastructure</span>                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
 
            {/* Scroll to top button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-4 right-4 bg-[#f57e20] text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
                aria-label="Scroll to top"
            >
                <svg
                    className="w-5 h-5"
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
    )
}
 
export default HanaRise
import React, { useState } from 'react'
import Contact from "../images/Contact.jpg"
import grow from "../images/grow.jpg"
 
const Grow = () => {
    const [expandedSection, setExpandedSection] = useState(null);
 
    const riseModules = {
        'GROW With SAP For Scaleups': {
            description: "Whether you’re in the early stages or gearing up for an exit, your growth path demands a continuous development of skills, systems, and future preparations. Initiate and nurture exponential growth with a cloud-native solution available for up to six months at no cost, alongside partnership benefits."
           
        },
        'Grow And Scale With Cloud-Native Solutions': {
            description: "Address your back-office requirements with top-tier solutions for finance, procurement, HR, and travel and expense management."
 
        },
        'Engage WIth The Complete SAP Community And Ecosystem': {
            description: "SAP S/4HANA Cloud — Next-Generation Cloud ERP (Public or Private Cloud."
        },
       
    };
 
    const toggleSection = (index) => {
        setExpandedSection(expandedSection === index ? null : index);
    };
 
    return (
        <div>
            <div className="relative w-full h-[300px] bg-blue-900 text-white">
                <div className="absolute z-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 className="text-4xl font-bold mb-4">
                    GROW With SAP
                    </h1>
                    <p className="text-white text-lg max-w-2xl">
                    Embrace cloud ERP with agility, consistency, and ongoing innovation.
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
                                        What exactly is GROW with SAP?
                                        </span>
                                    </h2>
 
                                    <div className="space-y-4">
                                        <p className="text-s md:text-base text-gray-700 leading-relaxed">
                                        A comprehensive suite of solutions, acceleration services for adoption, a
                                         community, and educational resources designed to help companies of all sizes effectively implement cloud ERP.
                                        </p>
                                        <h3><b>Immediate cloud ERP solution ready for use</b></h3>
                                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                        Expand without restrictions and create your own innovations with a cloud ERP that’s ready to go. SAP S/4HANA Cloud,
                                        public edition propels your business forward with cutting-edge industry practices and ongoing advancements.
                                        </p>
                                        <h3><b>Speed up your implementation with GROW with SAP</b></h3>
                                        <p className="text-sm md:text-base text-gray-700 leading-relaxed ">
                                        Facilitate your cloud ERP launch using tested tools and processes. With a clear
                                        scope and timeline, you can reduce unexpected outcomes through a reliable deployment service.
                                        </p>
                                        <h3><b>Community and education</b></h3>
                                        <p className="text-sm md:text-base text-gray-700 leading-relaxed ">
                                        Participate and learn in a cooperative, open environment with SAP professionals,
                                         partners, and clients. Access adaptable training and educational opportunities
                                          tailored to your objectives allows you to enhance skills and boost adoption within your team.
                                        </p>
                                    </div>
                                </div>
                            </div>
 
                            {/* Right Side Image */}
                            <div className="w-full md:w-1/2">
                                <div className="w-full">
                                    <img
                                        src={grow}
                                        alt="SAP"
                                        className="w-full h-auto relative z-10"
                                    />
 
                                </div>
                            </div>
                        </div>
 
 
 
                        {/* Implementation Section */}
                        <div className="w-full mt-12 bg-amber-50 p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-8">
                                <span className="text-[#f57e20]">Uncover the benefits of GROW with SAP</span>
                            </h2>
                           
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Operate using leading industry practices",
                                        points: [
                                            "Drive your business forward with pre-configured workflows",
                                            "Enhance productivity through built-in automation bots",
                                            "Accelerate work processes utilizing AI, business events, and KPIs"
                                        ]
                                    },
                                    {
                                        title: "Create your own innovations",
                                        points: [
                                            "Expand reach and revenue by introducing new business strategies",
                                            "Recognize your strengths and areas for improvement",
                                            "Empower creators with low-code development solutions"
                                        ]
                                    },
                                    {
                                        title: "Expand without limits",
                                        points: [
                                            "Speed up your growth by navigating local, tax, and industry regulations",
                                            "Scale responsibly with complete transparency and essential metrics",
                                            "Integrate additional suppliers into your network while enhancing efficiency"
                                        ]
                                    },
                                    {
                                        title: "Launch confidently",
                                        points: [
                                            "Accelerate your rollouts with reliable tools and methodologies from SAP Activate",
                                            "Sidestep unexpected challenges with a defined scope and timeline",
                                            "Gain knowledge through an open, collaborative group"
                                        ]
                                    }
                                ].map((benefit, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                                        <h3 className="text-[#f57e20] text-xl font-semibold mb-4">
                                            {benefit.title}
                                        </h3>
                                       
                                        <ul className="space-y-4">
                                            {benefit.points.map((point, pointIndex) => (
                                                <li key={pointIndex} className="flex items-start">
                                                    <div className="h-2 w-2 rounded-full bg-[#f57e20] mt-2 mr-3"></div>
                                                    <span className="text-gray-700">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            {/* Rise with SAP Modules Section */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
 
 
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
 
            {/* GROW Benefits Section */}
         
 
            {/* Implementation Section */}
            <div className="bg-white py-16">
                {/* ... existing implementation code ... */}
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
 
export default Grow
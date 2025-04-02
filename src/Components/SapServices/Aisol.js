import React, { useState } from 'react'
import Contact from "../images/Contact.jpg"
import ai from "../images/ai1.jpg"
 
const AIsolutions = () => {
    const [expandedSection, setExpandedSection] = useState(null);
 
    const riseModules = {
        'Increased efficiency': {
            description: "AI-driven automation transforms operational processes by refining tasks, minimizing errors, and maximizing resource use. Automated feedback systems encourage ongoing enhancements, delivering timely insights for adjustments. Moreover, Generative AI accelerates manual functions such as email management and content creation."
        },
        'Data-informed decisions': {
            description: "Whether employed for pattern identification, insight generation, or process automation, business AI significantly aids decision-making at both executive and operational levels. By utilizing AI’s analytical strengths and pattern recognition, leaders can make accurate strategic choices, while teams at all levels receive real-time insights."
        },
        'Improved forecasting': {
            description: "AI processes extensive datasets to generate accurate predictions by utilizing historical data and market trends. This enables businesses to foresee customer needs, optimize their inventory, and strategically allocate resources, thereby fostering growth and profitability in fluctuating markets."
        },
        'Cost savings': {
            description: "AI-driven automation diminishes the need for manual labor, streamlines procedures, and lowers operational expenses. Automating activities like data entry and supply chain management allows for more resources to be allocated to higher-value tasks. Business AI also enhances resource distribution and identifies inefficiencies, resulting in substantial cost reductions and improved operational efficiency."
        },
        'Our AI Solutions': {
            description: "What challenges do you wish to address with AI? Which opportunities do you want to capitalize on? We can assist you in selecting and executing the business AI solution that offers the most significant value potential."
        },
        'Generative AI': {
            description: "Harness the capabilities of human-like outcomes through Generative AI. Improve customer service using intelligent chatbots, conduct semantic document searches, and streamline internal processes such as employee training. Our collaborations with AWS, Microsoft, and Google provide cutting-edge solutions for various content creation, enhancing human creativity and innovation."
        },
        'Computer Vision': {
            description: "Achieve improved results across various industries with Artihcus Computer Vision technology. By employing classical algorithms and deep learning-based Visual Processing, we facilitate accurate image detection, recognition, and classification, promoting operational efficiency and informed decision-making."
        },
        'Data Analysis and Forecasting': {
            description: "Refine data flows and elevate customer experiences with Artihcus Data Analysis and Forecasting solutions. Our bespoke approach utilizes advanced analytics and forecasting methods to deliver precise insights, empowering strategic planning and informed decision-making."
        },
        'Voice and Speech Recognition': {
            description: "Effortlessly convert spoken language into text with Artihcus AI-driven speech and voice recognition technology. By leveraging natural language processing (NLP) and machine learning (ML), our solutions enable you to meet rising customer expectations, successfully delivering projects using off- the-shelf offerings from major providers like AWS, Azure, and GCP."
        },
        'Natural Language Processing': {
            description: "Opt for Artihcus NLP development services to enhance customer feedback evaluation and improve user engagement. Effectively analyze a wide range of customer data to gain valuable insights, fostering better business understanding and enhancing customer experiences."
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
                    SAP AI Solutions
                    </h1>
                    <p className="text-white text-lg max-w-2xl">
                    Ensure your business is prepared for the future with AI-driven digital transformation.
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
                                        SAP AI Solutions
                                        </span>
                                    </h2>
 
                                    <div className="space-y-4">
                                        <p className="text-s md:text-base text-gray-700 leading-relaxed">
                                        Artificial intelligence (AI) is becoming increasingly prevalent in our daily lives. According to PwC,
                                         AI solutions could contribute as much as $15.7 trillion to the global GDP by the year 2030.
                                          This emphasizes AI's significant potential impact on the global economy. Adopting AI goes
                                          beyond merely overcoming technical challenges; it also necessitates thorough data gathering,
                                           processing, and evaluation. At Artihcus, we align the critical components of people, technology,
                                            and organization to advance companies into the next technological era.
                                        </p>
                                       
                                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                        Our specialists assist businesses in assessing their AI objectives and capabilities, ensuring adherence to best practices in data management. Artihcus identifies the most appropriate interface technology and implements it in a customized manner..
                                        </p>
                                       
                                    </div>
                                </div>
                            </div>
 
                            {/* Right Side Image */}
                            <div className="w-full md:w-1/2">
                                <div className="w-full">
                                    <img
                                        src={ai}
                                        alt="SAP"
                                        className="w-full h-auto relative z-10"
                                    />
 
                                </div>
                            </div>
                        </div>
 
 
 
                        {/* Implementation Section */}
                       
                    </div>
                </div>
            </div>
 
            {/* Rise with SAP Modules Section */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">
                            <span className="text-emerald-400">:</span>
                            <span className="text-[#f57e20]">Advantages of AI Solutions</span>
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
 
export default AIsolutions
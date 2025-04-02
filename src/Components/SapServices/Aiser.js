import React, { useState } from 'react'
import Contact from "../images/Contact.jpg"
import services from "../images/service.jpg"
 
const AIservices = () => {
    const [expandedSection, setExpandedSection] = useState(null);
 
    const riseModules = {
        'Boosted efficiency & productivity': {
            description: "Automate mundane tasks to minimize the time required for their completion, allowing your team to concentrate on achieving strategic objectives. With focused, AI-driven productivity tools, you can allocate your workforce more effectively."
        },
        'Effective decision-making': {
            description: "Utilize predictive modeling capabilities to make informed decisions based on data, enabling you to shape your business strategy more effectively using real-time information."
        },
        'Cost-efficient processes': {
            description: "By automating tasks, you lessen the need for human involvement, thereby lowering labor and operational expenses."
        },
        'Flexibility and scalability': {
            description: "SAP's AI solutions are crafted with adaptability in mind, allowing for scaling up or down in response to your business's evolving demands and enabling customization of your SAP applications to meet specific needs."
        },
        'Enhanced customer experience': {
            description: "Providing tailored content and 24/7 virtual assistants will lead to higher customer satisfaction and engagement during their entire journey with your brand."
        },
        'Ongoing compliance': {
            description: "Boost security with AI mechanisms that help you efficiently tackle fraud and other harmful activities through automated compliance monitoring."
        },
        'Competitive advantage': {
            description: "Leverage the capabilities of AI- and ML-driven products and services to foster innovation and outpace competitors."
        },
        'Improved data handling': {
            description: "Aggregate and unify data from multiple sources into a comprehensive view to execute data analytics more efficiently than ever before."
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
                    SAP AI Services
                    </h1>
                   
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
                                        SAP AI SERVICES
                                        </span>
                                    </h2>
 
                                    <div className="space-y-4">
                                        <p className="text-s md:text-base text-gray-700 leading-relaxed">
                                        Utilize state-of-the-art technologies to optimize document workflows,
                                        data analysis, customer engagement, and various other functions, lower
                                        operational costs, and achieve improved results with Artihcus SAP AI Services
                                         for businesses, which is a component of a comprehensive SAP Business AI suite.
                                        </p>
                                        <h2 className="text-2xl md:text-3xl font-bold">
                                        <span className="text-emerald-400">:</span>
                                        <span className="text-[#f57e20]">
                                        WHAT ARE SAP AI SERVICES?
                                        </span>
                                    </h2>
                                        <p className="text-sm md:text-base text-black leading-relaxed">
                                        By utilizing Artihcus SAP AI Services, you can greatly enhance your critical business operations in the following ways:
 
                                        </p>
                                       <point>
                                        <ul>
                                            <li>•Automate repetitive tasks to minimize human mistakes.</li>
                                            <li>•Support data-driven decision-making by extracting insights from both real-time and historical data.</li>
                                            <li>•Quickly deliver relevant responses through content personalization tools such as chatbots and virtual assistants</li>
                                            <li>•Utilize machine learning-based intelligent analytics to identify patterns and trends in data for informed decision-making.</li>
                                        </ul>
                                        </point>
                                     
                                    </div>
                                </div>
                            </div>
 
                            {/* Right Side Image */}
                            <div className="w-full md:w-1/2">
                                <div className="w-full">
                                    <img
                                        src={services}
                                        alt="SAP"
                                        className="w-full h-auto relative z-10"
                                    />
                                </div>
                            </div>
                        </div>
 
                        {/* SAP AI Services Section */}
                        <div className="mt-16 w-full">
                            {/* Enterprise Management Section */}
                            <div className="w-full">
                                <h2 className="text-3xl font-bold mb-8 w-full">
                                    <span className="text-[#f57e20]">ENHANCE YOUR ENTERPRISE MANAGEMENT CAPABILITIES WITH SAP AI SERVICES</span>
                                </h2>
                               
                                <p className="mb-8 text-gray-700 font-medium w-full">
                                    Achieve optimal business performance with our SAP AI Services! Below are the primary advantages you will gain from implementing AI in your operations.
                                </p>
 
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 w-full max-w-full">
                                    {[
                                        {
                                            title: "Business Entity Recognition",
                                            description: "Business Entity Recognition employs natural language processing (NLP) algorithms to detect entities in unstructured text and extract them. This service enables you to obtain relevant information from diverse sources, thus improving the efficiency of your data analytics."
                                        },
                                        {
                                            title: "Document Information Extraction",
                                            description: "Processing documents is another complex task that follows classification. The SAP Document Information Extraction service assists by processing documents and retrieving content from headers and tables, ensuring more effective data management."
                                        },
                                        {
                                            title: "Data Attribute Recommendation",
                                            description: "Maintain your master data's consistency and accuracy with machine learning-powered capabilities that allow easy record classification, resulting in superior data quality. At the same time, the ML- based Invoice Object Recognition service enhances your financial reporting processes by predicting appropriate account assignments based on past data."
                                        },
                                        {
                                            title: "Personalized Recommendation",
                                            description: "Enhance user experiences on your website by consistently offering relevant content! Machine learning-driven algorithms generate personalized recommendations based on each user's browsing behavior and item interactions. Consequently, users receive tailored search results rooted in their earlier queries and item suggestions based on their preferences from past interactions."
                                        }
                                    ].map((service, index) => (
                                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100 w-full">
                                            <h3 className="text-xl font-semibold text-[#f57e20] mb-4">
                                                {service.title}
                                            </h3>
                                            <p className="text-black leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
 
                                {/* SAP Expertise Section */}
                                <div className="bg-[#fdf6e9] p-8 rounded-lg mt-16 w-full">
                                    <h2 className="text-3xl font-bold text-[#f57e20] mb-4 w-full">
                                        OUR EXPERTISE WITH SAP AI
                                    </h2>
                                   
                                    <p className="text-gray-700 mb-8 w-full">
                                        As a recognized SAP Gold Partner and member of SAP AppHaus, we offer an extensive range of SAP AI Services as part of the SAP AI Business portfolio, which includes design thinking sessions, development, support, and additional services. We maintain our own R&D division and conduct thorough market research to identify innovative AI solutions and apply them within SAP BTP applications and beyond.
                                    </p>
 
                                    <div className="space-y-6 w-full">
                                        {[
                                            {
                                                title: "The Integration of SAP Document Information Extraction Service",
                                                description: [
                                                    "The client's company used a third-party tool to manage invoice processing for creating order headers and items in S/4HANA. Nevertheless, some invoices generated from scanned documents still necessitated manual data entry.",
                                                    "In addition to the existing iFlows within the SAP Integration Suite, we incorporated the BTP Document Information Extraction service. This allowed the client to process documents in both digital and scanned formats (e.g., PDF), significantly reducing the manual workload associated with document processing in their organization."
                                                ]
                                            },
                                            {
                                                title: "Solution Development for Predictive Maintenance in Manufacturing",
                                                description: [
                                                    "Malfunctions in manufacturing processes can lead to total line downtime, causing disruptions and delays in production. Aware of this issue, we implement intelligent tools designed to detect anomalies in production. These tools provide advance notifications when maintenance is needed by analyzing machine-generated sounds, temperature, and vibrations. Artihcus's predictive maintenance solutions enable companies to cut costs, lower downtime in production lines, and enhance production efficiency."
                                                ]
                                            },
                                            {
                                                title: "AI-Driven Document Search Solution",
                                                description: [
                                                    "Artihcus developed a chatbot that leverages AI to simplify and enhance document management tasks. The main functions that saw improvements included data searching, retrieval, and oversight. The solution we provided is capable of handling diverse data types, encompassing unstructured and semi-structured data as well as closed formats. Furthermore, we incorporated ChatGPT to enhance the data search process, enabling the client to manage intricate inquiries more swiftly and accurately."
                                                ]
                                            }
                                        ].map((item, index) => (
                                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 w-full">
                                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                                    {item.title}
                                                </h3>
                                                <div className="space-y-4">
                                                    {item.description.map((paragraph, pIndex) => (
                                                        <p key={pIndex} className="text-gray-600 leading-relaxed">
                                                            {paragraph}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
 
                                {/* Partnership Section */}
                                <div className="mt-16 w-full">
                                    {/* First Section */}
                                    <div className="mb-12">
                                        <h2 className="text-3xl font-bold text-[#f57e20] mb-6">
                                            What Can You Anticipate When You Partner with Us ?
                                        </h2>
                                       
                                        <p className="text-gray-700 mb-6">
                                            Regardless of whether you possess a traditional vision for your solution or a succinct outline of your concepts, we are here to assist you in turning them into a concrete reality. Our partnership promises adaptability and alignment with your specific needs:
                                        </p>
 
                                        <ul className="space-y-3">
                                            {[
                                                "A clearly articulated concept",
                                                "A defined vision of the product's scope",
                                                "Insight into your target demographic",
                                                "A well-established business model"
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-start">
                                                    <div className="h-2 w-2 rounded-full bg-[#f57e20] mt-2 mr-3"></div>
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
 
                                    {/* Second Section */}
                                    <div className="bg-white rounded-lg shadow-lg p-8">
                                        <h2 className="text-3xl font-bold text-[#f57e20] mb-6">
                                            What Can You Expect Us to Address ?
                                        </h2>
                                       
                                        <p className="text-gray-700 mb-6">
                                            We promise smooth integration and peak performance of your product across various platforms, including but not limited to the App Store, Google Play Marketplace, AWS, Google Cloud Platform, Microsoft Azure, and others.
                                        </p>
 
                                        {/* Integration Image */}
                                        <div className="rounded-lg overflow-hidden bg-[#b8d8e8] p-8">
                                            <div className="relative">
                                                <img
                                                    src={services}
                                                    alt="Integration and Analytics Dashboard"
                                                    className="w-full rounded-lg"
                                                />
                                            </div>
                                        </div>
                                    </div>
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
                            <span className="text-[#f57e20]">HOW CAN SAP AI SOLUTIONS ENHANCE YOUR BUSINESS?</span>
                        </h2>
                        <p className="text-2xl md:text-m mb-8">
                        Maximize your business performance through our SAP AI Services! Explore the advantages of integrating AI features (available within the SAP AI Business suite) into your organization.
                        </p>
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
 
export default AIservices
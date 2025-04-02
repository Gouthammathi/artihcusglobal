import React, { useState } from "react";
import Contact from "../images/Contact.jpg";
import mobile from "../images/mobile.jpg";
import shadow from "../images/shadow.png";
import { Minus, Plus } from "lucide-react";
 
const CornerDecoration = () => (
  <div className="absolute right-4 top-4 w-6 h-6">
    <div className="absolute right-0 top-0 w-3 h-3 border-t-2 border-r-2 border-white opacity-50" />
    <div className="absolute right-0 bottom-0 w-3 h-3 border-b-2 border-r-2 border-white opacity-50" />
  </div>
);
 
 
 
const Mobile = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
 
  const challenges = [
    {
      title: "Android Application Development",
      description: "Artihcus delivers expert Android development services, creating high-standard applications specifically for the Android operating system."
    },
    {
      title: "iOS Application Development",
      description: "Our development team is capable of crafting robust, feature-rich iOS applications that align with your business goals and engage your target audience effectively."
    },
    {
      title: "Cross-Platform Application Development",
      description: "Achieve a remarkable cross-platform experience and user satisfaction by relying on our skilled offshore mobile app development experts."
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
    'SDKS AND PLATFORMS': {
      description: "Our comprehensive SDK and platform expertise enables us to build robust mobile applications across various environments.",
    },
    'DEVELOPMENT LANGUAGES': {
      description: "Artihcus professionals devise, design, deploy, and manage security measures for hosts/operating systems while also implementing file integrity monitoring solutions to safeguard your applications and ensure uninterrupted business operations."
    },
    'OBJECT-RELATIONAL MAPPING AND DATABASES': {
      description: "We provide expert database integration and ORM solutions for optimal data management in your mobile applications."
    },
    'DEVELOPMENT ENVIRONMENT': {
    },
    'Deploy': {
      description: "At this point, the SAP system goes live. We transfer data from legacy systems into the SAP production environment. Then, our team tests and verifies roles/authorizations for all users and prepares a postgo-live support strategy. This phase also includes end-user training."
    },
    'Run': {
      description: "Our experts resolve any lingering issues, complete integration with the SAP Solution Manager for operations, and offer go-live assistance. This is also when the users/support team begins their engagement with the new software."
    }
  };
 
  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };
 
  const SDKsAndPlatforms = () => {
    const [activeTab, setActiveTab] = useState(0);
   
    const tabContent = [
      {
        title: "Mobile SDKs & Platforms",
        items: [
          "Android SDK/NDK",
          "IOS",
          "Flutter",
          "React Native",
          "Xamarin",
          "Ionic"
        ]
      },
      {
        title: "Cloud Platforms",
        items: [
          "AWS Mobile",
          "Firebase",
          "Azure Mobile",
          "Google Cloud Platform",
          "Heroku"
        ]
      },
      {
        title: "Development Platforms",
        items: [
          "Unity",
          "PhoneGap",
          "Cordova",
          "Native Script",
          "PWA"
        ]
      }
    ];
 
    return (
      <div className="w-full bg-[#f8f8f8] py-8">
        <div className="max-w-full space-y-8">
          {/* Header */}
          <div className="bg-[#f47b20] rounded-lg p-6">
            <h2 className="text-white text-xl md:text-2xl font-bold">
              {tabContent[activeTab].title}
            </h2>
          </div>
 
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-8">
            {tabContent.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full text-sm md:text-base transition-colors duration-300 ${
                  activeTab === index
                    ? 'bg-[#f47b20] text-white'
                    : 'bg-[#e6dede] text-gray-800 hover:bg-[#f47b20] hover:text-white'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
 
          {/* Content */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tabContent[activeTab].items.map((item, index) => (
              <div
                key={index}
                className="bg-[#e6dede] text-gray-800 px-6 py-3 rounded-full text-sm md:text-base font-medium hover:bg-[#f47b20] hover:text-white transition-colors duration-300 text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
 
  const TechnologySection = () => {
    const [expandedTile, setExpandedTile] = useState(null);
 
    const tiles = [
      {
        id: 'sdks',
        title: 'SDKS AND PLATFORMS',
        content: ['Android SDK/NDK', 'iOS', 'Flutter', 'React Native', 'Xamarin', 'Ionic']
      },
      {
        id: 'languages',
        title: 'DEVELOPMENT LANGUAGES',
        content: [
          "SWIFT",
          "Objective-C",
          "Kotlin",
          "Java",
          "Dart",
          "JavaScript",
          "C#"
        ]
      },
      {
        id: 'databases',
        title: 'OBJECT-RELATIONAL MAPPING AND DATABASES',
        content: ["Coredata"
            ,"SQLITE"]
      },
      {
        id: 'environment',
        title: 'DEVELOPMENT ENVIRONMENT',
        content: ["XCODE",
            "Android Studio",
            "Eclipse",
            "Visual Studio"],
      },
      {
        id: 'deploy',
        title: 'DEPLOY',
        description: "At this point, the SAP system goes live. We transfer data from legacy systems into the SAP production environment. Then, our team tests and verifies roles/authorizations for all users and prepares a postgo-live support strategy. This phase also includes end-user training.",
        content: []
      },
      {
       
        title: 'Run',
        description: "Our experts resolve any lingering issues, complete integration with the SAP Solution Manager for operations, and offer go-live assistance. This is also when the users/support team begins their engagement with the new software.",
        content: []
      }
    ];
 
    const handleTileClick = (tileId) => {
      setExpandedTile(expandedTile === tileId ? null : tileId);
    };
 
    return (
      <div className="bg-[#fff5f0] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-[#f57e20]">
              Our Technology Stack
            </h2>
            <p className="text-gray-700 mb-8">
              At Artihcus, we utilize a strong and secure technology stack, ensuring that we rely on dependable technologies recognized for their stability and resilience.
            </p>
           
            <div className="space-y-6">
              {tiles.map((tile) => (
                <div key={tile.id} className="transition-all duration-300">
                  <button
                    onClick={() => handleTileClick(tile.id)}
                    className="w-full bg-[#f57e20] text-white p-6 flex justify-between items-center hover:bg-[#e06d1b] transition-all duration-300 rounded-lg relative group"
                  >
                    <span className="text-xl font-semibold">{tile.title}</span>
                    <span className="transition-transform duration-300">
                      {expandedTile === tile.id ?
                        <Minus className="w-6 h-6" /> :
                        <Plus className="w-6 h-6" />
                      }
                    </span>
                  </button>
 
                  <div
                    className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${
                      expandedTile === tile.id ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div
                      className={`bg-white p-8 rounded-lg shadow-sm transform transition-all duration-500 ${
                        expandedTile === tile.id
                          ? 'translate-y-0 opacity-100'
                          : '-translate-y-4 opacity-0'
                      }`}
                    >
                      <p className="text-gray-700 mb-6">{tile.description}</p>
                      {tile.content.length > 0 && (
                        <div className="flex flex-wrap gap-4">
                          {tile.content.map((item) => (
                            <span
                              key={item}
                              className="bg-[#e6dede] text-gray-800 px-6 py-3 rounded-full text-sm md:text-base font-medium hover:bg-[#f57e20] hover:text-white transition-colors duration-300 text-center"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
 
  return (
    <div className="bg-gray-100">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] bg-blue-900 text-white">
        <div className="absolute z-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold mb-4">
          Mobile Application
 
          </h1>
         
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
                  <span className="text-[#f57e20]">Development Solutionss</span>
                </h2>
              </div>
 
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-black leading-relaxed">
                Leverage the extensive knowledge of the Artihcus mobile development team to design a high-quality mobile app that drives your business towards its goals.
                </p>
               
                <p className="text-lg md:text-xl text-black leading-relaxed  mt-4">
                <b>Artihcus translates concepts into state-of-the-art mobile applications featuring user-friendly designs.</b>
                </p>
                <p className="text-lg md:text-xl text-black leading-relaxed mt-4">
                We emphasize clarity, honesty, and teamwork to produce outstanding, scalable products.
                </p>
              </div>
            </div>
          </div>
 
          {/* Right Side Image */}
          <div className="relative w-full md:w-1/2">
            <div className="relative w-full max-w-[600px] ml-auto">
              <img
                src={mobile}
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
            <span className="text-[#f57e20]">Tailored Mobile App Development Solutions</span>
          </h2>
          <content className="ml-20 mt-3 leading-relaxed ">Artihcus provides personalized mobile app development solutions created to satisfy the specific requirements of businesses, from startups to well-established corporations. Our agile development team utilizes the latest technologies and industry best practices to produce remarkable mobile applications that excel in today's competitive market.</content>
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
 
      {/* New Innovations Section */}
      <div className="bg-[#fff5f0] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-2 text-[#f57e20]">Innovations</h2>
            <p className="text-gray-700 mb-8 ml-20">
              We harness cutting-edge technologies to drive innovative solutions
            </p>
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Machine Learning",
                  description: "We have the capability to either create a machine learning-focused mobile application from the ground up or seamlessly incorporate machine learning technology into your existing application to tackle complex computational tasks and facilitate advanced data analysis, predictive modeling, and personalized user experiences."
                },
                {
                  title: "Product Analytics",
                  description: "Artihcus' product analytics services allow you to comprehend user behavior, make informed decisions based on data, and enhance the performance of your mobile applications. Obtain valuable insights that enable you to improve user experiences and stimulate business growth."
                },
                {
                  title: "Augmented Reality",
                  description: "By incorporating augmented reality (AR) technology, we can enrich your application with immersive and interactive experiences, providing users with enhanced engagement and interactivity."
                },
                {
                  title: "Location Sensing",
                  description: "Integrate Location Sensing into your application to ensure users have personalized and context-aware experiences. We can unlock powerful features such as geolocation services, proximity-based functionalities, and location-triggered notifications to boost user engagement and deliver valuable insights for your business."
                }
              ].map((innovation, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#f57e20]/20 group"
                >
                  <h3 className="text-xl font-semibold text-[#f57e20] mb-6 pb-2 border-b border-gray-200 group-hover:border-[#f57e20]/30 transition-colors duration-300">
                    {innovation.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {innovation.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
 
      {/* Technologies Section */}
      <TechnologySection />
 
      {/* IoT Services Section */}
   
 
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
 
export default Mobile;
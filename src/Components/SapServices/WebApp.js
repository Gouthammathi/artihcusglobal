import React, { useState } from "react";
import Contact from "../images/Contact.jpg";
import web from "../images/web.jpg";
import shadow from "../images/shadow.png";
import { Minus, Plus } from "lucide-react";
 
const CornerDecoration = () => (
  <div className="absolute right-4 top-4 w-6 h-6">
    <div className="absolute right-0 top-0 w-3 h-3 border-t-2 border-r-2 border-white opacity-50" />
    <div className="absolute right-0 bottom-0 w-3 h-3 border-b-2 border-r-2 border-white opacity-50" />
  </div>
);
 
 
 
const Web = () => {
  const [activeTab, setActiveTab] = useState(0);
 
  const TechnologySection = () => {
    const [expandedTile, setExpandedTile] = useState(null);
 
    const tiles = [
      {
        id: 'sdks',
        title: 'FRONT-END',
        content: [
          "HTML",
          "CSS: SASS, LESS",
          "JavaScript",
          "TypeScript",
          "React: Nextjs",
          "Vuejs: Nuxtjs",
          "Angular: RxJS, NgRx",
          "Stencil.js",
          "Angular Elements",
          "Lit-element",
          "Redux",
          "MobX",
          "Material",
          "Jest",
          "Karma",
          "Jasmine",
          "Webpack",
          "Rollup",
          "Gulp.js",
          "Svelte"
        ]
      },
      {
        id: 'languages',
        title: 'BACK-END',
        content: [
          "Python",
          "Java",
          "Node.js",
          ".NET",
          "Go",
          "Ruby",
          "PHP",
          "C++"
        ]
      },
      {
        id: 'databases',
        title: 'DATABASES',
        content: [
          "MySQL/MariaDB",
          "MS SQL",
          "PostgreSQL",
          "MongoDB/Cassandra",
          "Redis/Memcache",
          "Azure SQL",
          "Azure Cosmos DB",
          "Bigtable",
          "Spanner",
          "Amazon Aurora",
          "Clickhouse"
        ]
      },
     
    ];
 
    const handleTileClick = (tileId) => {
      setExpandedTile(expandedTile === tileId ? null : tileId);
    };
 
    return (
      <div className="bg-[#fff5f0] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
           
           
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
          Web Development Services
 
          </h1>
          <p className="text-white text-lg max-w-2xl">
          Enhance your online visibility with our state-of-the-art web development offerings.
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
                <h2 className="text-4xl font-bold md:text-3xl ">
                  <span className="text-emerald-400">:</span>
                  <span className="text-[#f57e20]">Artihcus can fulfill all your web development requirements.</span>
                </h2>
              </div>
 
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-black leading-relaxed">
                Regardless of what phase you're in on your web development journey, Artihcus stands as your trusted collaborator. Whether you present us with an idea or a fully developed project, our professionals possess the expertise and experience to realize your online aspirations.                </p>
               
               
              </div>
            </div>
          </div>
 
          {/* Right Side Image */}
          <div className="relative w-full md:w-1/2">
            <div className="relative w-full max-w-[600px] ml-auto">
              <img
                src={web}
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
 
   
 
      {/* New Innovations Section */}
      <div className="bg-[#fff5f0] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-2 font-bold text-[#f57e20]">Web Development Services Available</h2>
           
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Front-end development",
                  description: "Artihcus employs cutting-edge technologies to effectively align your business with client expectations. Our front-end specialists convert UI/UX designs into responsive, swift, and resilient web pages, optimized for outstanding performance on all web-enabled devices."
                },
                {
                  title: "Back-end development",
                  description: "Our accomplished team guarantees that back-end solutions are secure, scalable, and efficient, seamlessly integrating with your front-end to provide a strong foundation for your online success."
                },
                {
                  title: "UX/UI design",
                  description: "Our UX/UI designs create engaging experiences that have a lasting impression. Utilizing a user-centric approach and design thinking sessions, Artihcus develops smooth interactions that connect your business objectives with your clients' needs."
                },
                {
                  title: "Technology consulting & audit",
                  description: "From thorough system evaluations to expert recommendations on ideal technology stacks, our team guarantees stable operations and successful outcomes for your web solutions. Rely on our specialists to pinpoint issues, review current tech operations, and devise tailored improvement strategies for your specific requirements."
                },
                {
                  title: "Quality assurance",
                  description: "At Artihcus, we merge industry-best practices with our vast experience in manual and automated testing to ensure impeccable performance, attractive user experiences, and visually impressive web solutions."
                },
                {
                  title: "Database administration & development",
                  description: "Maximize your business data's potential. Our professional team offers extensive DBA services, which include architecture and modeling, performance analysis, and data warehouse management, empowering your enterprise to utilize its data assets effectively for growth and success."
                },
                {
                  title: "Architecture design",
                  description: "Our skilled team fuses industry-leading practices with creative thinking to develop robust and scalable architectural solutions that align with your business objectives."
                },
                {
                  title: "Cloud and DevOps",
                  description: "Experience the benefits of uniting development, operations, and quality assurance in one service. Artihcus supplies scalable and secure cloud solutions that not only fulfill your business requirements but also expedite your market entry, granting you a competitive advantage in the digital realm."
                },
                {
                  title: "Support services",
                  description: "Artihcus offers pre-support software assessments, optimization, and a comprehensive range of maintenance services, including proactive, adaptive, preventive, and corrective actions. We are dedicated to ensuring the stability and ongoing enhancement of your web solutions, providing the support you require for enduring success."
                },
                {
                  title: "Security services",
                  description: "We prioritize safeguarding your digital assets. Our knowledgeable team utilizes industry-leading strategies and advanced technologies to discover vulnerabilities, implement strong security measures, and protect your systems from possible threats."
                },
                {
                  title: "Infrastructure services",
                  description: "At Artihcus, we understand the crucial role that infrastructure plays in achieving your business goals. Our experts excel in modeling hardware components and their interrelations within your organization, ensuring that your technological solutions align seamlessly and actively promote your success."
                },
                {
                  title: "Technology and innovation",
                  description: "We drive technological progress and encourage innovation. With our proficiency in cutting-edge technologies such as AR, IoT, Blockchain, BI, and more, we enable businesses to embrace the leading edge of innovation."
                },
                {
                  title: "Data and analytics",
                  description: "Artihcus can assist your business in converting data into valuable insights. Our expert team utilizes advanced technologies and methodologies to analyze and interpret data, delivering critical insights that facilitate evidence-based decision-making."
                },
                {
                  title: "Concept and MVP development",
                  description: "Artihcus can turn your concepts into engaging web and mobile experiences. Our talented team employs innovative technologies and industry best practices to create prototypes and functional solutions that appeal to your target audience. With LeverX, you can actualize your vision and captivate users with compelling digital experiences."
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
 
export default Web;
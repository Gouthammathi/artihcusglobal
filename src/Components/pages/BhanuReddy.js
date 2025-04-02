import React, { useState } from "react";
import { Linkedin, Twitter } from "lucide-react";
import bhanu from '../images/bhanu.jpg';
 
const ProfileCard = () => {
  const [showSocials, setShowSocials] = useState(false);
 
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image and Social Media Container */}
        <div className="relative w-full md:w-2/4">
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setShowSocials(true)}
            onMouseLeave={() => setShowSocials(false)}
          >
            {/* Profile Image with Hover Animation */}
            <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
              <img
                src={bhanu}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:cursor-zoom-in"
              />
            </div>
 
            {/* Social Media Overlay */}
            <div
              className={`absolute right-4 top-4 flex flex-col gap-2 transition-opacity duration-300 ${showSocials ? "opacity-100" : "opacity-0"
                }`}
            >
              <button className="p-2 bg-black rounded-full text-white hover:bg-gray-800">
                <Twitter size={20} />
              </button>
              <button className="p-2 bg-orange-500 rounded-full text-white hover:bg-orange-600">
                <Linkedin size={20} />
              </button>
            </div>
          </div>
 
          {/* Name and Title (Below the Image) */}
          <div className="mt-6 text-center">
            <h2 className="text-2xl text-orange-500 font-bold">Dr.Varla Bhanu Prakash Reddy</h2>
            <p className="text-sm text-gray-600">
              Advisory Board Member
            </p>
          </div>
        </div>
 
        {/* Content Section */}
        <div className="w-full md:w-2/3 space-y-6">
          {/* Professional Overview */}
          <section>
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              Professional Overview
            </h3>
            <p className="text-gray-700">
              Dr. Varla Bhanu Prakash Reddy is an alumnus of Osmania University, IIT Bombay, and IIM Bangalore, with a postdoctoral fellowship from the Birla Institute. He currently serves on the board of Plural Technology Pvt. Ltd., where he specializes in Product Lifecycle Management (PLM) as Partner and Director of Growth and Strategy. He is also a board member at EdifyPath.
 
              Before launching his first venture, Bartronics India Limited—India’s pioneering barcode and IoT/RFID company—Dr. Reddy gained experience working in both multinational corporations and startups.
 
              Bartronics India was the first company in the world’s barcoding sector to go public and specialized in smart card manufacturing. Dr. Reddy went on to invest in and mentor several companies, expanding products and solutions in the utility sector across the U.S., Middle East, and Sri Lanka. He led national ID card projects in the UAE, Sri Lanka, and Africa and served as a biometric expert for India’s Aadhaar initiative,
              collaborating closely with the leadership of UIDAI.
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              Dr. Reddy has held key roles with companies such as HanbIt Automation, GrayLogic Technologies, PayGST, and PayMyVAT. He was also a founding member and strategic leader at UrbanKisaan, which was selected for Y Combinator in Silicon Valley, pioneering hydroponic, soil-less farming. Additionally, Dr. Reddy is actively involved with Metamorphosis, Sendfast, and Matrix Seafood.
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              He is the President of the IIM Bangalore Alumni Association and serves as the IIMPACT Secretary in Singapore. Dr. Reddy holds numerous other positions across various institutions and has published research on hydroponics, RFID, and AIDC technologies.
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              Currently, Dr. Reddy chairs TIE Grad, representing TIE Hyderabad globally, and serves as the Director of the Osmania University Foundation. He is also a mentor and director at IIM Visakhapatnam, IIT Hyderabad, and NMIMS, where his guidance through global programs has significantly benefited students from numerous engineering colleges.
            </p>
          </section>
 
         
        </div>
      </div>
      <section>
            <p className="text-white"> His passion for deeply understanding business requirements, identifying process bottlenecks, and addressing key pain points has earned him numerous accolades from clients. A recognized leader in the manufacturing, pharmaceutical, and health sciences sectors across the USA, Surendra has helped clients achieve success through the implementation of innovative and timely solutions.In addition to his consulting expertise, Surendra has served as a mentor to young professionals, guiding them toward success in their careers. His enthusiasm for business drives him to provide solutions that often extend beyond his IT role, reflecting his commitment to delivering value across all facets of business.
            </p>
          </section>
    </div>
  );
};
 
export default ProfileCard;
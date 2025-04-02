import React, { useState } from "react";
import { Linkedin, Twitter } from "lucide-react";
import kalyan from '../images/kalyan-nese.jpg';
 
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
                src={kalyan}
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
            <h2 className="text-2xl text-orange-500 font-bold">Mr. Kalyan Nese</h2>
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
              Mr. Kalyan Nese is a serial entrepreneur and IT architect specializing in cutting-edge technologies.
              With over two decades of success in running technology companies,
              he has developed deep expertise in the ERP and analytics domains.
             
            </p>
          </section>
          <section>
            <p className="text-gray-700">
            Mr. Nese has also led digital transformations and SAP implementations for more than 100 companies across the USA, the Middle East, LATAM, and South Africa,
            gaining extensive experience in industries such as manufacturing, f intech, insurance, pharmaceuticals, healthcare, energy, and more.
            </p>
          </section>
          <section>
            <p className="text-gray-700">
            Currently, Mr. Nese serves as the President and CEO of Siyaton Global Inc., where he leads advanced ERP, AI, and blockchain technology initiatives. He is also an active mentor to startups focused on emerging technologies.
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
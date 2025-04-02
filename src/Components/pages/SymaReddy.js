import React, { useState } from "react";
import { Linkedin, Twitter } from "lucide-react";
import syamareddy from '../images/syam-sundar-Reddy-.jpg';
 
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
                src={syamareddy}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:cursor-zoom-in"
              />
            </div>
 
            {/* Social Media Overlay */}
            <div
              className={`absolute right-4 top-4 flex flex-col gap-2 transition-opacity duration-300 ${
                showSocials ? "opacity-100" : "opacity-0"
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
            <h2 className="text-2xl text-orange-500 font-bold">Syama Sundara Reddy</h2>
            <p className="text-sm text-gray-600">
            Director and COO
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
            Syama Sundara Reddy is our Chief Operating Officer, an accomplished IT leader with over 22 years of global expertise in business processes and technology.
 
 
 
 
            </p>
          </section>
          <section>
            <p className="text-gray-700">
            His experience spans strategic planning, project and program management, budget optimization, and problem resolution, enabling him to build new business ventures and lead highly efficient programs.
            </p>
          </section>
          <section>
            <p className="text-gray-700">
            Syama has a proven track record of success with the onsite-offshore delivery model. He has managed key projects and support engagements across multiple industries through direct client-facing roles in India, the US, the UK, Europe, and the APAC region.
            </p>
          </section>
 
         
        </div>
      </div>
      <section>
            <p className="text-white">
            His experience spans strategic planning, project and program management, budget optimization, and problem resolution, enabling him to build new business ventures and lead highly efficient programs.
            </p>
          </section>
          <section>
            <p className="text-white">
            His experience spans strategic planning, project and program management, budget optimization, and problem resolution, enabling him to build new business ventures and lead highly efficient programs.
            </p>
          </section>
    </div>
  );
};
 
export default ProfileCard;
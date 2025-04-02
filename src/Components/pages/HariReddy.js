import React, { useState } from "react";
import { Linkedin, Twitter } from "lucide-react";
import harireddy from '../images/Harinath Reddy-.jpg';
 
 
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
                src={harireddy}
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
            <h2 className="text-2xl text-orange-500 font-bold">Hari Reddy Andluru</h2>
            <p className="text-sm text-gray-600">
              (Head of SAP Competency)
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
              Hari leads our SAP Competency, ensuring that our resources are expertly trained and ready to deliver in high-demand, emerging technologies. He believes that human resources are critical assets in the IT world, and that a team with the right skillset is essential to the success of any technology initiative.
 
              With 14 years of distinguished experience in IT, Hari has worked with clients across North America, Europe, MENA, and Southeast Asia, serving a wide range of industries, including retail, electronics manufacturing, and specialty chemicals, among others.
 
             
 
             
            </p>
          </section>
          <section>
            <p className="text-gray-700">
            Hari brings deep expertise across multiple customer delivery roles, with extensive knowledge in SAP ABAP, MM, and EWM modules. He is a certified SAP consultant.
              </p>
          </section>
          <section>
            <p className="text-gray-700">
            Hari holds a postgraduate degree in Computer Applications and an undergraduate degree in Mathematics. A financial market enthusiast, he also enjoys watching cinema and cricket.
              </p>
          </section>
 
        </div>
      </div>
      <section>
            <p className="text-white">
            Hari brings deep expertise across multiple customer delivery roles, with extensive knowledge in SAP ABAP, MM, and EWM modules. He is a certified SAP consultant.
              </p>
          </section>
          <section>
            <p className="text-white">
            Hari brings deep expertise across multiple customer delivery roles, with extensive knowledge in SAP ABAP, MM, and EWM modules. He is a certified SAP consultant.
              </p>
          </section>
    </div>
  );
};
 
export default ProfileCard;
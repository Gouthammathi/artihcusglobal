import React, { useState } from "react";
import { Linkedin, Twitter } from "lucide-react";
import muralireddy from '../images/Muralidhar Reddy_.jpg';
 
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
                src={muralireddy}
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
            <h2 className="text-2xl text-orange-500 font-bold">Nara Muralidhar Reddy</h2>
            <p className="text-sm text-gray-600">
              Founder & Director
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
              As the Founder & Director of Artihcus Technologies CO.L.L.C, Muralidhar Reddy develops and implements advanced technology solutions that deliver value to customers. With 20 years of global experience, he specializes in technology strategy, implementation, product development, quality engineering, and infrastructure.
 
              His experience spans a wide range of industries, including IS-Retail, IS-Oil, Electronics and Manufacturing, Healthcare, and Life Sciences. He has worked in Germany, South Korea, Dubai, Malaysia, the UK, Ireland, and India.
 
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              Before founding Artihcus Global, he worked as a freelancer in the MENA region as an EWM architect, implementing end-to-end EWM processes for multiple warehouses.
              At Accenture, he served as an EWM Architect, managing multiple EWM projects across the US and UK. At Robert Bosch, he worked as an EWM techno-functional consultant, where he played a key role in building and growing the practice.
            </p>
          </section>
        </div>
      </div>
      <section>
        <p className="text-white">
          At Accenture, he served as an EWM Architect, managing multiple EWM projects across the US and UK. At Robert Bosch, he worked as an EWM techno-functional consultant, where he played a key role in building and growing the practice.
        </p>
      </section>
      <section>
        <p className="text-gray-700">
          At Accenture, he served as an EWM Architect, managing multiple EWM projects across the US and UK. At Robert Bosch, he worked as an EWM techno-functional consultant, where he played a key role in building and growing the practice.
        </p>
      </section>
      <section>
        <p className="text-gray-700">
          An avid technologist, Muralidhar Reddy firmly believes that technology will transform businesses and create immense value. He envisions the future of warehouse technology being driven by automation through SAP MFS.
        </p>
      </section>
      <section>
        <p className="text-gray-700">
          Muralidhar Reddy holds a B.Tech in Mechanical Engineering and is actively involved with startups as both an investor and a mentor. In his free time, he enjoys traveling, reading Telugu novels, and farming.
        </p>
      </section>
      <section>
        <p className="text-white">
          Before founding Artihcus Global, he worked as a freelancer in the MENA region as an EWM architect, implementing end-to-end EWM processes for multiple warehouses.
          At Accenture, he served as an EWM Architect, managing multiple EWM projects across the US and UK. At Robert Bosch, he worked as an EWM techno-functional consultant, where he played a key role in building and growing the practice.
        </p>
      </section>
    </div>
  );
};
 
export default ProfileCard;
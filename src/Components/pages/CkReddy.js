import React, { useState } from "react";
import { Linkedin, Twitter } from "lucide-react";
import { FaXTwitter } from "react-icons/fa";
import ckreddy from "../images/ck-reddy.jpg";
 
const ProfileCard = () => {
  const [showSocials, setShowSocials] = useState(false);
 
  return (
    <div>
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
                  src={ckreddy}
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
              <h2 className="text-2xl  text-orange-500 font-bold">C. K. Reddy</h2>
              <p className="text-sm text-gray-600">
                Founder and CEO at Artihcus Global
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
                Mr. C. K. Reddy is a seasoned executive and versatile leader,
                driving Artihcus Global's growth and expansion initiatives in his
                pivotal role as CEO. With extensive expertise in the information
                technology and services industries, he has built a remarkable
                track record as a highly accomplished SAP consultant.
              </p>
            </section>
            {/* Certifications */}
            <section>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Certifications and Specializations
              </h3>
              <p className="text-gray-700">
                Mr. Reddy is certified in SAP EWM 9.1, 9.4, and 9.5, and possesses
                extensive experience with the SAP HANA module, establishing
                himself as a respected SAP EWM thought leader and author. He
                holds a B.Tech. degree from Jawaharlal Nehru Technological
                University.
              </p>
            </section>
            {/* Thought Leadership */}
            <section>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Thought Leadership
              </h3>
              <p className="text-gray-700">
                In the rapidly evolving field of supply chain management, Mr. C.
                K. Reddy, a veteran SAP supply chain professional, emphasizes the
                critical importance of warehouse digital transformation. He is an
                active contributor to SAP community networks and is well-known
                for his influential book on SAP EWM.
              </p>
            </section>
          </div>
        </div>
      </div>
      <div className="px-36">
        {/* Expertise in SAP-ERP to SCM-EWM Integration */}
        <section>
          <h3 className="text-xl font-semibold text-orange-500 mb-2">
            Expertise in SAP-ERP to SCM-EWM Integration
          </h3>
          <p className="text-gray-700">
            Mr. Reddy is an expert in SAP-ERP to SCM-EWM integration, specializing in S/4HANA embedded EWM setup. His skills include advanced configurations in stock management, inbound and outbound processes, quality management, HU management, VAS and yard management, transportation setups, replenishment processes, cycle counting, and third-party integrations.
          </p>
        </section>
        <section>
          <h3 className="text-xl font-semibold text-orange-500 mb-2">
            Technical Proficiency
          </h3>
          <p className="text-gray-700">
            In addition to his broad expertise, Mr. Reddy is skilled in enhancing CIF models, QRFC, BAPI FMS, and EWM monitors to optimize warehouse management.
          </p>
        </section>
        <section>
          <h3 className="text-xl font-semibold text-orange-500 mb-2">
            Vision for the Future
          </h3>
          <p className="text-gray-700">
            In an era defined by market dynamics, technological advancements, and evolving consumer preferences, Mr. C. K. Reddy envisions Artihcus Global as a pioneering force in the future of supply chain management, driven by innovative SAP solutions.
 
            Explore the world of SAP EWM and SAP TM with C. K. Reddy – a visionary leader, accomplished author, and the driving force behind Artihcus Global’s commitment to excellence in the digital transformation of warehousing and supply chain management.
          </p>
        </section>
        <section>
          <p className="text-white">
            In an era defined by market dynamics, technological advancements, and evolving consumer preferences, Mr. C. K. Reddy envisions Artihcus Global as a pioneering force in the future of supply chain management, driven by innovative SAP solutions.
 
            Explore the world of SAP EWM and SAP TM with C. K. Reddy – a visionary leader, accomplished author, and the driving force behind Artihcus Global’s commitment to excellence in the digital transformation of warehousing and supply chain management.
          </p>
        </section>
      </div>
    </div>
  );
};
 
export default ProfileCard;
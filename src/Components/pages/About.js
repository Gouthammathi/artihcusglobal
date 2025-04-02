import React from 'react';
import Group from "../../Components/images/group.png";
import bg from "../../Components/images/bg.png";
import shadow from "../../Components/images/shadow.png";
import about2 from "../../Components/images/about2.png";
import purpose from "../../Components/images/purpose.png";
import vision from "../../Components/images/vision.png";
import mission from "../../Components/images/mission.png";
import values from "../../Components/images/values.png";
 
const About = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <img
          src={Group}
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">About us</h1>
        </div>
      </div>
 
      {/* About Us Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-start gap-12 max-w-6xl mx-auto">
          {/* Left Section - Images */}
          <div className="relative w-full md:w-1/2">
            <div className="relative w-full max-w-[400px]">
              {/* Main background image */}
              <img
                src={bg}
                alt="Global technology concept"
                className="w-full h-auto relative z-10"
              />
              {/* Shadow image */}
              <img
                src={shadow}
                alt="Shadow effect"
                className="absolute -bottom-8 left-0 w-full h-auto z-0"
              />
            </div>
          </div>
 
          {/* Right Section - Text Content */}
          <div className="w-full md:w-1/2">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-emerald-400">:</span>
                <span className="text-orange-500">About Us</span>
              </h2>
 
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                Welcome to ARTIHCUS
              </h3>
 
              <p className="text-base md:text-xl text-black leading-relaxed">
                We are Artihcus, a global technology services company with a
                mission to empower businesses with innovative solutions that
                drive growth and success. Headquartered in Hyderabad, India.
                We have established operations in the USA, Germany, and Dubai
                to better serve our clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
 
      {/* We Are Artihcus Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
          {/* Left Section - Text Content */}
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="text-emerald-400">:</span>
                  <span className="text-orange-500">We are ARTIHCUS</span>
                </h2>
 
                <h3 className="text-2xl md:text-3xl font-semibold text-black">
                  Welcome to the future of technology
                </h3>
              </div>
 
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-black leading-relaxed">
                  We pride ourselves on providing top-notch services, ranging
                  from software development and Warehouse automation to IT
                  consulting. Whatever your needs may be, we have the expertise
                  to turn your vision into reality and help you stay ahead of
                  the curve.
                </p>
 
                <p className="text-lg md:text-xl text-black leading-relaxed">
                  At Artihcus, we don't just aim to meet expectations – we
                  strive to exceed them. So, if you're looking for a trusted
                  partner that is committed to your success, look no further
                  than Artihcus. We would be honored to be your technology
                  services provider of choice.
                </p>
              </div>
            </div>
          </div>
 
          {/* Right Section - Image */}
          <div className="relative w-full md:w-1/2">
            <div className="relative w-full max-w-[600px] ml-auto">
              <img
                src={about2}
                alt="Person wearing VR headset"
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
 
      {/* Cards Section - Increased size */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="relative group overflow-hidden rounded-lg cursor-pointer">
            <div className="relative w-full h-[500px] bg-gray-900 overflow-hidden">
              {/* Card Image */}
              <img
                src={purpose}
                alt="Purpose"
                className="w-full h-full object-cover"
              />
 
              {/* Hover Content Overlay - Flip Animation */}
              <div className="absolute inset-0 flex items-center justify-center origin-top perspective-1000 invisible group-hover:visible">
                <div className="w-full h-full bg-black/70 transform rotate-x-90 group-hover:rotate-x-0 transition-transform duration-300 ease-out origin-top opacity-0 group-hover:opacity-100">
                  <div className="p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <p className="text-l text-white leading-relaxed">
                      We believe that everyone has the potential to achieve greatness, but that we often
                      need a helping hand to get there. Through the right tools and resources, we know
                      that there's no limit to what we can achieve when we work together.
                    </p>
                    <p className="text-l text-white leading-relaxed"><b>Together, we can unleash our full potential and build a better future for all</b></p>
                  </div>
                </div>
              </div>
 
              {/* Title Bar */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[95%]">
                <div className="relative bg-white overflow-hidden">
                  <h2 className="text-black group-hover:text-white text-3xl font-bold text-center p-6 relative z-10 transition-colors duration-500">
                    PURPOSE
                  </h2>
                  <div className="absolute bottom-0 left-0 w-full h-full bg-orange-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                </div>
              </div>
            </div>
          </div>
 
          {/* Card 2 */}
          <div className="relative group overflow-hidden rounded-lg cursor-pointer">
            <div className="relative w-full h-[500px] bg-gray-900 overflow-hidden">
              <img
                src={vision}
                alt="Vision"
                className="w-full h-full object-cover"
              />
 
              {/* Hover Content Overlay - Flip Animation */}
              <div className="absolute inset-0 flex items-center justify-center origin-top perspective-1000 invisible group-hover:visible">
                <div className="w-full h-full bg-black/70 transform rotate-x-90 group-hover:rotate-x-0 transition-transform duration-300 ease-out origin-top opacity-0 group-hover:opacity-100">
                  <div className="p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <p className="text-m text-white leading-relaxed">
                      Welcome to our vision of enabling businesses and communities to flourish in a hyperconnected world.
                      We are committed to making sure that businesses and communities are equipped with the right tools and
                      technologies to thrive in an interconnected world where digital disruption is the norm. By embracing new
                      technologies and taking a data-driven approach to business With our vision, we aim to empower businesses and
                      communities alike to navigate the complexities of the modern world. Together, we can create a better, more
                      interconnected future.
                    </p>
                  </div>
                </div>
              </div>
 
              {/* Title Bar */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[95%]">
                <div className="relative bg-white overflow-hidden">
                  <h2 className="text-black group-hover:text-white text-3xl font-bold text-center p-6 relative z-10 transition-colors duration-500">
                    VISION
                  </h2>
                  <div className="absolute bottom-0 left-0 w-full h-full bg-orange-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                </div>
              </div>
            </div>
          </div>
 
          {/* Card 3 */}
          <div className="relative group overflow-hidden rounded-lg cursor-pointer">
            <div className="relative w-full h-[500px] bg-gray-900 overflow-hidden">
              <img
                src={mission}
                alt="Mission"
                className="w-full h-full object-cover"
              />
 
              {/* Hover Content Overlay - Flip Animation */}
              <div className="absolute inset-0 flex items-center justify-center origin-top perspective-1000 invisible group-hover:visible">
                <div className="w-full h-full bg-black/70 transform rotate-x-90 group-hover:rotate-x-0 transition-transform duration-300 ease-out origin-top opacity-0 group-hover:opacity-100">
                  <div className="p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <p className="text-m text-white leading-relaxed ">
                      At Artihcus, we constantly push the boundaries of what’s possible by leveraging our expertise,
                      experience, and innovative ecosystem to empower enterprises, people to build a better Future.
                    </p>
                    <p className="text-m text-white leading-relaxed mt-5">
                      we aim on solving business problems using technology. Our Purpose guides our actions,
                      it shapes strategy and provides predictability to execution; it is the foundation for
                      service excellence. Our clients, from across industries, geographies, and cultures, partner
                      with us for what we do. The purpose, vision, and values of Artihcus ensure we are committed
                      to sustainable growth that drives our clients towards the better future.
                    </p>
                  </div>
                </div>
              </div>
 
              {/* Title Bar */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[95%]">
                <div className="relative bg-white overflow-hidden">
                  <h2 className="text-black group-hover:text-white text-3xl font-bold text-center p-6 relative z-10 transition-colors duration-500">
                    MISSION
                  </h2>
                  <div className="absolute bottom-0 left-0 w-full h-full bg-orange-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                </div>
              </div>
            </div>
          </div>
 
          {/* Card 4 */}
          <div className="relative group overflow-hidden rounded-lg cursor-pointer">
            <div className="relative w-full h-[500px] bg-gray-900 overflow-hidden">
              <img
                src={values}
                alt="Values"
                className="w-full h-full object-cover"
              />
 
              {/* Hover Content Overlay for VALUES card */}
              <div className="absolute inset-0 flex items-center justify-center origin-top perspective-1000 invisible group-hover:visible">
                <div className="w-full h-full bg-black/70 transform rotate-x-90 group-hover:rotate-x-0 transition-transform duration-300 ease-out origin-top opacity-0 group-hover:opacity-100">
                  <div className="p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-150 h-full flex flex-col justify-center">
                    {/* Main content */}
                    <p className="text-m text-white leading-relaxed  mb-8">
                      The company supports society and environment equally to actively pursue
                      a better future both within and outside of the core business area.
                      The company's values of integrity, courage, teamwork, and commitment are
                      demonstrated every day in its interactions with team members, partners, and customers.
                    </p>
                   
                    {/* Values section - Updated to use CSS Grid */}
                    <div className="grid grid-cols-2 gap-x-12 gap-y-6 justify-items-center">
                      <span className="text-white text-lg font-semibold"><b>Driven by Purpose</b></span>
                      <span className="text-white text-lg font-semibold"><b>Act with Compassion</b></span>
                      <span className="text-white text-lg font-semibold"><b>Be Future Ready</b></span>
                      <span className="text-white text-lg font-semibold"><b>Deliver Impact</b></span>
                    </div>
                  </div>
                </div>
              </div>
 
              {/* Title Bar */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[95%]">
                <div className="relative bg-white overflow-hidden">
                  <h2 className="text-black group-hover:text-white text-3xl font-bold text-center p-6 relative z-10 transition-colors duration-500">
                    VALUES
                  </h2>
                  <div className="absolute bottom-0 left-0 w-full h-full bg-orange-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default About;
import React from 'react';
import Vision from '../../images/vision-1.gif';
 
const VisionPage = () => {
  return (
    <div className=" bg-black py-0 text-white">
      <div className="flex flex-col lg:flex-row">
        {/* Text content section */}
        <div className="w-full lg:w-1/2  lg:p-16">
          <div className="max-w-2xl">
            {/* Vision heading with icon */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <h1 className="text-3xl lg:text-4xl font-bold text-orange-500">Our Vision</h1>
            </div>
           
            {/* Subheading */}
            <h2 className="text-xl lg:text-2xl font-semibold mb-8">
              Digitalize & Automate Everything Better
            </h2>
           
            {/* Vision paragraphs */}
            <div className="space-y-6">
              <p className="text-gray-300">
                We collaborate and create digitalize solutions to maximize business value for our
                customers. Our end-to-end suite of services enable our customers to operate
                profitably.
              </p>
             
              <p className="text-gray-300">
                Arthicus is on a quest to maximize our customers digital and automation journey with
                innovative solutions. We are a high-growth company committed to customer success
                throughout the lifecycle of our partnership. We combine technology, services and
                execution expertise to assist our customers to extract the full potential and value out of
                the platform and become a thriving organization in the future.
              </p>
            </div>
          </div>
        </div>
 
        {/* Image section */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-auto">
          <img
            src={Vision}
            alt="Night scene with moon over ocean"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
 
export default VisionPage;
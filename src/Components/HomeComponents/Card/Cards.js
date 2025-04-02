import React from "react";
import { Link } from "react-router-dom";
import sap60 from '../../images/sap60.svg';
import SAPBTP from '../../images/sapbtp.svg';
import SAPMFS from '../../images/sapmfs.svg';
import saptm from '../../images/saptm.svg';
import yardlogistics from '../../images/yard-logistics.svg';

function Cards() {
  const cardData = [
    {
      icon: sap60,
      title: "SAP EWM",
      description: "Our modern, flexible warehouse solution you can run agile operations with digitalised and accelerated...",
      button: "Learn More",
      link: "/sap-modules/sap-ewm",
    },
    {
      icon: saptm,
      title: "SAP TM",
      description: "Our integrated transportation management solution enables you to gain the visibility and control...",
      button: "Learn More",
      link: "/sap-modules/sap-tm",
    },
    {
      icon: SAPMFS,
      title: "SAP MFS",
      description: "Our tailored solution with the built-in component SAP EWM MFS to meet individual requirements enables you...",
      button: "Learn More",
      link: "/sap-modules/sap-mfs",
    },
    {
      icon: SAPBTP,
      title: "SAP BTP",
      description: "Our expertise in SAP Business Technology Platform (SAP BTP) will bring enterprise data into business value, compose...",
      button: "Learn More",
      link: "/sap-modules/sap-btp",
    },
    {
      icon: yardlogistics,
      title: "SAP YL",
      description: "Leverage SAP Yard Logistics to streamline and optimize your yard operations...",
      button: "Learn More",
      link: "/sap-modules/sap-yl",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row mb-0 justify-between items-start px-6 md:px-12 lg:px-14 gap-x-12">
      {/* Left section for the cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-2/3 lg:w-2/4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-black text-white rounded-lg p-2 hover:shadow-lg hover:scale-105 transition-transform duration-300 "
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              {/* Use img tag to display the icon */}
              <img src={card.icon} alt={`${card.title} icon`} className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <hr className="border-t border-gray-600 mb-4" />
            <p className="text-sm mb-6">{card.description}</p>
            <div className="flex justify-center">
              <Link to={card.link}>
                <button className=" bg-orange-500 text-black px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                  {card.button}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Right section for the text */}
      <div className="relative w-full md:w-1/3 lg:w-2/5 flex flex-col justify-start items-start mt-12 md:mt-0">
        {/* Combined Line Design */}
        <div className="absolute left-0 top-0 flex justify-center h-full">
          <div className="absolute bg-black h-40 md:h-60 w-[1px] top-4 z-0"></div>
          <div className="absolute bg-orange-500 h-16 md:h-28 w-[3px] top-8 z-10"></div>
        </div>
        <h2 className="text-2xl lg:mt-20 md:text-3xl font-bold text-orange-500 mb-4 ml-4">
          Modules We Offer
        </h2>
        <div className="text-sm md:text-md leading-relaxed ml-4">
          <p>We deliver excellence by hiring and partnering with</p>
          <p>the best in the business</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;

import React from 'react';
import KPMG from '../../images/kpmg.jpg';
import Colgate from '../../images/colgate.jpg';
import Innovapptive from '../../images/innovaptive.jpg';
import Merck from '../../images/Merk-2.jpg';
import TechMahindra from '../../images/tech.jpg';
import Vishal from '../../images/VMM-1.png';
import Mindtree from '../../images/mindtree.jpg';
import Phoenix from '../../images/phonex.jpg';
import Infokrafts from '../../images/infokrafts.svg';
import Techwave from '../../images/techwave.jpg';
import NTTData from '../../images/NTT.png';
import VKollab from '../../images/vkollab.png';
import Danfoss from '../../images/danfoss.png';
import Kagool from '../../images/kagool.png';
import LohiaCorp from '../../images/lohia.png';
import yash from '../../images/yashh.jpeg';
import accenture from '../../images/accenture.png';
import capgemini from '../../images/capgemini.png';
import soltius from '../../images/soltius.png';
import somany from '../../images/somany.png';
import madjid from '../../images/majid-al-futtaim.png';
import element from '../../images/element.png';
import kito from '../../images/kitoo.png';
import iffco from '../../images/iffco.png';
 import daikin from "../../images/daikin.png"
 import fusion from "../../images/fusion.png"
const Clients = () => {
  const leftLogos = [KPMG, Colgate, Innovapptive, Infokrafts, Merck, Mindtree, somany, Vishal, madjid, element, kito, iffco, Danfoss,daikin];
  const rightLogos = [KPMG, TechMahindra, NTTData, Techwave, yash, accenture, capgemini, soltius, VKollab, Kagool, Phoenix, LohiaCorp,fusion];
 
  const LogoGrid = ({ logos }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-1 flex items-center justify-center h-14 transform hover:scale-105 transition-transform duration-300"
        >
          <img src={logo} alt={`Logo ${index + 1}`} className="max-w-full max-h-full object-contain" />
        </div>
      ))}
    </div>
  );
 
  return (
    <div className="bg-black py-4">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center text-center mb-8 relative">
          <div>
            <h1 className="text-4xl md:text-4xl font-semibold text-white flex justify-center items-center h-full">
              Clients
            </h1>
            {/* Combined Line Design */}
            <div className="relative w-full flex justify-center mt-2">
              {/* White Line */}
              <div className="absolute bg-white h-[1px] w-[50%] opacity-50"></div>
              {/* Orange Line */}
              <div className="bg-orange-500 h-[4px] w-16 z-10"></div>
            </div>
          </div>
          {/* Only visible on md screens and above */}
          <div className="hidden md:block">
            <h1 className="text-4xl md:text-4xl font-semibold text-white flex justify-center items-center h-full">
              Partners
            </h1>
            {/* Combined Line Design */}
            <div className="relative w-full flex justify-center mt-2">
              {/* White Line */}
              <div className="absolute bg-white h-[1px] w-[50%] opacity-50"></div>
              {/* Orange Line */}
              <div className="bg-orange-500 h-[4px] w-16 z-10"></div>
            </div>
          </div>
          {/* Vertical Divider Line */}
          <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white opacity-50 transform -translate-x-1/2"></div>
        </div>
 
        {/* Logos Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <LogoGrid logos={leftLogos} />
          {/* Right Logos for larger screens */}
          <div className="md:hidden mt-12">
            {/* Partners Section for Mobile */}
            <h1 className="text-4xl font-semibold text-white text-center">Partners</h1>
            <div className="relative w-full flex justify-center mt-2">
              {/* White Line */}
              <div className="absolute bg-white h-[1px] w-[50%] opacity-50"></div>
              {/* Orange Line */}
              <div className="bg-orange-500 h-[4px] w-16 z-10"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <LogoGrid logos={rightLogos} />
            </div>
          </div>
          {/* Left Logos */}
          <div className="md:block hidden">
            <LogoGrid logos={rightLogos} />
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Clients;
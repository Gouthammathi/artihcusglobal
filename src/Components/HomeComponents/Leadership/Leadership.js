import React from "react";
import { useNavigate } from "react-router-dom";
import ckreddy from "../../images/ck-reddy.jpg";
import syamareddy from "../../images/syam-sundar-Reddy-.jpg";
import narareddy from "../../images/Muralidhar Reddy_.jpg";
import harireddy from "../../images/Harinath Reddy-.jpg";
import surendra from "../../images/surendra Gondipalli-.jpg";
import bhanureddy from "../../images/bhanu.jpg";
import sudhakar from "../../images/sudhakar.jpg";
import venkatkumar from "../../images/venkat-tangirala.jpg";
import kalyan from "../../images/kalyan-nese.jpg";
 
const ProfileCard = ({ image, name, title, onClick }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-32 h-32 mb-4 rounded-full overflow-hidden bg-gray-100">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-sm font-semibold mb-1">{name}</h3>
    <p className="text-xs text-gray-900 mb-4">{title}</p>
    <button
      onClick={onClick}
      className="bg-orange-500 text-white px-3 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300"
    >
      View More
    </button>
  </div>
);
 
const Leadership = () => {
  const navigate = useNavigate();
 
  const leadershipTeam = [
    { name: "C.K REDDY", title: "Founder CEO, and MD", image: ckreddy, route: "ck-reddy" },
    { name: "Syama Sundara Reddy", title: "Director and COO", image: syamareddy, route: "syama-reddy" },
    { name: "Nara Muralidhar Reddy", title: "Founder & Director", image: narareddy, route: "nara-reddy" },
    { name: "Hari Reddy Andluru", title: "Head of SAP Competency", image: harireddy, route: "hari-reddy" },
    { name: "Surendra Gondipalli", title: "President, Artihcus Global inc.", image: surendra, route: "surendra-gondipalli" },
  ];
 
  const advisoryBoard = [
    { name: "Bhanu Prakash Reddy", title: "Advisory Board Member", image: bhanureddy, route: "bhanu-reddy" },
    { name: "Sudhakar Amirapu", title: "Advisory Board Member", image: sudhakar, route: "sudhakar-amirapu" },
    { name: "Venkat Kumar Tangirala", title: "Advisory Board Member", image: venkatkumar, route: "venkat-tangirala" },
    { name: "Kalyan Nese", title: "Advisory Board Member", image: kalyan, route: "kalyan-nese" },
  ];
 
  const handleViewMore = (route) => {
    navigate(`/profile/${route}`);
  };
 
  return (
    <div className="container mx-auto px-6 py-16 max-w-screen-xl">
      <div className="flex justify-between gap-12">
        <div className="flex-1 max-w-[48%]">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Leadership</h2>
            <div className="relative w-full flex justify-center mt-2">
              <div className="absolute bg-black h-[1px] w-[50%] opacity-50"></div>
              <div className="bg-orange-500 h-[4px] w-16 z-10"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {leadershipTeam.map((leader, index) => (
              <ProfileCard
                key={index}
                {...leader}
                onClick={() => handleViewMore(leader.route)}
              />
            ))}
          </div>
        </div>
 
        <div className="border-l-2 border-dotted border-orange-500 h-auto opacity-30"></div>
 
        <div className="flex-1 max-w-[48%]">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Advisory Board</h2>
            <div className="relative w-full flex justify-center mt-2">
              <div className="absolute bg-black h-[1px] w-[50%] opacity-50"></div>
              <div className="bg-orange-500 h-[4px] w-16 z-10"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {advisoryBoard.map((member, index) => (
              <ProfileCard
                key={index}
                {...member}
                onClick={() => handleViewMore(member.route)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Leadership;
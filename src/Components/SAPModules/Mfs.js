import React, { useState } from 'react';
import headerImage from '../images/header.jpg';
import mfsImage from '../images/mfs.jpg';
import mfsCsImage from '../images/mfs-cs.png'; // New image for Conveyor Systems
 
function Mfs() {
  const [activeInfoIndex, setActiveInfoIndex] = useState(null);
 
  const handlePlusButtonClick = (index, e) => {
    e.stopPropagation();
    setActiveInfoIndex(activeInfoIndex === index ? null : index);
  };
 
  const accordionItems = [
    {
      title: 'Conveyor Systems',
      info: (
        <div className="flex flex-wrap items-center">
          {/* Left content */}
          <div className="lg:w-1/2 px-4">
            <p className="leading-relaxed mt-4">
              SAP MFS defines conveyor travel for totes, pallets, etc. on the automated conveyor lines flexibly as entities called “routes”. Complex conveyor system layouts with multi-level layouts or layouts with buffers, sorting lines, etc. can be comprehensively mapped out within SAP MFS.
            </p>
            <p className="leading-relaxed mt-4">
              The real-time capability of SAP MFS safeguards the communication between SAP and the PLC. Even at time-critical decision points with the kinds of response times necessary to ensure an uninterrupted flow of material. The failure of conveyor system sections triggers the activation of dynamic redirection strategies to ensure the highest possible availability for conveyor functionality.
            </p>
          </div>
 
          {/* Right image */}
          <div className="lg:w-1/2 px-4 flex justify-start">
            <img
              src={mfsCsImage} // New image for Conveyor Systems
              alt="Conveyor Systems"
              className="max-w-full sm:w-96 lg:w-[500px] h-auto"
              loading="lazy"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Small Parts AS/RS',
      info: (
        <div className="flex items-center">
          <div className="w-1/2 pr-4">
            <p className="leading-relaxed mt-4">
              AS/RS for small parts (for totes and trays), plus vertical lifter systems are controlled by SAP MFS. AS/RS for small parts are often implemented as double deep storage with multiple load handling gear.
            </p>
            <p className="leading-relaxed mt-4">
              The sophisticated IT optimization strategies required here are comprehensively supported by SAP MFS. The real-time capabilities of the SAP MFS system architecture guarantee rapid response times and optimum system performance.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src={require('../images/mfs-sp.png')} // Replace with your Small Parts AS/RS image path
              alt="Small Parts AS/RS"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      )
    },
    {
      title: 'High-Bay Warehouse System',
      info: (
        <div className="flex items-center">
          <div className="w-1/2 pr-4">
            <p className="leading-relaxed mt-4 ml-4">
              With the real-time capable SAP MFS, any type of automated high-bay warehouse system and integrated conveyor system can be controlled and optimized. Other IT subsystems (MFCs, etc.) are not required.
            </p>
            <p className="leading-relaxed mt-4 ml-4">
              SAP MFS sends movement commands in real-time directly to the PLC controlling the stacker cranes or integrated conveyor systems. Putaway and removal strategies, optimization (e.g. uniform product distribution, travel optimized storage bin search, double deep storage, multi deep storage, aisle changers, etc.) are fully mapped out within SAP MFS.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src={require('../images/mfs-hbw.jpg')} // Correct image path
              alt="High-Bay Warehouse System"
              className="w-96 h-72 ml-10"
              loading="lazy"
            />
          </div>
        </div>
      )
    },
    {
      title: 'Shuttle Storage',
      info: (
        <div className="flex flex-col items-center">
          <p className="text-left text-black mb-4">
            SAP MFS can control a highly automated shuttle AS/RS for small parts from any manufacturer directly (Direct SAP-PLC link). Here, SAP MFS has direct control over the individual shuttle cars, as well as the shuttle and store lifters. The real-time capabilities of SAP MFS ensure that nominal system output is indeed achieved by the optimum modelling of Putaway and removal strategies in SAP MFS.
          </p>
 
          <div className="flex w-full">
            <div className="w-1/2 pr-4">
              <p className="text-center font-semibold text-black mb-4">Single Deep Shuttle</p>
              <img
                src={require('../images/mfs-sds.png')} // Image path for Single Deep Shuttle
                alt="Single Deep Shuttle"
                className="max-w-full h-auto"
                loading="lazy"
              />
            </div>
 
            <div className="w-1/2 pl-4">
              <p className="text-center font-semibold text-black mb-4">Double Deep Shuttle</p>
              <img
                src={require('../images/mfs-dds.png')} // Image path for Double Deep Shuttle
                alt="Double Deep Shuttle"
                className="max-w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Multi-Deep Storage',
      info: (
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 text-left">
            <p className="text-black mb-4 ml-4">
              For multi-deep storage purpose-built Putaway strategies are mapped out in SAP MFS, so as to minimize the likelihood of goods relocation. Example for stock picking, handling units near aisles are reserved, and the stock picking strategy also takes pair formation into account where possible. Many projects with double/multiple deep HBS and AS/RS for small parts have now been successfully implemented with SAP MFS.
            </p>
          </div>
   
          <div className="w-full lg:w-1/2">
            <img
              src={require('../images/mfs-mds.jpg')} // Image path for Multi-Deep Storage
              alt="Multi-Deep Storage"
              className="w-70 h-64 ml-10"
              loading="lazy"
            />
          </div>
        </div>
      )
    }
    ,
    {
      title: 'Automated Guided Vehicle Systems',
      info: (
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 text-left">
            <p className="text-black mb-4 ml-2">
              Automated Guided Vehicle systems (AGVs), monorail overhead conveyors (MOCs), and in-floor conveyor systems (IFCs) are in-house conveyor systems with automatically controlled vehicles whose primary task is material transport. Depending on the manufacturer, SAP MFS offers partial to full control and optimization for such systems.
            </p>
            <p className="text-black mb-4 ml-2">
              SAP MFS sends movement commands directly to the control station or alternatively to each individual vehicle/Conveyor, processing return messages from these control systems in real time.
            </p>
          </div>
   
          <div className="w-full lg:w-1/2">
            <img
              src={require('../images/mfs-agvs.png')} // Image path for AGVs
              alt="Automated Guided Vehicle Systems"
              className="w-92 h-72 ml-4"
              loading="lazy"
            />
          </div>
        </div>
      )
    },
    { title: 'Goods-to-Person', info: 'The principle of “Goods-to-person” (Goods-to-Man) is based on the dynamic provisioning of product pallets/totes to warehouse personnel. As a rule, automated high-bay warehouse/automated small parts storage is equipped with GtP picking stations, which can be managed with SAP MFS. GtP is sound option if large unit quantities of different products need to be consolidated into deliveries. Featuring many configuration options, SAP EWM/MFS picking functionality offers support for these work centers with efficient, user-friendly dialog screens.' },
    {
      title: 'Pick-By/To-Light',
      info: (
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2">
            <p className="text-black mb-4 ml-4">
              In the field of small parts picking, where efficiency and quality are paramount (zero defect strategy), pick-by-light systems with carton flow racking are typically deployed. Pick-to-light in particular supports the assignment of picked goods to the target tote or carton.
            </p>
            <p className="text-black mb-10 ml-4">
              SAP EWM and SAP MFS manage the completed flow of information for the processing and forwarding of picking orders, as well as the organization of material flows and picking (subdivision of pick zones, forwarding of picked goods, target tote assignment, etc.). Single-stage, multi-stage, and parallel picking processes are given comprehensive support from SAP EWM and SAP MFS.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={require('../images/mfs-pbtl.png')}
              alt="Pick-By/To-Light"
              className="w-96 h-72 ml-10"
              loading="lazy"
            />
          </div>
        </div>
      )
    }
    ];
 
  return (
    <>
      <section className="relative">
        <div
          className="bg-cover bg-center bg-no-repeat h-[250px]"
          style={{ backgroundImage: `url(${headerImage})` }}
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold mt-6 text-white">SAP MFS</h2>
            </div>
          </div>
        </div>
      </section>
 
      <div className="container mx-auto pb-5 mt-8 px-4 sm:px-8 md:px-16 lg:px-36">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 px-2">
            <div className="text-center lg:text-left">
              <div className="inline-block mb-4">
                <span className="text-2xl font-bold text-orange-400 ml-52">SAP MFS</span>
              </div>
            </div>
            <p className="leading-relaxed mt-4">
              SAP Material Flow System is an integrated functional component within SAP EWM. SAP MFS is typically used for material flow control in automated warehouse systems (AS/RS for small parts, HBS), and deployed in demanding, highly-automated logistics centers.
            </p>
            <p className="leading-relaxed mt-4">
              SAP MFS provides comprehensive, performance-optimized control for highly-dynamic, fully-automated shuttle AS/RS systems, sorters, and sequencers. The deployment of SAP MFS results in a two-tier system architecture (SAP-PLC) with a maximum level of SAP integration and simple interfaces, making external middleware and subsystems, such as warehouse/material flow control system (WCS/MFC) surplus to requirements. This means lower operation costs, greater flexibility and transparency, and maximum protection for your investment.
            </p>
          </div>
 
          <div className="w-full lg:w-1/2 px-4 flex justify-end">
            <img
              src={mfsImage}
              alt="MFS"
              className="max-w-full sm:w-96 lg:w-[900px] h-96"
              loading="lazy"
            />
          </div>
        </div>
      </div>
 
      <div className="container mx-auto pb-5">
        <div className="flex flex-wrap justify-center px-4 sm:px-8 md:px-16 lg:px-36">
          <div className="w-full lg:flex flex-col items-center">
            {accordionItems.map((item, index) => (
              <div key={index} className="mb-4 w-full">
                <div className="relative bg-orange-400 rounded-md shadow-lg">
                  <div className="px-4 py-6 text-white text-sm lg:text-base">{item.title}</div>
                  <span
                    onClick={(e) => handlePlusButtonClick(index, e)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl cursor-pointer"
                  >
                    {activeInfoIndex === index ? '−' : '+'}
                  </span>
                </div>
 
                {activeInfoIndex === index && (
                  <div className="mt-2 bg-gray-100 p-4 rounded-lg shadow">
                    <p className="text-sm lg:text-base">{item.info}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Mfs;
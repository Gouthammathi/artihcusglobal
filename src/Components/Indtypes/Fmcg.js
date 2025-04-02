import React, { useState } from "react";
import retail_banner from "../images/fmcg-banner.jpg";
import retail from "../images/warehouse.jpg";
import why_retail from "../images/why-retail.jpg";
import distribution from "../images/warework.jpg";
import factory from "../images/connect.jpg";
import simplified from "../images/notes.jpg";
import supply from "../images/supply.jpg";
import car from "../images/3d.jpg";
import deployment from "../images/deployment.jpg";
import lean from '../images/Lean-and-Nimble-Icon.svg';
import future from '../images/Future-Ready-Core-Icon.svg';
import drive from '../images/Drive-Consumer-Intimacy-Icon.svg';
import sapyoo from '../images/sap-yoo.svg';
import warehouse from '../images/warehouse.svg';
 
function Fmcg() {
  const [activeTab, setActiveTab] = useState("inbound");
 
  const tabs = {
    inbound: {
      title: "Warehouse Space Optimization",
      content:
        "SAP EWM (Extended Warehouse Management) provides advanced Warehouse management capabilities to FMCG industry. One of the key benefits of SAP EWM is its ability to optimize warehouse space and increase storage capacity efficiently using space-saving strategies such as multi-level racking and dynamic slotting. Multi-level racking utilizes vertical space in a warehouse by stacking pallets or cartons on top of each other, increasing the storage capacity significantly.Dynamic slotting enables companies to optimize their warehouse storage by placing fast-moving items in easily accessible locations while placing slower-moving items in less accessible locations. This feature helps reduce the costs and improving efficiency.SAP EWM offers various other features like real-time inventory tracking, automated order processing, and intelligent route planning and others. By deploying SAP EWM, FMCG industry can maximize available warehouse space, reduce warehousing expenses, and improve overall supply chain efficiency.",
      image: distribution,
    },
    pickingArea: {
      title: "Efficient Inventory Management",
      content:
        "SAP EWM (Extended Warehouse Management) provides real-time visibility into inventory levels and enables optimized inventory management processes, accurate demand forecasting, automated replenishment, and dynamic inventory allocation.Accurate demand forecasting allows and ensures that the right amount of inventory is stocked to meet customer needs without overstocking.Automated replenishment ensures that inventory is automatically replenished when stock levels reach a predefined minimum threshold, reducing the likelihood of stockouts.Dynamic inventory allocation allows to allocate inventory to different locations based on demand, ensuring that products are always available when and where they are needed.By deploying SAP EWM, enterprises can reduce inventory costs, improve customer service levels, and increase operational efficiency, making it an ideal solution for FMCG industry Warehouses",
      image: factory,
    },
    pickingProcess: {
      title: "Labor Productivity",
      content:
        "SAP EWM (Extended Warehouse Management) helps FMCG companies improve labor productivity by automating manual processes, optimizing workflows, and providing real-time performance metrics. SAP EWM features like voice-enabled picking, mobile apps, RFID, QR-code, and barcode enabled Scanning and augmented reality, companies can reduce their labor costs while improving the accuracy and speed of their operations. Automated Warehouse can choose to have the handheld devices sync with the central master database instantly with Streamline workflows with handheld devices sync. Mobile apps enable warehouse personnel to access real-time information, allowing them to complete tasks quickly and accurately. On-floor instant label printing, anywhere print labels real-time, on the spot, with portable printers will cut down all time-consuming drivels. Forklift automation and location mapping. Easily automate all forklift-centric jobs by mounting smart devices such as tablets, smart displays on your forklifts. Ensure precise and smooth forklift usage across the warehouse by leveraging indoor warehouse mapping for better movement. By deploying SAP EWM, FMCG companies can automate their warehouse processes, optimize workflows and improve labor productivity, reduce labor costs and increased operational efficiency.",
      image: simplified,
    },
    pick: {
      title: "Streamlined Supply Chain Management",
      content:
        "SAP EWM provides comprehensive features for managing complex supply chain networks. With transportation management, cross-docking, and yard management capabilities, companies can optimize their end-to-end supply chain operations, resulting in reduced costs and improved delivery times. Transportation management allows companies to optimize their transportation processes, including route planning, carrier selection, and freight management. Cross-docking enables companies to streamline their supply chain operations by moving products directly from inbound to outbound shipments without the need for storage, reducing inventory carrying costs and improving delivery times. Yard management enables companies to manage their yard operations, including dock management, trailer management, and yard visibility, resulting in reduced wait times and increased throughput. By deploying SAP EWM, FMCG companies can optimize their end-to-end supply chain operations, reduce operational cost and improved delivery times. SAP EWM is an ideal solution for FMCG companies looking to improve their supply chain efficiency.",
      image: supply,
    },
  };
  const offerings = [
    {
      title: "Lean And Nimble",
      description:
        "Helping retailers run efficiently, deliver flexibility, availability, and cost savings.",
      image: lean,
    },
    {
      title: "Future-Ready Core",
      description:
        "Transforming the warehousing system to drive enterprise agility and deliver on growth promises.",
      image: future,
    },
    {
      title: "Omnichannel Experiences",
      description:
        "Developing seamless customer experience across channels & providing personalized offers leveraging customer insights & Operational patterns",
      image: drive,
    },
    {
      title: "Supply Chain Optimization",
      description:
        "Addressing the Supply chain disruption challenges through insights-driven forecasting, E2E visibility, optimization of logistics & warehousing network",
      image: drive,
    },
    {
      title: "SAP MFS Implementation & IoT Enablement",
      description:
        "Providing fully customized Material Flow Technology for Distribution Centres & IOT enablement without the need for an additional Warehouse Control Unit (WCU) or Warehouse Control System (WCS)",
      image: sapyoo,
    },
    {
      title: "Retail-Specific Master Data",
      description:
        "Helping retailers to maintain retail-specific master data. Extended Warehouse Management (EWM) provides you with new fields that can be defined in EWM only in addition to SAP ERP Master Data",
      image: warehouse,
    },
  ];
 
  return (
    <div>
      {/* Section 1: Manufacturing Header */}
      <div
        className="text-white py-20 text-center lg:text-left"
        style={{
          backgroundImage: `url(${retail_banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="px-6 lg:px-36 text-3xl lg:text-4xl font">
          Fast-Moving Consumer Goods (FMCG)<span className="block"> & Services</span>
        </h1>
        <p className="px-6 lg:px-36 mt-4">
          Welcome to the new era of commerce and Future-ready ecosystems. We help you fulfill
          <span className="block">
            omnichannel demand and sustainable consumption with supply chain efficiency, credit
          </span>
          management, and on-time delivery efficiency.
        </p>
      </div>
 
      {/* Section 2: Manufacturing Content */}
      <div className="px-6 lg:px-36 py-12 lg:flex lg:space-x-8">
        <div className="flex justify-center lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={retail}
            alt="Manufacturing Factory"
            className="w-72 lg:w-96"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-orange-500 text-2xl lg:text-3xl font-bold mb-4">
            <span className="text-green-300 mr-2 text-4xl lg:text-5xl">:</span>
            Enterprise Solutions for FMCG
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We offer the right SCM solutions and designs for digitalization, secure and innovative solutions. We help you improve the consumer experience in FMCG & Services, on-the-go transactions that speed up and simplify the Inbound & Outbound process as well as inventory management and delivery using
            <span className="text-orange-500 font-bold"> SAP EWM (Extended Warehouse Management)</span> for <span className="text-orange-500 font-bold">Warehouse Management</span> and <span className="text-orange-500 font-bold">SAP BTP</span> solutions for Mobile and hand-held devices.
          </p>
          <p className="mt-6 text-justify">
            <span className="text-orange-500 font-bold">SAP EWM (Extended Warehouse Management)</span> provides real-time visibility into inventory levels, enabling FMCG companies to optimize their inventory management processes, accurate demand forecasting, automated replenishment, and dynamic inventory allocation. By adopting SAP EWM, companies can reduce inventory costs, improve labor productivity, and increase operational efficiency.
          </p>
        </div>
      </div>
 
      {/* Section 4: Offerings */}
      <div className="px-6 lg:px-36 py-12">
        <h2 className="text-orange-500 text-2xl lg:text-3xl font-bold mb-8">
          <span className="text-green-300 mr-2 text-4xl lg:text-5xl">:</span>
          How SAP EWM resolves 3 challenges facing retailers
        </h2>
        <p className="text-gray-600 leading-relaxed">
          FMCG companies face various challenges in warehousing, including limited warehouse space, inefficient inventory management, high labor costs, and complex supply chain networks.
        </p>
      </div>
 
      {/* Section 5: Tabs */}
      <div className="flex flex-wrap justify-center mb-6 space-y-4 lg:space-y-0 lg:space-x-4">
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === key
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700"
              }`}
            onClick={() => setActiveTab(key)}
          >
            {tabs[key].title}
          </button>
        ))}
      </div>
      <div className="px-6 lg:px-36 py-12 lg:flex lg:space-x-8">
        <div className="lg:w-1/2 text-gray-700">
          <h3 className="text-xl lg:text-2xl font-bold text-black mb-4">
            {tabs[activeTab].title}
          </h3>
          <p>{tabs[activeTab].content}</p>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
          <img
            src={tabs[activeTab].image}
            alt={tabs[activeTab].title}
            className="w-72 lg:w-96 rounded-lg shadow"
          />
        </div>
      </div>
 
      {/* Section 8: Offerings */}
      <div className="px-6 lg:px-36 mb-20">
        <h2 className="text-2xl lg:text-4xl font-bold mb-12">
          <span className="text-teal-400 mr-2">:</span>
          <span className="text-orange-500">We Offerings</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {offerings.map((offering, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={offering.image}
                alt={offering.title}
                className="w-16 h-16 mb-6"
              />
              <h3 className="text-lg lg:text-xl font-bold mb-4 text-gray-800">
                {offering.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default Fmcg;
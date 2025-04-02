import React, { useState } from "react";
import retail_banner from "../images/retail_banner.jpg";
import retail from "../images/retail.jpg";
import why_retail from "../images/why-retail.jpg";
import distribution from "../images/distribution.jpg";
import factory from "../images/picking-area.jpg";
import simplified from "../images/simplified.jpg";
import car from "../images/3d.jpg";
import deployment from "../images/deployment.jpg";
import lean from "../images/Lean-and-Nimble-Icon.svg";
import future from "../images/Future-Ready-Core-Icon.svg";
import drive from "../images/Drive-Consumer-Intimacy-Icon.svg";
import sapyoo from "../images/sap-yoo.svg";
import warehouse from "../images/warehouse.svg";
 
function Fashion() {
  const [activeTab, setActiveTab] = useState("inbound");
 
  const tabs = {
    inbound: {
      title: "Coordinating Inbound",
      content: "The retail store is core for multiple inbound scenarios, mainly from vendors and distribution centers. Implementing of SAP EWM in the retail Industry in the same SAP landscape, the operators can easily process the goods receipts and proceed with the put-away process without any additional repacking or relabeling activities. Upon the receipt of the packages prepared in the distribution centers, EWM can direct the goods straight from the goods receipt area to the good issue zone to fulfill supply demand.It is important for vendors to deliver to shops prior to the opening hours to solve this challenge, Dock Appointment Scheduling in EWM supports the ability to fix delivery hours for each vendor. Store Managers can therefore improve inbound planning so as to allocate the required resources to support the unloading and put-away activities.In case distribution warehouses are having to support customer returns, moving this operation into the EWM, improves the overall operation, customer experience and overall operating costs. Any stock discrepancy occurs at the receipt of goods into the store, it will be easier to book the difference against the carrier or the issuing distribution center by using the appropriate exception codes.",
      image: distribution,
    },
    pickingArea: {
      title: "Managing the Picking Area",
      content: "Managing the picking area in EWM offers first, the opportunity to run the replenishment process to make stock available for the customers and secondly, to harmonize the logistics execution across all the store areas. The replenishment process can be automatically triggered based on min/max quantity, or including the customer demand (e-comm etc.), as well as manually by any store operator after a visual check of the picking locations.",
      image: factory,
    },
    pickingProcess: {
      title: "Simplifying the Picking Process",
      content: "Managing the picking location in EWM is to provide a more efficient way of picking & packing e-comm orders using the “Pick by Cart and Packing” Fiori Apps.SAP S/4 HANA Retail with embedded EWM, the operators are prompted to adopt those new logistics processes in a more simplified way using the Fiori Launchpad to handle both retail and the logistics processes at the same time.",
      image: simplified,
    },
  };
 
  const offerings = [
    {
      title: "Lean And Nimble",
      description: "Helping retailers run efficiently...",
      image: lean,
    },
    {
      title: "Future-Ready Core",
      description: "Transforming the warehousing system...",
      image: future,
    },
    {
      title: "Omnichannel Experiences",
      description: "Developing seamless customer experience...",
      image: drive,
    },
    {
      title: "Supply Chain Optimization",
      description: "Addressing the Supply chain disruption challenges...",
      image: drive,
    },
    {
      title: "SAP MFS Implementation & IoT Enablement",
      description: "Providing fully customized Material Flow Technology...",
      image: sapyoo,
    },
    {
      title: "Retail-Specific Master Data",
      description: "Helping retailers maintain retail-specific master data...",
      image: warehouse,
    },
  ];
 
  return (
    <div className="text-gray-900">
      {/* Header Section */}
      <div
        className="text-white py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${retail_banner})` }}
      >
        <div className="px-4 md:px-12 lg:px-36">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left">
            Fashion & Retail
          </h1>
          <h1 className="mt-4 text-base md:text-lg lg:text-xl leading-relaxed text-center lg:text-left">
            Leveraging technology to enable the next generation of fashion and retail automation and
            <span className="block lg:inline">
              management systems. Reimagine operational processes and services, and reinvent the
            </span>
            supply chain and value chain.
          </h1>
        </div>
      </div>
 
 
      {/* Content Section */}
      <div className="px-4 md:px-12 lg:px-36 py-12 lg:flex lg:space-x-8">
        <div className="flex justify-center lg:w-1/2">
          <img src={retail} alt="Retail" className="w-full max-w-md rounded-lg" />
        </div>
        <div className="flex-1 mt-6 lg:mt-0">
          <h2 className="text-2xl md:text-3xl text-orange-500 font-bold">
            Automation Solutions for Retail
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We offer the right <span className="text-orange-500 font-bold">SCM (Supply Chain Management)</span> solutions and designs for digitalization, providing secure and innovative solutions. We help you enhance the consumer experience in fashion and retail by streamlining on-the-go transactions, accelerating and simplifying the outbound process, and improving inventory management, online orders, and delivery.
            <span className="text-orange-500 font-bold">SAP EWM (Extended Warehouse Management)</span> supports warehouse management, while
            <span className="text-orange-500 font-bold"> SAP BTP</span> solutions empower
            mobile and handheld devices for seamless operations.
 
          </p>
          <p className="text-justify mt-12"> The insights and customer wins from <span className="text-orange-500 font-bold">SAP EWM</span> are being incorporated into our future enterprise solutions, enhancing
            <span className="text-orange-500 font-bold">SCM software systems</span> and supporting digital transformation initiatives to deliver success.</p>
 
 
        </div>
      </div>
      {/* Section 3: Challenges Faced */}
      <div className="px-6 md:px-12 lg:px-36 py-12 lg:flex lg:space-x-8">
        {/* Right Content */}
        <div className="flex-1 relative justify-center max-w-xl mb-8 lg:mb-0">
          <h2 className="text-orange-500 text-2xl md:text-3xl font-bold mb-4">
            <span className="text-green-300 mr-2 text-4xl md:text-5xl">:</span>
            Why retailers need new technology
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            In a typical large fashion and retail store, multiple partners interact, receiving goods from distribution centers and vendors, and managing returns from customers. These activities include picking and shipping for B2B, B2C, e-commerce, and Click and Collect orders. Ensuring goods are available quickly for customers is the primary challenge faced by store managers. By introducing solutions supported by
            <span className="text-orange-500"> SAP EWM</span> and
            <span className="text-orange-500"> SAP BTP</span> into fashion and retail warehousing, which integrate across their complex supply chain, retailers can overcome these challenges. This integration ensures that large retailers can respond to customer demands, maintain stock availability, and have the resources in place to fulfill timely deliveries at a lower cost.
          </p>
        </div>
        {/* Left Image */}
        <div className="flex justify-center lg:w-1/2">
          <img
            src={why_retail}
            alt="Manufacturing Factory"
            className="w-10/12 h-48 sm:h-60 object-cover"
          />
        </div>
      </div>
 
      {/* Section 4: Offerings */}
      <div className="px-6 md:px-12 lg:px-36 py-12 lg:flex lg:space-x-8">
        {/* Right Content */}
        <div className="flex-1 relative justify-center max-w-xl mb-8 lg:mb-0">
          <h2 className="text-orange-500 text-2xl md:text-3xl font-bold mb-4">
            <span className="text-green-300 mr-2 text-4xl md:text-5xl">:</span>
            How SAP EWM resolves 3 <span>challenges</span> facing retailers <span>with</span> Warehousing Management
          </h2>
        </div>
        {/* Left Text */}
        <div className="flex mt-6 justify-center lg:w-1/2">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Retail companies have started diversifying the processes for their stores, trying to boost the transportation and the logistics operation to obtain faster deliveries.
          </p>
        </div>
      </div>
 
 
      {/* Tabs Section */}
      <div className="px-4 md:px-12 lg:px-36 py-12">
        <div className="flex space-x-4 justify-center mb-6">
          {Object.keys(tabs).map((key) => (
            <button
              key={key}
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === key ? "bg-orange-500 text-white" : "bg-gray-200"
                }`}
              onClick={() => setActiveTab(key)}
            >
              {tabs[key].title}
            </button>
          ))}
        </div>
        <div className="lg:flex lg:space-x-8 items-center">
          <div className="lg:w-1/2">
            <h3 className="text-xl font-bold mb-4">{tabs[activeTab].title}</h3>
            <p className="text-gray-700 leading-relaxed">{tabs[activeTab].content}</p>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <img
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
 
      {/* Offerings Section */}
      <div className="px-4 md:px-12 lg:px-36 py-12">
        <h2 className="text-3xl font-bold mb-12 text-orange-500">We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <div key={index} className="text-center">
              <img
                src={offering.image}
                alt={offering.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{offering.title}</h3>
              <p className="text-gray-600">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default Fashion;
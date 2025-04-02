import React, { useState } from "react";
import retail_banner from "../images/ecom.jpg";
import ecom from '../images/e-commerce.jpg';
import why_retail from "../images/commerce.jpg";
import retail from "../images/retail.jpg";
 
function Ecomm() {
  return (
    <div>
      {/* Section 1: Header */}
      <div
        className="text-white py-20 px-6 md:px-12 lg:px-36"
        style={{
          backgroundImage: `url(${retail_banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">E-Commerce</h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          Capitalize on our skills in creating E-commerce solutions and benefit
          from reliable, expertly made, and formidable IT solutions.
        </p>
      </div>
 
      {/* Section 2: E-Commerce Content */}
      <div className="px-6 md:px-12 lg:px-36 py-12 lg:flex lg:space-x-8">
        {/* Left Image */}
        <div className="flex justify-center lg:w-1/2 mb-6 lg:mb-0">
          <img
            src={retail}
            alt="E-Commerce"
            className="w-full md:w-4/5 lg:w-5/6"
          />
        </div>
 
        {/* Right Content */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-orange-500 text-2xl md:text-3xl font-bold mb-4">
            <span className="text-green-300 mr-2 text-4xl md:text-5xl">:</span>
            E-Commerce
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Latest studies conducted by AI Multiple indicate that E-commerce is experiencing a significant shift because of changes in consumer habits and technological advancements. This brings about several obstacles for E-commerce companies that they must address.
          </p>
          <p className="text-orange-500 font-bold mt-8">These challenges encompass:</p>
          <ul className="space-y-2 list-none mt-4 text-gray-600 font-medium">
            {[
              "Utilizing E-commerce data effectively",
              "Building trust in digital platforms",
              "Retaining customer loyalty",
              "Improving supply chain management",
              "Streamlining operations across international borders",
              "Addressing the development of user-friendly E-commerce platforms",
              "Guaranteeing smooth mobile shopping experiences",
              "Making the return and refund procedures more efficient",
              "Upholding superior content quality",
              "Offering outstanding online customer support",
            ].map((challenge, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3"></span>
                {challenge}
              </li>
            ))}
          </ul>
          <p className="mt-6">
            At Artihcus, we boast extensive experience in E-commerce, excelling
            in crafting cutting-edge business solutions on platforms like
            Shopify, Adobe Commerce, BigCommerce, SAP Commerce Cloud, Magento,
            and WooCommerce.
          </p>
          <p className="mt-4">
            We offer innovative tools, whether customizing existing solutions or
            building them from scratch, along with dedicated support to help your
            business thrive in today's digital landscape. Our E-commerce expertise
            shines through in solutions like the CPG Data sales analytics
            platform, significantly reducing supplier data analysis time and
            enabling swift, data-driven decisions.
          </p>
        </div>
      </div>
 
      {/* Section 3: Artihcus Solutions */}
      <div className="px-6 md:px-12 lg:px-36 py-12 lg:flex lg:space-x-8">
        {/* Left Content */}
        <div className="flex-1 max-w-xl mb-6 lg:mb-0">
          <h2 className="text-orange-500 text-2xl md:text-3xl font-bold mb-4">
            <span className="text-green-300 mr-2 text-4xl md:text-5xl">:</span>
            Artihcus E-commerce Solutions for Business
          </h2>
          {[
            {
              title: "Development of bespoke e-commerce software:",
              description:
                "Our group will create a tailored e-commerce solution to satisfy your unique business needs.",
            },
            {
              title: "Development of solutions based on e-commerce platforms:",
              description:
                "Make the most of your e-commerce potential by utilizing contemporary tools and platforms.",
            },
            {
              title: "Customization, redesign, and integration of online stores:",
              description:
                "We link seamlessly with ERPs, payment gateways, and third-party services while implementing modern UI/UX designs.",
            },
            {
              title: "Delivery, deployment, and store migration:",
              description:
                "We automate, move, and optimize deployments to improve performance and meet business objectives.",
            },
            {
              title: "Evaluation of solutions, advice, and assistance:",
              description:
                "We examine your solutions and offer plans to improve security, compatibility, and performance.",
            },
            {
              title: "Distribution and Extensions:",
              description:
                "With our experts, realize your plugin or extension concept and expand your audience through e-commerce platforms.",
            },
          ].map((solution, index) => (
            <p key={index} className="mt-5 text-gray-600 leading-relaxed">
              <span className="text-orange-500 font-bold">{solution.title}</span> {solution.description}
            </p>
          ))}
        </div>
 
        {/* Right Image */}
        <div className="flex justify-center lg:w-1/2">
          <img
            src={why_retail}
            alt="E-Commerce Solutions"
            className="w-full md:w-4/5 lg:w-5/6"
          />
        </div>
      </div>
    </div>
  );
}
 
export default Ecomm;
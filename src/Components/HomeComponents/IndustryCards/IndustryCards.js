import React from 'react';
import { Link } from 'react-router-dom';
import retail from '../../images/retail.jpg';
import fmcg from '../../images/fmgc.jpg';
import thpl from '../../images/3pll.jpg';
import ecom from '../../images/e-commerce.jpg';
import manu from '../../images/manu.jpg';
import pharma from '../../images/pharmace.jpg';
import auto from '../../images/automative.jpg';
import food from '../../images/foodbev.jpg';

const industries = [
  {
    title: "RETAIL",
    image: retail,
    description: "The pace of change across retail is dramatic, we have expertise and ability to quickly develop and deploy solution that guarantee commercial success.",
    route: "/industries/fashion-&-retail"
  },
  {
    title: "FMCG",
    image: fmcg,
    description: "Specialized solutions for Fast-Moving Consumer Goods industry with focus on supply chain optimization and market analytics.",
    route: "/industries/fmcg"
  },
  {
    title: "3PL",
    image: thpl,
    description: "Third-party logistics solutions with integrated technology platforms for seamless operations and tracking.",
    route: "/industries/3pl"
  },
  {
    title: "E-COMMERCE",
    image: ecom,
    description: "Complete e-commerce solutions with modern technology stack for optimal online retail operations.",
    route: "/industries/e-commerce"
  },
  {
    title: "MANUFACTURING",
    image: manu,
    description: "Smart manufacturing solutions with Industry 4.0 integration and automation capabilities.",
    route: "/industries/manufacturing"
  },
  {
    title: "PHARMACEUTICAL",
    image: pharma,
    description: "Digital healthcare solutions focusing on patient care and operational efficiency.",
    route: "/industries/pharmaceutical"
  },
  {
    title: "AUTOMOTIVE",
    image: auto,
    description: "Innovative automotive solutions for modern vehicle manufacturing and distribution.",
    route: "/industries/automotive"
  },
  {
    title: "FOOD & BEVERAGES",
    image: food,
    description: "End-to-end hospitality management solutions for enhanced guest experience.",
    route: "/industries/food-&-beverage"
  }
];

const IndustryCards = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-orange-500 mb-2">Industries We Expertise</h1>
      <p className="text-xl mb-8">Experience makes a difference.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            {/* Image Container */}
            <div className="aspect-[4/3] relative">
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <div className="text-center p-4">
              <h3 className="text-xl font-bold text-orange-500 mb-4">{industry.title}</h3>

              {/* Description - Hidden by default, shown on hover */}
              <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                <p className="text-sm text-gray-700 mb-4">{industry.description}</p>
              </div>

              {/* Button */}
              <Link to={industry.route}>
                <button className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
                  View More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryCards;

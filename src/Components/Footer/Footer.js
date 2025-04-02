import React from 'react';
import logo from '../images/Logooo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
 
const Footer = () => {
  const aboutRoutes = {
    'Careers': '/about/careers',
    'Events': '/about/events',
    'News': '/about/news',
    'Blog': '/about/blogs'
  };
 
  const sapModuleRoutes = {
    'SAP EWM': '/sap-modules/sap-ewm',
    'SAP MFS': '/sap-modules/sap-mfs',
    'SAP YL': '/sap-modules/sap-yl',
    'SAP TM': '/sap-modules/sap-tm',
    'SAP BTP': '/sap-modules/sap-btp'
  };
 
  const industryRoutes = {
    'Fashion & Retail': '/industries/fashion-&-retail',
    'FMCG': '/industries/fmcg',
    '3PL': '/industries/3pl',
    'E-Commerce': '/industries/e-commerce',
    'Manufacturing': '/industries/manufacturing',
    'Pharmaceutical': '/industries/pharmaceutical',
    'Automotive': '/industries/automotive',
    'Food & Beverage': '/industries/food-&-beverage'
  };
 
  return (
    <footer className="bg-black text-white py-4 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Company Info */}
        <div className="lg:col-span-1">
          <div className="bg-white p-4 rounded-lg w-48 mb-6">
            <img
              src={logo}
              alt="Artihcus Global"
              className="w-full"
            />
          </div>
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            We collaborate and create digitalize solutions to maximize business value for our customers.
            Our end-to-end suite of services enable our customers to operate profitably.
          </p>
          <div className="flex space-x-4">
            <a href="https://x.com/i/flow/login?redirect_after_login=%2FArtihcusglobal" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700">
              𝕏
            </a>
            <a href="https://www.linkedin.com/company/artihcus-global/" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700">
              in
            </a>
          </div>
        </div>
 
        {/* About and SAP Modules Links */}
        
          {/* About Links */}
          <div>
          <h3 className="text-xl font-semibold mb-6">About Links</h3>
          <ul className="space-y-3">
              {Object.entries(aboutRoutes).map(([item, route]) => (
                <li key={item}>
                  <Link
                    to={route}
                    className="text-gray-300 hover:text-white flex items-center"
                  >
                    <span className="text-orange-500 mr-2">›</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
        </div>
 
          {/* SAP Modules */}
          <div>
            <h3 className="text-xl font-semibold mb-6">SAP Modules</h3>
            <ul className="space-y-3">
              {Object.entries(sapModuleRoutes).map(([item, route]) => (
                <li key={item}>
                  <Link
                    to={route}
                    className="text-gray-300 hover:text-white flex items-center"
                  >
                    <span className="text-orange-500 mr-2">›</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
       
           {/* Industries */}
           <div>
          <h3 className="text-xl font-semibold mb-6">Industries</h3>
          <ul className="space-y-3">
  {Object.entries(industryRoutes).map(([item, route]) => (
    <li key={item}>
      <Link
        to={route}
        className="text-gray-300 hover:text-white flex items-center"
      >
        <span className="text-orange-500 mr-2">›</span>
        {item}
      </Link>
    </li>
  ))}
</ul>
        </div>
 
        {/* Contact Details */}
        <div className=''>
          <h3 className="text-xl font-semibold mb-6">Contact Details</h3>
          <div className="space-y-4">
            <div className="flex space-x-3">
              <span className="text-orange-500">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <p className="text-gray-300 text-xs">
                <a href="https://www.google.com/maps?q=Arthicus+Global+Private+Limited,+Hyderabad,+India">
                  Artihcus Global Private Limited,
                  Plot No. 227 – Kartikeya Towers, 1st floor,
                  Matrusri Nagar, Miyapur,Hyderabad, Telangana 500049, India
                </a>
              </p>
            </div>
            {/* Phone Link */}
            <div className="flex space-x-3">
              <span className="text-orange-500">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <a href="tel:+914035160930" className="text-gray-300 text-sm hover:text-white">+91-40-35160930</a>
            </div>
            {/* Email Link */}
            <div className="flex space-x-3">
              <span className="text-orange-500">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <a href="mailto:info@artihcus.com" className="text-gray-300 text-sm hover:text-white">info@artihcus.com</a>
            </div>
          </div>
        </div>
       </div>
 
    
      
 
      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-4 mt-3 border-t border-gray-800">
        <div className="text-center text-gray-400 text-sm">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-white">Terms and Conditions</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-white">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;
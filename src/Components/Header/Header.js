import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/Logooo.png';
import greyhr from '../images/greyhr.png';
import { FaTwitter, FaLinkedin, FaBlog, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for globe dropdown
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const serviceRoutes = {
    'SAP Services': {
      'SAP Implementation': '/services/sap-implementation',
      'SAP Rollouts': '/services/sap-rollouts',
      'SAP Support': '/services/sap-support',
      'SAP Application Management Services': '/services/sap-app-mng',
      'SAP Migration': '/services/sap-migration',
      'SAP Security Services': '/services/sap-security-services',
      'SAP Integration': '/services/sap-integration',
      'SAP Migration to Cloud': '/services/sap-migrate',
      'SAP S/4 HANA On premise': '/services/sap-hana',
      'SAP S/4 HANA RISE with SAP': '/services/sap-rise',
      'SAP S/4 HANA Grow with SAP': '/services/sap-grow',
    },
    'Application Services': {
      'Custom Software': '/services/custom-soft',
      'Infrastructure Services': '/services/infra-serv',
      'Mobile Development': '/services/mob-dev',
      'Web Development': '/services/web-dev',
    },
    'Artificial Intelligence': {
      'AI Solutions': '/services/ai-solutions',
      'AI Services': '/services/ai-services',
    },
  };

  const handleNavigation = (title, item = null, subItem = null) => {
    if (title === 'Services' && item && subItem) {
      // Use the predefined route for services
      const route = serviceRoutes[item]?.[subItem];
      if (route) {
        navigate(route);
      }
    } else {
      // Default routing logic for other sections
      const baseRoute = title.toLowerCase().replace(/\s+/g, '-');
      if (subItem) {
        const subItemRoute = subItem.toLowerCase().replace(/\s+/g, '-');
        const itemRoute = item.toLowerCase().replace(/\s+/g, '-');
        navigate(`/${baseRoute}/${itemRoute}/${subItemRoute}`);
      } else if (item) {
        const itemRoute = item.toLowerCase().replace(/\s+/g, '-');
        navigate(`/${baseRoute}/${itemRoute}`);
      } else {
        navigate(`/${baseRoute}`);
      }
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  const navigationItems = {
    Services: {
      submenus: {
        'SAP Services': [
          'SAP Implementation',
          'SAP Rollouts',
          'SAP Support',
          'SAP Application Management Services',
          'SAP Migration',
          'SAP Security Services',
          'SAP Integration',
          'SAP Migration to Cloud',
          'SAP S/4 HANA On premise',
          'SAP S/4 HANA RISE with SAP',
          'SAP S/4 HANA Grow with SAP',
        ],
        'Application Services': [
          'Custom Software',
          'Infrastructure Services',
          'Mobile Development',
          'Web Development',
        ],
        'Artificial Intelligence': [
          'AI Solutions',
          'AI Services',
        ],
      },
    },
    'SAP Modules': ['SAP EWM', 'SAP MFS', 'SAP YL', 'SAP TM', 'SAP BTP'],
    Industries: [
      'Fashion & Retail',
      'FMCG',
      '3PL',
      'E-Commerce',
      'Manufacturing',
      'Pharmaceutical',
      'Automotive',
      'Food & Beverage',
    ],
    About: ['Careers', 'Events', 'News', 'Blogs'],
  };

  const NavItem = ({ title, content }) => {
    const isActive = activeDropdown === title;
   
    const handleMouseEnter = () => {
      if (window.innerWidth >= 768) {
        setActiveDropdown(title);
      }
    };
 
    const handleMouseLeave = () => {
      if (window.innerWidth >= 768) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };
 
    const handleClick = (e) => {
      e.preventDefault();
      if (window.innerWidth < 768) {
        setActiveDropdown(isActive ? null : title);
        setActiveSubmenu(null);
      } else {
        handleNavigation(title);
      }
    };
 
    const handleSubmenuMouseEnter = (item) => {
      if (window.innerWidth >= 768) {
        setActiveSubmenu(item);
      }
    };
 
    const handleSubmenuClick = (e, item) => {
      e.preventDefault();
      e.stopPropagation();
      if (window.innerWidth < 768) {
        setActiveSubmenu(activeSubmenu === item ? null : item);
      }
    };
 
    const renderDropdownContent = () => {
      if (Array.isArray(content)) {
        return content.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(title, item)}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
          >
            {item}
          </button>
        ));
      }
 
      return (
        <>
          {Object.entries(content.submenus).map(([submenuTitle, submenuItems]) => (
            <div
              key={submenuTitle}
              className="relative font-semibold"
              onMouseEnter={() => handleSubmenuMouseEnter(submenuTitle)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <button
                onClick={(e) => handleSubmenuClick(e, submenuTitle)}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 flex items-center justify-between font-semibold"
              >
                {submenuTitle}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {activeSubmenu === submenuTitle && (
                <div className="md:absolute relative left-full top-0 mt-0 md:-ml-1 w-64 bg-white rounded-md shadow-lg py-1 z-50 font-bold">
                  {submenuItems.map((subItem, subIndex) => (
                    <button
                      key={subIndex}
                      onClick={() => handleNavigation(title, submenuTitle, subItem)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 whitespace-normal font-semibold"
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </>
      );
    };

    return (
      <div
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          onClick={handleClick}
          className="w-full md:w-auto px-4 py-3 text-orange-500 text-lg font-semibold relative flex items-center justify-between md:justify-start hover:text-orange-600 transition-colors duration-200"
        >
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ml-1 text-orange-500 transform transition-transform duration-200 ${
              isActive ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full hidden md:block"></span>
        </button>
 
        {isActive && (
          <div className="md:absolute relative left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
            {renderDropdownContent()}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className={`w-full bg-white bg-opacity-90 backdrop-blur-lg shadow-md z-50 ${
      isSticky ? 'fixed top-0 left-0' : 'relative'
    }`}>
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 mr-8">
            <Link to="/" className="block">
              <img
                src={logo}
                alt="Artihcus Global"
                className="h-10 w-auto sm:h-12 md:h-14"
              />
            </Link>
          </div>
 
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-4 flex-grow justify-center font-semibold">
            {Object.entries(navigationItems).map(([title, content]) => (
              <NavItem key={title} title={title} content={content} />
            ))}
            <Link
              to="/contact"
              className="px-4 py-3 text-orange-500 text-lg font-semibold relative group hover:text-orange-600 transition-colors duration-200"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
 
          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {/* GreyHR Icon */}
            <a 
              href="https://artihcusglobal.greythr.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-orange-500 hover:text-orange-600"
            >
              <img 
                src={greyhr} 
                alt="GreyHR" 
                className="h-6 w-auto hover:opacity-80 transition-opacity duration-200"
              />
            </a>
            {/* Employee Login Icon */}
            <Link 
              to="/emp-login" 
              className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
            >
              <FaUserCircle size={24} />
            </Link>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600">
              <FaLinkedin size={24} />
            </a>
            <a href="/about/blogs" className="text-orange-500 hover:text-orange-600">
              <FaBlog size={24} />
            </a>
          </div>
 
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-orange-500 hover:text-orange-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
 
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-4 py-2">
              {Object.entries(navigationItems).map(([title, content]) => (
                <NavItem key={title} title={title} content={content} />
              ))}
              <Link
                to="/contact"
                className="block px-4 py-3 text-orange-500 hover:text-orange-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
           
            {/* Social Icons - Mobile */}
            <div className="flex justify-center gap-8 py-4 border-t">
              <Link 
                to="/emp-login" 
                className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
              >
                <FaUserCircle size={20} />
              </Link>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600">
                <FaLinkedin size={20} />
              </a>
              <a href="/about/blogs" className="text-orange-500 hover:text-orange-600">
                <FaBlog size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
 
export default Header;
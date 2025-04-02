import {React, useState, useEffect} from 'react';
import Cards from '../HomeComponents/Card/Cards';
import Footer from '../Footer/Footer';
import { ReactTyped as Typed } from 'react-typed';
import Banner from '../images/bgimg.jpg';
import Services from '../HomeComponents/Services/Services'; // Import the Services component
import Contacthome from '../HomeComponents/ContactHome/Contacthome';
import Testimonial  from '../HomeComponents/Testimonial/Testimonial';
import Vision  from '../HomeComponents/Vision/Vision';
import Leadership from '../HomeComponents/Leadership/Leadership';
import Clients from '../HomeComponents/Clients/Clients';
import Ind from '../HomeComponents/IndustryCards/IndustryCards';
function Home() {

    const [isAtTop, setIsAtTop] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY === 0) {
          setIsAtTop(true);
        } else {
          setIsAtTop(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const scrollToFooter = () => {
      const footer = document.querySelector("footer");
      window.scrollTo({ top: footer.offsetTop, behavior: "smooth" });
    };
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <div
      className="w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Banner})`, height: 'calc(75vh - 64px)' }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 " />
 
      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-36">
        <div className="space-y-2 md:space-y-4">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
            We transform your business into
          </h1>
 
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Technology driven solution
          </p>
 
          <div className="text-xl sm:text-2xl font-bold text-white flex items-center">
            That improve{' '}
            <span className="ml-2 text-black text-3xl sm:text-4xl md:text-5xl">
              <Typed
                strings={[
                  'Sustainability',
                  'Cutting Cost',
                  'Quality',
                  'Track-And-Trace',
                  'Operations',
                  'Production',
                  'Visibility And Control',
                ]}
                typeSpeed={80}
                backSpeed={50}
                loop
              />
            </span>
          </div>
        </div>
      </div>
      <div className='bg-white py-12'>
        <Cards />
      </div>
      <div className="bg-gray-50 py-12">
        <Services />
      </div>
      <div>
        <Ind/>
      </div>
      <div>
        <Vision/>
      </div>
      <div>
        <Leadership/>
      </div>
      <div>
        <Clients/>
      </div>
      <div>
        <Testimonial/>
      </div>
      <div>
        <Contacthome/>
      </div>
     
      <Footer />
      <div className="fixed bottom-8 right-8">
        <button
          className="bg-[#f57e20] text-white p-3 rounded-full shadow-lg hover:bg-[#e06d1b] transition-colors duration-300"
          onClick={isAtTop ? scrollToFooter : scrollToTop}
        >
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${
              isAtTop ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div> 
    </div>
  );
}
 
export default Home;
 
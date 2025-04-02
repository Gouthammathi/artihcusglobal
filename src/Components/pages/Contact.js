import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import contactImage from '../images/Contact.jpg';
import ind from '../../Components/images/idnlocation.png';  // Correct import
import usa from '../../Components/images/usalocation.png';  // Correct import
import uae from '../../Components/images/uaelocation.png';  // Correct import
 import Contacthome from '../HomeComponents/ContactHome/Contacthome';
function Contact() {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${contactImage})`, height: `calc(50vh - 64px)` }} // Adjust 64px based on header height
      >
        {/* Overlay Content */}
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-5xl sm:text-6xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </div>
 
      {/* Content Section */}
      <div>
<Contacthome/>
      </div>
 
      {/* Locations Section */}
      <div className="p-8 bg-white">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-8">
          Locations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hyderabad Location */}
          <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold flex items-center">
              <span className="mr-2 bg-white text-orange-500 p-2 rounded-full">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              Hyderabad
            </h3>
            <p className="mt-4">
              <strong>Address:</strong> Arthicus Global Private Limited <br />
              Plot No. 227 – Kartikeya Towers, 1st floor Matrusrinagar, Miyapur,
              Hyderabad, Telangana 500049, India.
            </p>
 
            <p className="mt-2">
              <strong>Phone:</strong> +91–40–35160930
            </p>
            <p className="mt-2">
              <strong>Email:</strong> info@arthicus.com
            </p>
            <a
              href="https://www.google.com/maps?q=Arthicus+Global+Private+Limited,+Hyderabad,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4"
            >
              <img
                src={ind}  // Use imported image
                alt="Hyderabad Location"
                className="rounded-lg shadow-md"
              />
            </a>
          </div>
 
          {/* USA Location */}
          <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold flex items-center">
              <span className="mr-2 bg-white text-orange-500 p-2 rounded-full">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              USA
            </h3>
            <p>
              .
            </p>
            <p className="mt-4">
              <strong>Address:</strong> Arthicus Global Inc <br />
              6565 N MacArthur Blvd Suite 225 Irving, TX 75039, USA.
            </p>
            <p className="mt-2">
              <strong>Phone:</strong> +91–40–35160930
            </p>
            <p className="mt-2">
              <strong>Email:</strong> info@arthicus.com
            </p>
            <a
              href="https://www.google.com/maps?q=6565+N+MacArthur+Blvd,+Irving,+TX,+USA"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4"
            >
              <img
                src={usa}  // Use imported image
                alt="USA Location"
                className="rounded-lg shadow-md"
              />
            </a>
          </div>
 
          {/* UAE Location */}
          <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold flex items-center">
              <span className="mr-2 bg-white text-orange-500 p-2 rounded-full">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              UAE
            </h3>
            <p>
              .
            </p>
            <p className="mt-4">
              <strong>Address:</strong> Arthicus Technologies Co. L.L.C. <br />
              Office 43–44, Al Fahidi, Bur Dubai, P.O.Box 49759 Dubai, UAE.
            </p>
            <p className="mt-2">
              <strong>Phone:</strong> +91–40–35160930
            </p>
            <p className="mt-2">
              <strong>Email:</strong> info@arthicus.com
            </p>
            <a
              href="https://www.google.com/maps?q=Al+Fahidi,+Bur+Dubai,+UAE"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4"
            >
              <img
                src={uae}  // Use imported image
                alt="UAE Location"
                className="rounded-lg shadow-md"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Contact;
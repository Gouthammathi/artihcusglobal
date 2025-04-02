import { React, useState } from 'react';
import axios from 'axios';

function Contacthome() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    companyName: '',
    country: '',
    industry: '',
    services: '',
    referredBy: '',
    referredName: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await axios.post('http://localhost:5000/send-email/contacthome', formData);
      setSubmitStatus({ 
        type: 'success', 
        message: 'Your message has been sent successfully!' 
      });
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        companyName: '',
        country: '',
        industry: '',
        services: '',
        referredBy: '',
        referredName: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: error.response?.data?.error || 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start justify-between p-8 bg-white">
        {/* Left Side Text Section */}
        <div className="sm:w-1/2 pl-12">
          <h2 className="text-3xl font-semibold mb-4 text-orange-500">TALK TO US</h2>
          <p className="mb-4 text-lg">Get in touch with us</p>
          <span>
            <p className="text-2xl mb-4 text-gray-900">
              Thanks for your interest. Please use this area to ask a question, make a comment, or request information. To help us speed things up, we just need a few key details.
            </p>
          </span>
          <h3 className="text-2xl font-semibold mb-2">General Inquiries</h3>
          <p className="text-gray-900 font-semibold">info@artihcus.com</p>
          <p className="text-gray-900 font-semibold">+91-40-35160930</p>
        </div>

        {/* Right Side Form Section */}
        <div className="sm:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md pr-14">
          {submitStatus.message && (
            <div className={`mb-4 p-3 rounded ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {submitStatus.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Number *"
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Your Company's Name *"
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
                required
              >
                <option value="">Country *</option>
                <option value="INDIA">INDIA</option>
                <option value="USA">USA</option>
                <option value="UAE">UAE</option>
              </select>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
                required
              >
                <option value="">Your Industry *</option>
                <option value="RETAIL">RETAIL</option>
                <option value="FMG">FMG</option>
                <option value="3PL">3PL</option>
                <option value="E-COMMERCE">E-COMMERCE</option>
                <option value="MANUFACTURING">MANUFACTURING</option>
                <option value="PHARMACEUTICAL">PHARMACEUTICAL</option>
                <option value="AUTOMOBILE">AUTOMOBILE</option>
              </select>
              <select
                name="services"
                value={formData.services}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
                required
              >
                <option value="">Services/Technologies *</option>
                <option value="SAP Warehousing">SAP Warehousing</option>
                <option value="SAP EWM Upgradation">SAP EWM Upgradation</option>
                <option value="SAP EWM Rollouts">SAP EWM Rollouts</option>
                <option value="SAP EWM Migration">SAP EWM Migration</option>
                <option value="SAP Automation">SAP Automation</option>
                <option value="SAP Transportation">SAP Transportation</option>
                <option value="Services and Support">Services and Support</option>
              </select>
              <select
                name="referredBy"
                value={formData.referredBy}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
              >
                <option value="">Referred By</option>
                <option value="Search Engine">Search Engine</option>
                <option value="Sales Person">Sales Person</option>
                <option value="Trade Show/Conferences">Trade Show/Conferences</option>
                <option value="Referred by Peer">Referred by Peer</option>
                <option value="Referred by Industry Analyst">Referred by Industry Analyst</option>
                <option value="Corporate Connect">Corporate Connect</option>
                <option value="Others">Others</option>
              </select>
              <input
                type="text"
                name="referredName"
                value={formData.referredName}
                onChange={handleChange}
                placeholder="Referred Name"
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Let us know how we can help you today"
              className="border border-gray-300 p-2 rounded w-full mb-4"
              rows="4"
              required
            ></textarea>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" required />
                <span>
                  I agree to using my personal data as per the Arthicus Global
                  Privacy policy
                </span>
              </label>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-orange-500 text-white py-2 px-4 rounded w-full font-semibold disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacthome;
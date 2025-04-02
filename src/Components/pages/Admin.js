import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
 
function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const navigate = useNavigate();
 
  const messages = [
    "\"Welcome! Let's get started\"",
    "\"Hi! Let's make great things happen.\"",
    "\"Hello! Excited to have you!\"",
    "\"Hi there! Let's get you set up and started.\""
  ];
 
  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (email === 'Admin@artihcus.com' && password === 'Arti123') {
      localStorage.setItem('adminLoggedIn', 'true');
      navigate('/admin/upload');
    } else {
      setError('Invalid email or password');
    }
  };
 
  return (
    <div>
      <div className="h-[90vh] overflow-hidden flex flex-col-reverse place-items-end justify-center md:justify-end md:flex-row md:place-items-start bg-cover bg-center">
        <div className="flex-1 flex flex-col justify-center items-center bg-opacity-80 w-full md:w-fit md:h-screen pl-16 md:pl-0 pt-10 md:pt-0 m-10">
          <div className="relative bg-white bg-opacity-10 p-8 -mt-10 rounded-lg shadow-lg w-full max-w-sm mr-[2px]">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 border-t-2 border-l-4 border-orange-300" style={{ width: '150px', height: '85px' }}></div>
              <div className="absolute top-0 right-0 border-t-2 border-r-4 border-orange-300" style={{ width: '150px', height: '160px' }}></div>
              <div className="absolute bottom-0 left-0 border-b-2 border-l-4 border-orange-300" style={{ width: '95px', height: '95px' }}></div>
              <div className="absolute bottom-0 right-0 border-b-2 border-r-4 border-orange-300" style={{ width: '70px', height: '45px' }}></div>
            </div>
 
            <div className="text-center mb-3 flex flex-col items-center">
              <h1 className="text-l text-orange-500 animate-pop opacity-100 transition-opacity duration-500 ease-in-out h-10">
                {messages[currentMessage]}
              </h1>
            </div>
 
            <form onSubmit={handleSubmit} className="w-full">
              <div className="grid gap-3">
                <div className="relative mb-4 text-orange-400">
                  <input
                    type="email"
                    placeholder="Admin Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border-[1.4px] border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-black placeholder-orange-500 opacity-60"
                  />
                  {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                </div>
 
                <div className="relative mb-4">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border-[1.4px] border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-black placeholder-orange-500 opacity-60"
                  />
                  <button
                    type="button"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {isPasswordVisible ? <FaEyeSlash /> : <FaRegEye />}
                  </button>
                </div>
              </div>
 
              <button
                type="submit"
                className="w-full md:w-60 h-8 bg-orange-400 hover:bg-orange-500 text-white font-medium text-sm rounded-full transition flex items-center justify-center mx-auto"
              >
                SIGN IN
              </button>
            </form>
          </div>
        </div>
 
        <div className="text-center mt-10 md:mt-20 mr-2 md:mr-10">
          <h2 className="text-lg md:text-5xl font-bold mb-1 md:mb-4 font-oleo">Welcome Admin</h2>
          <p className="flex flex-col font-bold text-blue-800 text-xs md:text-lg mb-2 md:mb-4">
            <span className="animate-pulse">Hello! Welcome back.</span>
            <span className="animate-pulse">Let's get started.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
 
export default Admin;
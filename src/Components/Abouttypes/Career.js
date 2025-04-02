import React, { useState } from "react";
import { X, Upload, Check, AlertCircle } from "lucide-react";

// Custom Alert Component
const Alert = ({ children, variant = "default", className = "" }) => {
  const baseStyles = "px-4 py-3 rounded-lg flex items-center gap-3";
  const variantStyles = {
    success: "bg-green-50 border border-green-200",
    error: "bg-red-50 border border-red-200",
    default: "bg-gray-50 border border-gray-200"
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("File size should be less than 5MB");
        return;
      }
      setFormData({ ...formData, resume: file });
      setFileName(file.name);
      setErrorMessage("");
    }
  };

  const removeFile = () => {
    setFormData({ ...formData, resume: null });
    setFileName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch("http://localhost:5000/send-email/career", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Application submitted successfully! We'll contact you soon.");
        setFormData({ name: "", email: "", phone: "", resume: null });
        setFileName("");
      } else {
        setErrorMessage(data.error || "Error submitting the application. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-12 px-4 sm:px-6 lg:px-8 animate-gradient-x">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-orange-600 mb-2">
                Join Our Team
              </h2>
              <p className="text-gray-600">Take the next step in your career journey</p>
            </div>
 
            {successMessage && (
              <Alert variant="success" className="mb-6">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-green-800">{successMessage}</span>
              </Alert>
            )}
 
            {errorMessage && (
              <Alert variant="error" className="mb-6">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <span className="text-red-800">{errorMessage}</span>
              </Alert>
            )}
 
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="John Doe"
                  required
                />
              </div>
 
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="john@example.com"
                  required
                />
              </div>
 
              <div className="space-y-1">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>
 
              <div className="space-y-1">
                <label htmlFor="resume" className="text-sm font-medium text-gray-700">
                  Resume (PDF or Word)
                </label>
                <div className="relative">
                  {!fileName ? (
                    <div className="w-full px-4 py-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 transition-colors duration-200">
                      <input
                        type="file"
                        id="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        required
                      />
                      <div className="text-center">
                        <Upload className="mx-auto h-6 w-6 text-gray-400" />
                        <p className="mt-1 text-sm text-gray-500">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-gray-400">
                          PDF or Word (max 5MB)
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <span className="text-sm text-gray-600 truncate">
                        {fileName}
                      </span>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-1 hover:bg-orange-100 rounded-full transition-colors duration-200"
                      >
                        <X className="h-4 w-4 text-gray-500" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
 
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transform transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit Application</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Career;
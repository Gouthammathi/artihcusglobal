import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaClock, FaQuestionCircle, FaBook } from 'react-icons/fa';

const ModuleSelection = () => {
  const navigate = useNavigate();

  const modules = [
    {
      id: 'btp',
      name: 'SAP BTP',
      description: 'Business Technology Platform fundamentals and development',
      duration: '90 minutes',
      questions: 5,
      icon: <FaBook className="w-6 h-6" />
    },
    {
      id: 'abap',
      name: 'ABAP Development',
      description: 'Advanced Business Application Programming concepts and development',
      duration: '90 minutes',
      questions: 5,
      icon: <FaBook className="w-6 h-6" />
    },
    {
      id: 'ewm',
      name: 'SAP EWM',
      description: 'Extended Warehouse Management concepts and implementation',
      duration: '90 minutes',
      questions: 5,
      icon: <FaBook className="w-6 h-6" />
    },
    {
      id: 'tm',
      name: 'SAP TM',
      description: 'Transportation Management fundamentals and configuration',
      duration: '90 minutes',
      questions: 5,
      icon: <FaBook className="w-6 h-6" />
    }
  ];

  const handleModuleSelect = (moduleId) => {
    navigate(`/test-instructions/${moduleId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Select a Module
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Choose a module to take the mock test
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {modules.map((module) => (
            <div
              key={module.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">{module.name}</h3>
                  {module.icon}
                </div>
                <p className="mt-2 text-gray-600">{module.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <FaClock className="mr-1" />
                    <span>{module.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <FaQuestionCircle className="mr-1" />
                    <span>{module.questions} Questions</span>
                  </div>
                </div>
                <button
                  onClick={() => handleModuleSelect(module.id)}
                  className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Select Module
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModuleSelection; 
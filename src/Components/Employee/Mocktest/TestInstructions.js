import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaCheck, FaClock, FaExchangeAlt, FaPalette, FaWindowClose, FaClipboardCheck } from 'react-icons/fa';

const TestInstructions = () => {
  const navigate = useNavigate();
  const { moduleId } = useParams();
  const [isAgreed, setIsAgreed] = useState(false);

  const instructions = [
    {
      title: 'Time Limit',
      content: 'The test has a duration of 90 minutes. The timer will start as soon as you begin the test.',
      icon: <FaClock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Navigation',
      content: 'You can navigate between questions using the question palette on the right side of the screen.',
      icon: <FaExchangeAlt className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Question Status',
      content: 'Questions will be color-coded: Green for answered, Red for visited but unanswered, and Orange for reviewed.',
      icon: <FaPalette className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Test Rules',
      content: 'Once the test begins, you cannot go back or open other windows. The test will be terminated if you attempt to do so.',
      icon: <FaWindowClose className="w-6 h-6 text-red-500" />
    },
    {
      title: 'Submission',
      content: 'You can submit the test at any time. After submission, you will see your answers and the correct solutions.',
      icon: <FaClipboardCheck className="w-6 h-6 text-orange-500" />
    }
  ];

  const handleStartTest = () => {
    if (isAgreed) {
      navigate(`/test/${moduleId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Test Instructions
          </h2>
          <p className="mt-3 text-xl text-gray-500">
            Please read the following instructions carefully before starting the test
          </p>
        </div>

        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <div className="space-y-6">
            {instructions.map((instruction, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                  {instruction.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {instruction.title}
                  </h3>
                  <p className="mt-1 text-gray-500">
                    {instruction.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
              />
              <span className="ml-2 text-gray-700">
                I have read and understood all the instructions
              </span>
            </label>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleStartTest}
              disabled={!isAgreed}
              className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${
                isAgreed
                  ? 'bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Start Test
              <FaCheck className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestInstructions; 
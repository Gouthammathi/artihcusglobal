import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaFlag, FaCheck, FaTimes, FaKey, FaChartBar, FaClock } from 'react-icons/fa';

const Test = () => {
  const navigate = useNavigate();
  const { moduleId } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 minutes in seconds
  const [answers, setAnswers] = useState({});
  const [questionStatus, setQuestionStatus] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const timerRef = useRef(null);

  // Sample questions for each module
  const questions = {
    btp: [
    {
      id: 1,
      question: "What is SAP BTP?",
      options: [
        "Business Technology Platform",
        "Business Testing Platform",
        "Business Training Platform",
        "Business Tools Platform"
      ],
        correctAnswer: 0,
        explanation: "SAP BTP is the Business Technology Platform that provides tools and services for building and extending intelligent, cloud-native applications."
      },
      {
        id: 2,
        question: "Which of the following is a key component of SAP BTP?",
        options: [
          "ABAP Development Tools",
          "SAP Fiori",
          "SAP HANA",
          "All of the above"
        ],
        correctAnswer: 3,
        explanation: "SAP BTP includes multiple components including ABAP Development Tools, SAP Fiori, and SAP HANA."
      },
      {
        id: 3,
        question: "What is the primary purpose of SAP BTP?",
        options: [
          "Database Management",
          "Application Development",
          "Network Security",
          "File Storage"
        ],
        correctAnswer: 1,
        explanation: "The primary purpose of SAP BTP is to provide a platform for application development and integration."
      },
      {
        id: 4,
        question: "Which cloud providers support SAP BTP?",
        options: [
          "AWS only",
          "Azure only",
          "Google Cloud only",
          "AWS, Azure, and Google Cloud"
        ],
        correctAnswer: 3,
        explanation: "SAP BTP is available on major cloud providers including AWS, Azure, and Google Cloud."
      },
      {
        id: 5,
        question: "What is the main advantage of using SAP BTP?",
        options: [
          "Lower cost",
          "Faster development",
          "Better security",
          "All of the above"
        ],
        correctAnswer: 3,
        explanation: "SAP BTP offers multiple advantages including lower cost, faster development, and enhanced security."
      }
    ],
    abap: [
      {
        id: 1,
        question: "What is ABAP?",
        options: [
          "Advanced Business Application Programming",
          "Advanced Business Analysis Program",
          "Advanced Business Application Process",
          "Advanced Business Analysis Process"
        ],
        correctAnswer: 0,
        explanation: "ABAP stands for Advanced Business Application Programming."
      },
      // Add more ABAP questions...
    ],
    ewm: [
      {
        id: 1,
        question: "What is SAP EWM?",
        options: [
          "Extended Warehouse Management",
          "External Warehouse Management",
          "Extended Warehouse Monitoring",
          "External Warehouse Monitoring"
        ],
        correctAnswer: 0,
        explanation: "SAP EWM stands for Extended Warehouse Management."
      },
      // Add more EWM questions...
    ],
    tm: [
      {
        id: 1,
        question: "What is SAP TM?",
        options: [
          "Transportation Management",
          "Traffic Management",
          "Transportation Monitoring",
          "Traffic Monitoring"
        ],
        correctAnswer: 0,
        explanation: "SAP TM stands for Transportation Management."
      },
      // Add more TM questions...
    ]
  };

  const currentModuleQuestions = questions[moduleId] || questions.btp;

  useEffect(() => {
    // Start timer
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Prevent window/tab switching
    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleSubmit();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(timerRef.current);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex
    }));
    // Don't automatically mark as answered when selecting an answer
  };

  const handleQuestionNavigation = (questionIndex) => {
    // Simply navigate to the new question without updating status
    setCurrentQuestion(questionIndex);
  };

  const handleReview = (questionId) => {
    // Mark current question as reviewed and move to next
    setQuestionStatus((prev) => ({
      ...prev,
      [questionId]: 'reviewed'
    }));

    // Move to next question if not on the last question
    if (currentQuestion < currentModuleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSaveAndNext = () => {
    const currentQuestionId = currentModuleQuestions[currentQuestion].id;
    const hasAnswer = answers[currentQuestionId] !== undefined;
    
    // Update status based on whether there's an answer
    setQuestionStatus((prev) => ({
      ...prev,
      [currentQuestionId]: hasAnswer ? 'answered' : 'not_answered'
    }));

    // Only navigate if not on the last question
    if (currentQuestion < currentModuleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = () => {
    // Show confirmation dialog
    if (window.confirm('Are you sure you want to submit the test? This action cannot be undone.')) {
    setIsSubmitted(true);
    setShowResults(true);
    clearInterval(timerRef.current);
    }
  };

  const getQuestionStatusColor = (questionId) => {
    const status = questionStatus[questionId];
    switch (status) {
      case 'answered':
        return 'bg-green-500';
      case 'reviewed':
        return 'bg-orange-500';
      case 'not_answered':
        return 'bg-red-500';
      default:
        return 'bg-gray-300';
    }
  };

  const calculateScore = () => {
    let correct = 0;
    currentModuleQuestions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return (correct / currentModuleQuestions.length) * 100;
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Results Header */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 transform transition-all hover:shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Test Results</h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Back to Dashboard
                </button>
                <button
                  onClick={() => setShowAnswerKey(!showAnswerKey)}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors"
                >
                  <FaKey className="mr-2" />
                  {showAnswerKey ? 'Hide Answer Key' : 'Show Answer Key'}
                </button>
              </div>
            </div>

            {/* Score Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-blue-600">Overall Score</div>
                    <div className="text-3xl font-bold text-blue-700 mt-1">{calculateScore().toFixed(1)}%</div>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaChartBar className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 h-2 bg-blue-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${calculateScore()}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-green-600">Correct Answers</div>
                    <div className="text-3xl font-bold text-green-700 mt-1">
                      {currentModuleQuestions.filter((q) => answers[q.id] === q.correctAnswer).length}
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <FaCheck className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-red-600">Incorrect Answers</div>
                    <div className="text-3xl font-bold text-red-700 mt-1">
                      {currentModuleQuestions.filter((q) => answers[q.id] !== q.correctAnswer).length}
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <FaTimes className="w-6 h-6 text-red-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Questions Review */}
          <div className="space-y-6">
            {currentModuleQuestions.map((q, index) => (
              <div key={q.id} className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      answers[q.id] === q.correctAnswer
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}>
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">
                  Question {index + 1}
                </h3>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    answers[q.id] === q.correctAnswer
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {answers[q.id] === q.correctAnswer ? 'Correct' : 'Incorrect'}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 pl-11">{q.question}</p>
                <div className="space-y-3">
                  {q.options.map((option, optIndex) => (
                    <div
                      key={optIndex}
                      className={`p-4 rounded-lg transition-colors ${
                        optIndex === answers[q.id]
                          ? optIndex === q.correctAnswer
                            ? 'bg-green-50 border border-green-200'
                            : 'bg-red-50 border border-red-200'
                          : optIndex === q.correctAnswer
                          ? showAnswerKey ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
                          : 'bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <div className="flex items-center">
                        {optIndex === answers[q.id] && (
                          <FaCheck className="text-green-500 mr-3" />
                        )}
                        {optIndex === q.correctAnswer && optIndex !== answers[q.id] && showAnswerKey && (
                          <FaTimes className="text-red-500 mr-3" />
                        )}
                        <span className="text-gray-700">{option}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {showAnswerKey && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800">
                      <span className="font-semibold">Explanation:</span> {q.explanation}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Enhanced Timer */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold">
              {moduleId.toUpperCase()} Mock Test
            </h2>
              <div className="h-6 w-px bg-white/20"></div>
              <div className="text-sm opacity-90">
                Question {currentQuestion + 1} of {currentModuleQuestions.length}
              </div>
            </div>
            <div className="flex items-center bg-white/10 px-6 py-3 rounded-xl shadow-inner">
              <div className="flex flex-col items-center">
                <div className="text-sm opacity-90 mb-1">Time Remaining</div>
                <div className="flex items-center">
                  <FaClock className="mr-2 text-xl" />
                  <span className="text-3xl font-bold tracking-wider">{formatTime(timeLeft)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
              <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:shadow-xl">
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-orange-600 font-medium">{currentQuestion + 1}</span>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900">
                      Question {currentQuestion + 1}
                </h3>
                  </div>
                  <p className="text-gray-700 text-lg pl-11">
                    {currentModuleQuestions[currentQuestion].question}
                </p>
              </div>

              <div className="space-y-4">
                  {currentModuleQuestions[currentQuestion].options.map((option, index) => (
                  <label
                    key={index}
                      className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                        answers[currentModuleQuestions[currentQuestion].id] === index
                          ? 'border-orange-500 bg-orange-50 shadow-sm'
                          : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                        name={`question-${currentModuleQuestions[currentQuestion].id}`}
                        checked={answers[currentModuleQuestions[currentQuestion].id] === index}
                        onChange={() => handleAnswerSelect(currentModuleQuestions[currentQuestion].id, index)}
                        className="h-5 w-5 text-orange-500 focus:ring-orange-500 border-gray-300"
                      />
                      <span className="ml-4 text-gray-700">{option}</span>
                  </label>
                ))}
              </div>

                <div className="mt-8 flex justify-between items-center">
                  <div className="flex space-x-3">
                <button
                      onClick={() => handleReview(currentModuleQuestions[currentQuestion].id)}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors"
                >
                  <FaFlag className="mr-2" />
                      Mark for Review & Next
                </button>
                <button
                      onClick={handleSaveAndNext}
                      disabled={currentQuestion === currentModuleQuestions.length - 1}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                      Save & Next
                    </button>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleQuestionNavigation(currentQuestion - 1)}
                      disabled={currentQuestion === 0}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                    >
                      Previous
                </button>
                  </div>
                </div>
            </div>
          </div>

          {/* Question Navigation */}
            <div className="w-72">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Question Navigation
              </h3>
              <div className="grid grid-cols-5 gap-2">
                  {currentModuleQuestions.map((q, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionNavigation(index)}
                      className={`p-2 rounded-lg transition-all ${
                        getQuestionStatusColor(q.id)
                    } text-white hover:opacity-90 ${
                        currentQuestion === index ? 'ring-2 ring-orange-500 ring-offset-2' : ''
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
                <div className="mt-6 space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                  <span>Answered</span>
                </div>
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                  <span>Not Answered</span>
                </div>
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
                    <span>Marked for Review</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={handleSubmit}
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Submit Test
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test; 
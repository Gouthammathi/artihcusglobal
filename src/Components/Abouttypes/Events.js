import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, ChevronDown, ChevronUp, Calendar, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
 
const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [likes, setLikes] = useState({});
  const [autoSlide, setAutoSlide] = useState(false); // Auto slide is initially false
 
  useEffect(() => {
    const loadEvents = () => {
      setLoading(true);
      const storedEvents = localStorage.getItem('events');
      const storedLikes = localStorage.getItem('eventLikes');
      const parsedEvents = storedEvents ? JSON.parse(storedEvents) : [];
      const parsedLikes = storedLikes ? JSON.parse(storedLikes) : {};
      setEvents(parsedEvents.reverse());
      setLikes(parsedLikes);
      setLoading(false);
    };
 
    loadEvents();
    window.addEventListener('storage', loadEvents);
    return () => window.removeEventListener('storage', loadEvents);
  }, []);
 
  const toggleEvent = (eventId) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };
 
  const handleLike = (eventId) => {
    const newLikes = { ...likes };
    newLikes[eventId] = !newLikes[eventId];
    setLikes(newLikes);
    localStorage.setItem('eventLikes', JSON.stringify(newLikes));
  };
 
  const openLightbox = (eventId, index) => {
    setSelectedEventId(eventId);
    setSelectedImageIndex(index);
    setAutoSlide(true); // Enable auto-slide when image is opened
  };
 
  const closeLightbox = () => {
    setSelectedImageIndex(null);
    setAutoSlide(false); // Stop auto-slide when lightbox is closed
  };
 
  const navigateImage = (direction) => {
    const currentEvent = events.find(e => e.id === selectedEventId);
    if (!currentEvent) return;
 
    const newIndex = selectedImageIndex + direction;
    if (newIndex >= 0 && newIndex < currentEvent.images.length) {
      setSelectedImageIndex(newIndex);
    }
  };
 
  // Auto-slide logic
  useEffect(() => {
    let interval;
    if (autoSlide && selectedEventId !== null) {
      interval = setInterval(() => {
        const currentEvent = events.find(e => e.id === selectedEventId);
        if (currentEvent && selectedImageIndex < currentEvent.images.length - 1) {
          setSelectedImageIndex((prevIndex) => prevIndex + 1);
        } else if (currentEvent) {
          setSelectedImageIndex(0); // Reset to the first image when reaching the end
        }
      }, 3000); // Slide every 3 seconds
 
      return () => clearInterval(interval); // Cleanup interval on component unmount or when autoSlide changes
    }
  }, [selectedImageIndex, autoSlide, selectedEventId]);
 
  const ImageSlider = ({ images, currentIndex, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-2xl"
        >
          ✕
        </motion.div>
      </button>
 
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="max-w-[90%] max-h-[90vh] object-contain rounded-xl shadow-2xl"
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="w-full h-full object-contain rounded-xl shadow-2xl"
          />
        </motion.div>
 
        {currentIndex > 0 && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              navigateImage(-1);
              setAutoSlide(false); // Disable auto-slide when the user navigates manually
            }}
            className="absolute left-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white"
          >
            <ChevronLeft size={24} />
          </motion.button>
        )}
 
        {currentIndex < images.length - 1 && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              navigateImage(1);
              setAutoSlide(false); // Disable auto-slide when the user navigates manually
            }}
            className="absolute right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white"
          >
            <ChevronRight size={24} />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
 
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
        <div className="relative w-24 h-24">
          <div className="absolute top-0 left-0 w-full h-full border-8 border-orange-200 rounded-full animate-ping" />
          <div className="absolute top-0 left-0 w-full h-full border-8 border-orange-500 rounded-full animate-spin" />
        </div>
      </div>
    );
  }
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700 mb-8 text-center">
          Company Events Gallery
        </h1>
 
        {events.length === 0 ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-12 text-center"
          >
            <ImageIcon className="mx-auto h-16 w-16 text-orange-500 mb-4" />
            <h3 className="text-2xl font-medium text-gray-900 mb-2">No events yet</h3>
            <p className="text-gray-500">Events will appear here once uploaded.</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {events.map((event, eventIndex) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: eventIndex * 0.1 }}
                className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="cursor-pointer" onClick={() => toggleEvent(event.id)}>
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={event.images[0]}
                      alt={event.name}
                      className="w-full h-full object-contain"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="absolute bottom-4 right-4 bg-white rounded-full p-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      {expandedEvent === event.id ? (
                        <ChevronUp className="h-5 w-5 text-orange-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-orange-600" />
                      )}
                    </motion.div>
                  </div>
 
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {event.name}
                    </h3>
                    <p className="text-gray-600 line-clamp-2 mb-4">
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(event.id);
                        }}
                        className={`p-2 rounded-full hover:bg-gray-100 ${likes[event.id] ? 'text-pink-500' : 'text-gray-400'}`}
                      >
                        <Heart className={`h-4 w-4 ${likes[event.id] ? 'fill-current' : ''}`} />
                      </motion.button>
                    </div>
                  </div>
                </div>
 
                <AnimatePresence>
                  {expandedEvent === event.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-3 gap-4 p-6">
                        {event.images.map((image, index) => (
                          <div
                            key={index}
                            className="cursor-pointer"
                            onClick={() => openLightbox(event.id, index)}
                          >
                            <img
                              src={image}
                              alt={`Event ${index}`}
                              className="w-full h-32 object-contain rounded-md"
                            />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
 
      {selectedImageIndex !== null && selectedEventId !== null && (
        <ImageSlider
          images={events.find(e => e.id === selectedEventId).images}
          currentIndex={selectedImageIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};
 
export default Events;
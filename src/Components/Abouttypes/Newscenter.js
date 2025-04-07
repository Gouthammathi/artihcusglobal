import React, { useEffect, useState } from 'react';
import {
  Image as ImageIcon,
  ChevronDown,
  ChevronUp,
  Calendar,
  Heart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../../firebase';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';

function Newscenter() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedNews, setExpandedNews] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedNewsId, setSelectedNewsId] = useState(null);
  const [likes, setLikes] = useState({});
  const [autoSlide, setAutoSlide] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'news'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNews(newsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const toggleNews = (newsId) => {
    setExpandedNews(expandedNews === newsId ? null : newsId);
  };

  const handleLike = (newsId) => {
    const newLikes = { ...likes };
    newLikes[newsId] = !newLikes[newsId];
    setLikes(newLikes);
  };

  const openLightbox = (newsId, index) => {
    setSelectedNewsId(newsId);
    setSelectedImageIndex(index);
    setAutoSlide(true);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    setAutoSlide(false);
  };

  const navigateImage = (direction) => {
    const currentNews = news.find(n => n.id === selectedNewsId);
    if (!currentNews) return;
    const newIndex = selectedImageIndex + direction;
    if (newIndex >= 0 && newIndex < currentNews.images.length) {
      setSelectedImageIndex(newIndex);
    }
  };

  useEffect(() => {
    let interval;
    if (autoSlide && selectedNewsId !== null) {
      interval = setInterval(() => {
        const currentNews = news.find(n => n.id === selectedNewsId);
        if (currentNews && selectedImageIndex < currentNews.images.length - 1) {
          setSelectedImageIndex((prev) => prev + 1);
        } else if (currentNews) {
          setSelectedImageIndex(0);
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [selectedImageIndex, autoSlide, selectedNewsId]);

  const ImageSlider = ({ images, currentIndex, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 text-2xl"
      >
        ✕
      </button>

      <div className="relative w-full h-full flex items-center justify-center">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`News ${currentIndex + 1}`}
          className="max-w-[90%] max-h-[90vh] object-contain rounded-xl shadow-2xl"
        />

        {currentIndex > 0 && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={(e) => {
              e.stopPropagation();
              navigateImage(-1);
              setAutoSlide(false);
            }}
            className="absolute left-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white"
          >
            <ChevronLeft size={24} />
          </motion.button>
        )}
        {currentIndex < images.length - 1 && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={(e) => {
              e.stopPropagation();
              navigateImage(1);
              setAutoSlide(false);
            }}
            className="absolute right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white"
          >
            <ChevronRight size={24} />
          </motion.button>
        )}
      </div>
    </motion.div>
  );

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="relative w-24 h-24">
          <div className="absolute top-0 left-0 w-full h-full border-8 border-gray-200 rounded-full animate-ping" />
          <div className="absolute top-0 left-0 w-full h-full border-8 border-gray-500 rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-8 text-center">
          News Center
        </h1>

        {news.length === 0 ? (
          <motion.div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-12 text-center">
            <ImageIcon className="mx-auto h-16 w-16 text-gray-500 mb-4" />
            <h3 className="text-2xl font-medium text-gray-900 mb-2">No news yet</h3>
            <p className="text-gray-500">News items will appear here once uploaded.</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {news.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="cursor-pointer" onClick={() => toggleNews(item.id)}>
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={item.images[0]?.base64}
                      alt={item.title}
                      className="w-full h-full object-contain"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <motion.div className="absolute bottom-4 right-4 bg-white rounded-full p-2">
                      {expandedNews === item.id ? (
                        <ChevronUp className="h-5 w-5 text-gray-700" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-700" />
                      )}
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 line-clamp-2 mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{formatDate(item.date)}</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(item.id);
                        }}
                        className={`p-2 rounded-full hover:bg-gray-100 ${likes[item.id] ? 'text-pink-500' : 'text-gray-400'}`}
                      >
                        <Heart className={`h-4 w-4 ${likes[item.id] ? 'fill-current' : ''}`} />
                      </motion.button>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedNews === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-3 gap-4 p-6">
                        {item.images.map((image, idx) => (
                          <div
                            key={idx}
                            className="cursor-pointer"
                            onClick={() => openLightbox(item.id, idx)}
                          >
                            <img
                              src={image.base64}
                              alt={`News ${idx}`}
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

      {selectedImageIndex !== null && selectedNewsId !== null && (
        <ImageSlider
          images={news.find(n => n.id === selectedNewsId).images.map(img => img.base64)}
          currentIndex={selectedImageIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}

export default Newscenter;

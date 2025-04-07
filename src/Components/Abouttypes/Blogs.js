import React, { useEffect, useState } from 'react';
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { db } from '../../firebase';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const blogsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBlogs(blogsData);
    });
    return () => unsubscribe();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const openLightbox = (index) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const navigateImage = (direction) => {
    const newIndex = selectedImageIndex + direction;
    if (selectedBlog && newIndex >= 0 && newIndex < selectedBlog.images.length) {
      setSelectedImageIndex(newIndex);
    }
  };

  const Lightbox = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
    >
      <button
        onClick={closeLightbox}
        className="absolute top-4 right-4 text-white text-2xl"
      >
        ✕
      </button>

      <div className="relative">
        <motion.img
          key={selectedImageIndex}
          src={selectedBlog.images[selectedImageIndex].base64}
          alt={`Blog ${selectedImageIndex + 1}`}
          className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-xl"
        />

        {selectedImageIndex > 0 && (
          <button
            onClick={() => navigateImage(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/30"
          >
            <ChevronLeft />
          </button>
        )}
        {selectedBlog &&
          selectedImageIndex < selectedBlog.images.length - 1 && (
            <button
              onClick={() => navigateImage(1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/30"
            >
              <ChevronRight />
            </button>
          )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600"
        >
          Blogs
        </motion.h1>

        {selectedBlog ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">{selectedBlog.title}</h2>
            <p className="text-gray-600 mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(selectedBlog.date)}
            </p>

            {selectedBlog.images?.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {selectedBlog.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.base64}
                    onClick={() => openLightbox(idx)}
                    className="cursor-pointer rounded-lg object-cover h-40 w-full hover:scale-105 transition-transform duration-200"
                  />
                ))}
              </div>
            )}

            <div
              className="text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
            />

            <button
              onClick={() => setSelectedBlog(null)}
              className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              ← Back to Blogs
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogs.length === 0 ? (
              <p className="text-gray-500 col-span-full text-center text-lg">
                No blogs available yet.
              </p>
            ) : (
              blogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => setSelectedBlog(blog)}
                  >
                    <div className="relative h-56 overflow-hidden rounded-t-2xl">
                      <motion.img
                        src={blog.images?.[0]?.base64}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2 line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {blog.description}
                      </p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(blog.date)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedImageIndex !== null && selectedBlog && <Lightbox />}
      </AnimatePresence>
    </div>
  );
};

export default Blogs;

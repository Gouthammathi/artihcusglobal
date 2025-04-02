import React, { useEffect, useState } from "react";
 
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
 
  // Load blogs data from localStorage
  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(savedBlogs);
  }, []);
 
  const getPreviewContent = (content) => {
    // Strip HTML tags and split by words
    const textContent = content.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
    return textContent.split(" ").slice(0, 3).join(" "); // Return the first three words
  };
 
  const formatDate = (dateString) => {
    if (!dateString) return "No date provided"; // Handle missing or invalid date
    const options = { year: "numeric", month: "long", day: "numeric" };
    const parsedDate = new Date(dateString);
    return isNaN(parsedDate) ? "Invalid date" : parsedDate.toLocaleDateString(undefined, options);
  };
 
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto shadow-lg p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Blogs</h2>
 
        {selectedBlog ? (
          // Display selected blog in detail
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">{selectedBlog.title}</h3>
            <p className="text-gray-600 font-medium">
              {formatDate(selectedBlog.uploadedDate)}
            </p>
 
            {/* Display Image if available */}
            {selectedBlog.image && (
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full max-h-64 object-cover rounded-lg mb-4"
              />
            )}
 
            <div
              className="text-gray-800 mt-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
            />
            <button
              onClick={() => setSelectedBlog(null)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Back to Blogs
            </button>
          </div>
        ) : (
          // Display blog list in card layout
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.length === 0 ? (
              <p className="text-gray-600 text-center">No blogs available yet.</p>
            ) : (
              blogs.map((blog) => (
                <div key={blog.id} className="flex justify-center">
                  {/* Card style */}
                  <div className="card shadow w-48 h-64 bg-orange-400 rounded-lg p-4 transition-all duration-300 hover:shadow-xl">
                    <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
                    <p className="text-gray-600 mt-2">{formatDate(blog.uploadedDate)}</p>
                    <button
                      onClick={() => setSelectedBlog(blog)}
                      className="mt-4 text-blue-600 hover:text-blue-800 underline"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
 
export default Blogs;
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Upload = () => {
  const [selectedPage, setSelectedPage] = useState("Events");
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    description: "",
    date: "",
    images: [],
    title: "",
    category: "",
    content: "",
  });
  const [dataStore, setDataStore] = useState({
    events: [],
    news: [],
    blogs: [],
  });
  const [notification, setNotification] = useState(null);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      [{ align: [] }],
      ["link", "image"],
      [{ color: [] }, { background: [] }],
      ["blockquote", "code-block"],
    ],
  };

  // Initialize Local Storage
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const storedNews = JSON.parse(localStorage.getItem("news")) || [];
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setDataStore({ events: storedEvents, news: storedNews, blogs: storedBlogs });
  }, []);

  // Reset Form Data
  const resetFormData = () => {
    setFormData({
      id: null,
      name: "",
      description: "",
      date: "",
      images: [],
      title: "",
      category: "",
      content: "",
    });
  };

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...imageUrls],
    }));
  };

  // Handle Image Removal
  const handleImageRemove = (index) => {
    setFormData((prev) => {
      const updatedImages = prev.images.filter((_, i) => i !== index);
      return { ...prev, images: updatedImages };
    });
  };

  // Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const storeKey = selectedPage.toLowerCase();
    const requiredFields =
      storeKey === "events"
        ? ["name", "description", "date"]
        : ["title", "category", "content", "date"];

    // Validate Required Fields
    const isValid = requiredFields.every((field) => formData[field]);
    if (!isValid) {
      setNotification({
        message: "Please fill all required fields",
        type: "error",
      });
      setTimeout(() => setNotification(null), 3000);
      return;
    }

    // Prepare Data for Saving
    const parsedDate = new Date(formData.date).toISOString();
    const updatedFormData = { ...formData, date: parsedDate };

    // Save Data
    const updatedData = formData.id
      ? dataStore[storeKey].map((item) =>
          item.id === formData.id ? { ...item, ...updatedFormData } : item
        )
      : [{ ...updatedFormData, id: Date.now() }, ...dataStore[storeKey]];

    // Update State and LocalStorage
    const newDataStore = { ...dataStore, [storeKey]: updatedData };
    setDataStore(newDataStore);
    localStorage.setItem(storeKey, JSON.stringify(updatedData));

    // Show Notification
    setNotification({
      message: formData.id
        ? `${selectedPage} updated successfully`
        : `${selectedPage} created successfully`,
      type: "success",
    });
    setTimeout(() => setNotification(null), 3000);

    resetFormData();
  };

  // Edit an Item
  const handleEdit = (id) => {
    const storeKey = selectedPage.toLowerCase();
    const selectedItem = dataStore[storeKey].find((item) => item.id === id);
    if (selectedItem) {
      setFormData({
        ...selectedItem,
        date: new Date(selectedItem.date).toISOString().split("T")[0],
      });
    }
  };

  // Delete an Item
  const handleDelete = (id) => {
    const storeKey = selectedPage.toLowerCase();
    const updatedData = dataStore[storeKey].filter((item) => item.id !== id);
    const newDataStore = { ...dataStore, [storeKey]: updatedData };
    setDataStore(newDataStore);
    localStorage.setItem(storeKey, JSON.stringify(updatedData));

    setNotification({
      message: `${selectedPage} deleted successfully`,
      type: "success",
    });
    setTimeout(() => setNotification(null), 3000);
  };

  // Format Date
  const formatDate = (dateString) => {
    if (!dateString) return "No date provided";
    const options = { year: "numeric", month: "long", day: "numeric" };
    const parsedDate = new Date(dateString);
    return isNaN(parsedDate)
      ? "Invalid date"
      : parsedDate.toLocaleDateString(undefined, options);
  };

  // Render List of Items
  const renderList = () => {
    const storeKey = selectedPage.toLowerCase();
    return (
      <ul className="space-y-4">
        {dataStore[storeKey].map((item) => (
          <li key={item.id} className="p-4 bg-white rounded-lg shadow">
            <h4 className="font-bold text-lg">{item.title || item.name}</h4>
            <p className="text-sm text-gray-500">{formatDate(item.date)}</p>
            <div
              className="text-sm mt-2"
              dangerouslySetInnerHTML={{
                __html: item.content || item.description,
              }}
            />
            <div className="flex space-x-2 mt-4">
              <button
                type="button"
                onClick={() => handleEdit(item.id)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDelete(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  // Reset Form on Page Switch
  useEffect(() => {
    resetFormData();
  }, [selectedPage]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Dashboard</h2>
          <nav>
            {["Events", "News", "Blogs"].map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setSelectedPage(page)}
                className={`block w-full p-3 rounded-lg ${
                  selectedPage === page ? "bg-blue-500 text-white" : ""
                }`}
              >
                {page}
              </button>
            ))}
          </nav>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 overflow-auto p-8">
        {notification && (
          <div
            className={`p-4 mb-4 rounded ${
              notification.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {notification.message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6 mb-8">
          {selectedPage === "Events" ? (
            <>
              {/* Event-Specific Fields */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter event name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter event description"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </>
          ) : (
            <>
              {/* News/Blog-Specific Fields */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter category"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <ReactQuill
                  value={formData.content}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, content: value }))
                  }
                  modules={modules}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </>
          )}
          {/* Common Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Images
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-700 border rounded-lg cursor-pointer"
            />
            <div className="flex space-x-4 mt-4">
              {formData.images.map((url, index) => (
                <div key={index} className="relative">
                  <img
                    src={url}
                    alt={`uploaded ${index}`}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => handleImageRemove(index)}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg"
          >
            {formData.id ? "Update" : "Create"} {selectedPage}
          </button>
        </form>
        <div>
          <h3 className="text-xl font-bold mb-6">{selectedPage} List</h3>
          {renderList()}
        </div>
      </div>
    </div>
  );
};

export default Upload;

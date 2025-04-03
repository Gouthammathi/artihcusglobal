import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { db, storage } from "../../firebase";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

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

  // Initialize Firebase Data
  useEffect(() => {
    const fetchData = async () => {
      console.log("Attempting to fetch data from Firebase...");
      try {
        const collections = ["events", "news", "blogs"];
        const newDataStore = { events: [], news: [], blogs: [] };

        for (const collectionName of collections) {
          console.log(`Fetching ${collectionName} collection...`);
          const q = query(
            collection(db, collectionName), 
            orderBy("createdAt", "desc")
          );
          
          const querySnapshot = await getDocs(q);
          console.log(`Found ${querySnapshot.size} documents in ${collectionName}`);
          newDataStore[collectionName] = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            date: doc.data().date // Ensure date is properly mapped
          }));
        }

        console.log("Final data store:", newDataStore);
        setDataStore(newDataStore);
      } catch (error) {
        console.error("Error fetching data:", error);
        setNotification({
          message: "Error fetching data: " + error.message,
          type: "error",
        });
      }
    };

    fetchData();
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

  // Cleanup blob URLs when component unmounts or images change
  useEffect(() => {
    return () => {
      // Cleanup any existing blob URLs when component unmounts
      formData.images.forEach(url => {
        if (url.startsWith('blob:')) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [formData.images]);

  // Handle Image Upload
  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    try {
      setNotification({
        message: "Uploading images...",
        type: "info",
      });

      const uploadPromises = files.map(async (file) => {
        try {
          // Validate file size (5MB limit)
          if (file.size > 5 * 1024 * 1024) {
            throw new Error(`File ${file.name} is too large. Maximum size is 5MB.`);
          }

          // Validate file type
          if (!file.type.startsWith('image/')) {
            throw new Error(`File ${file.name} is not an image.`);
          }

          // Create a unique filename
          const uniqueFileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
          const storageRef = ref(storage, `images/${uniqueFileName}`);

          // Set proper metadata
          const metadata = {
            contentType: file.type,
            customMetadata: {
              originalName: file.name,
              uploadedAt: new Date().toISOString(),
              uploadedBy: 'admin' // or any user identifier
            }
          };

          // Upload with metadata
          const snapshot = await uploadBytes(storageRef, file, metadata);
          
          // Get download URL
          const downloadURL = await getDownloadURL(snapshot.ref);

          return {
            url: downloadURL,
            path: `images/${uniqueFileName}`,
            name: file.name
          };
        } catch (error) {
          console.error(`Error uploading file ${file.name}:`, error);
          throw error;
        }
      });

      const results = await Promise.allSettled(uploadPromises);
      
      // Filter successful uploads and handle failures
      const successfulUploads = results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value.url);

      const failedUploads = results
        .filter(result => result.status === 'rejected')
        .map(result => result.reason.message);

      if (failedUploads.length > 0) {
        console.error('Failed uploads:', failedUploads);
        setNotification({
          message: `Some images failed to upload: ${failedUploads.join(', ')}`,
          type: "warning"
        });
      }

      if (successfulUploads.length > 0) {
        setFormData(prev => ({
          ...prev,
          images: [...prev.images, ...successfulUploads]
        }));

        setNotification({
          message: `Successfully uploaded ${successfulUploads.length} image(s)`,
          type: "success"
        });
      }
    } catch (error) {
      console.error('Error in image upload:', error);
      setNotification({
        message: `Error uploading images: ${error.message}`,
        type: "error"
      });
    }
  };

  // Handle Image Removal
  const handleImageRemove = async (index) => {
    try {
      const imageUrl = formData.images[index];
      
      // Remove from form data first
      setFormData(prev => ({
        ...prev,
        images: prev.images.filter((_, i) => i !== index)
      }));

      // Try to delete from storage if it's a Firebase Storage URL
      if (imageUrl.includes('firebasestorage.googleapis.com')) {
        try {
          const storageRef = ref(storage, imageUrl);
          await deleteObject(storageRef);
        } catch (error) {
          console.error('Error deleting image from storage:', error);
        }
      }
    } catch (error) {
      console.error('Error removing image:', error);
      setNotification({
        message: `Error removing image: ${error.message}`,
        type: "error"
      });
    }
  };

  // Render Image Preview with loading state
  const renderImagePreviews = () => {
    return (
      <div className="flex flex-wrap gap-4 mt-4">
        {formData.images.map((url, index) => (
          <div key={`${url}-${index}`} className="relative group">
            <div className="relative w-24 h-24 rounded-lg overflow-hidden">
              <img
                src={url}
                alt={`Preview ${index + 1}`}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                onError={(e) => {
                  console.error(`Error loading image: ${url}`);
                  e.target.src = 'https://via.placeholder.com/150?text=Image+Error';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
            </div>
            <button
              type="button"
              onClick={() => handleImageRemove(index)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
              aria-label="Remove image"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    );
  };

  // Form Submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const storeKey = selectedPage.toLowerCase();
    console.log("Submitting form for:", storeKey);
    console.log("Form data:", formData);

    const requiredFields =
      storeKey === "events"
        ? ["name", "description", "date"]
        : ["title", "category", "content", "date"];

    // Validate Required Fields
    const isValid = requiredFields.every((field) => formData[field]);
    if (!isValid) {
      console.log("Missing required fields:", requiredFields.filter(field => !formData[field]));
      setNotification({
        message: "Please fill all required fields",
        type: "error",
      });
      setTimeout(() => setNotification(null), 3000);
      return;
    }

    try {
      const parsedDate = new Date(formData.date).toISOString();
      const dataToSave = {
        ...formData,
        date: parsedDate,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        images: formData.images || [] // Ensure images array exists
      };
      delete dataToSave.id;

      console.log("Attempting to save data:", dataToSave);

      // Add new document to the root collection
      const docRef = await addDoc(collection(db, storeKey), dataToSave);

      console.log("Document successfully added with ID:", docRef.id);

      // Update local state with the new document
      const newItem = {
        ...dataToSave,
        id: docRef.id
      };

      setDataStore((prev) => ({
        ...prev,
        [storeKey]: [newItem, ...prev[storeKey]]
      }));

      setNotification({
        message: `${selectedPage} created successfully`,
        type: "success",
      });
      setTimeout(() => setNotification(null), 3000);

      resetFormData();
    } catch (error) {
      console.error("Error saving data:", error);
      setNotification({
        message: `Error saving data: ${error.message}`,
        type: "error",
      });
    }
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
  const handleDelete = async (id) => {
    const storeKey = selectedPage.toLowerCase();
    try {
      // Get the document data before deleting (to get image URLs)
      const docToDelete = dataStore[storeKey].find(item => item.id === id);
      
      // Delete the document from Firestore
      await deleteDoc(doc(db, storeKey, id));

      // Delete associated images from Storage if they exist
      if (docToDelete && docToDelete.images && docToDelete.images.length > 0) {
        const deleteImagePromises = docToDelete.images.map(async (imageUrl) => {
          if (imageUrl.includes('firebasestorage.googleapis.com')) {
            try {
              // Extract the path from the URL
              const imagePath = imageUrl.split('/o/')[1].split('?')[0];
              const decodedPath = decodeURIComponent(imagePath);
              const imageRef = ref(storage, decodedPath);
              await deleteObject(imageRef);
            } catch (error) {
              console.error(`Error deleting image: ${imageUrl}`, error);
            }
          }
        });

        await Promise.all(deleteImagePromises);
      }

      // Update local state
      const updatedData = dataStore[storeKey].filter((item) => item.id !== id);
      setDataStore((prev) => ({
        ...prev,
        [storeKey]: updatedData,
      }));

      setNotification({
        message: `${selectedPage} deleted successfully`,
        type: "success",
      });
      setTimeout(() => setNotification(null), 3000);
    } catch (error) {
      console.error("Error deleting data:", error);
      setNotification({
        message: `Error deleting data: ${error.message}`,
        type: "error",
      });
    }
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
            {renderImagePreviews()}
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

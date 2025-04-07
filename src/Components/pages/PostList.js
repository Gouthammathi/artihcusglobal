import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const PostList = ({ type }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const collectionName = type.toLowerCase();
    console.log(`Setting up listener for ${collectionName} collection`);

    const q = query(collection(db, collectionName), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const newPosts = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log(`Received ${newPosts.length} ${type} posts:`, newPosts);
        setPosts(newPosts);
        setLoading(false);
      },
      (error) => {
        console.error(`Error fetching ${type}:`, error);
        setError(`Failed to load ${type}. Please try again later.`);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [type]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">{type}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {post.images && post.images.length > 0 && (
              <div className="relative h-48">
                <img
                  src={post.images[0].base64}
                  alt={post.title || post.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                {post.title || post.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {formatDate(post.date)}
              </p>
              <div className="prose max-w-none">
                {type === 'Events' ? (
                  <p className="text-gray-700">{post.description}</p>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {posts.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No {type.toLowerCase()} found.
        </div>
      )}
    </div>
  );
};

export default PostList; 
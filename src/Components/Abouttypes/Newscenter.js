import React, { useEffect, useState } from 'react';
 
function Newscenter() {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
 
  useEffect(() => {
    const storedNews = JSON.parse(localStorage.getItem('news')) || [];
    setNews(storedNews);
  }, []);
 
  const getPreviewContent = (content) => {
    const textContent = content.replace(/<[^>]+>/g, '');
    return textContent.split(' ').slice(0, 3).join(' ');
  };
 
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
 
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto shadow-lg p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">News</h2>
 
        {selectedNews ? (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">{selectedNews.title}</h3>
            <p className="text-gray-600 font-medium">
              {formatDate(selectedNews.uploadedDate)}
            </p>
            {selectedNews.image && (
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full max-h-64 object-cover rounded-lg mb-4"
              />
            )}
            <div
              className="text-gray-800 mt-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: selectedNews.content }}
            />
            <button
              onClick={() => setSelectedNews(null)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Back to News
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.length === 0 ? (
              <p className="text-gray-600 text-center">No news available yet.</p>
            ) : (
              news.map((newsItem) => (
                <div key={newsItem.id} className="flex justify-center">
                  <div className="card shadow w-48 h-64 bg-orange-400 rounded-lg p-4 transition-all duration-300 hover:shadow-xl">
                    <h3 className="text-xl font-semibold text-gray-800">{newsItem.title}</h3>
                    <p className="text-gray-600 mt-2">{formatDate(newsItem.uploadedDate)}</p>
                    <button
                      onClick={() => setSelectedNews(newsItem)}
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
}
 
export default Newscenter;
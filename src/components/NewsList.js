// src/components/NewsList.js
import React, { useState, useEffect } from 'react';

const NewsList = ({ category, searchQuery }) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&q=${searchQuery}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchNews();
  }, [category, searchQuery]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="news-list">
      {news.map((article, index) => (
        <div key={index} className="news-card">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;

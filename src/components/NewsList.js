import React, { useState, useEffect } from "react";

const NewsList = ({ category, searchQuery }) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = process.env.REACT_APP_NEWS_API_KEY;
      const apiUrl = `https://newsapi.org/v2/top-headlines?category=${category}&q=${searchQuery}&apiKey=${apiKey}`;

      try {
        console.log(
          "Fetching news from NewsAPI.org for category:",
          category,
          "with search query:",
          searchQuery
        );
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        console.log("Fetched news data:", data);
        setNews(data.articles);
      } catch (error) {
        console.error("Fetch error:", error);
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
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;

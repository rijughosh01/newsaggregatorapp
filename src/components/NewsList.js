// src/components/NewsList.js
import React, { useEffect, useState } from "react";
import getNews from "../utils/api";
import NewsCard from "./NewsCard";

const NewsList = ({ category, searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const newsArticles = await getNews(category, searchQuery);
        setArticles(newsArticles);
      } catch (err) {
        setError("Failed to fetch news");
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [category, searchQuery]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="news-list">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;

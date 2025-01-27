// src/components/NewsCard.js
import React from 'react';

const NewsCard = ({ article }) => {
    return (
        <div className="news-card">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
    );
};

export default NewsCard;

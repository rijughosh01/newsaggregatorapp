import React, { useState, useEffect } from "react";
import NewsList from "./components/NewsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faSearch,
  faHome,
  faBusinessTime,
  faFilm,
  faHeartbeat,
  faFlask,
  faFutbol,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import { trackPageView, trackEvent } from "./analytics";

const categories = [
  { name: "business", icon: faBusinessTime },
  { name: "entertainment", icon: faFilm },
  { name: "health", icon: faHeartbeat },
  { name: "science", icon: faFlask },
  { name: "sports", icon: faFutbol },
  { name: "technology", icon: faMicrochip },
];

const App = () => {
  const [category, setCategory] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    trackPageView(window.location.pathname + window.location.search);
  }, []);

  const handleCategoryClick = (cat) => {
    setCategory(cat.name);
    trackEvent("Category", "Click", cat.name);
  };

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for news..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <header className="header">
        <h1>News Aggregator</h1>
        <div className="icon-group">
          <FontAwesomeIcon
            icon={faHome}
            size="lg"
            onClick={() => setCategory("home")}
            className={`home-icon ${category === "home" ? "active" : ""}`}
          />
          <FontAwesomeIcon
            icon={darkMode ? faSun : faMoon}
            onClick={() => setDarkMode(!darkMode)}
            className="dark-mode-icon"
          />
        </div>
      </header>
      <main>
        <div className="nav-tabs">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`tab ${category === cat.name ? "active" : ""}`}
              onClick={() => handleCategoryClick(cat)}
            >
              <FontAwesomeIcon icon={cat.icon} className="category-icon" />
              <span>
                {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
              </span>
            </button>
          ))}
        </div>
        <div className="content">
          <NewsList category={category} searchQuery={searchQuery} />
        </div>
      </main>
    </div>
  );
};

export default App;

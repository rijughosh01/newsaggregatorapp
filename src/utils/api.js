import axios from "axios";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

const getNews = async (category = "general", query = "") => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      category,
      q: query,
      apiKey: API_KEY,
      country: "us",
    },
  });
  return response.data.articles;
};

export default getNews;

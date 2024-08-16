import React, { useState, useEffect } from "react"; 
import NewsItem from "./NewsItem";
import './NewsBoard.css';
const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    let url = `https://newsapi.org/v2/everything?q=${category}&language=en&pageSize=12&sortBy=publishedAt&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles.filter(article => article.title && article.description && article.urlToImage)))
      .catch(err => console.error("Error fetching news:", err));
  }, [category]);
  
  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news, index) => (
        <NewsItem 
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
}

export default NewsBoard;

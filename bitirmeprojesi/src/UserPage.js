import React, { useEffect, useState } from "react";
import "./UserPage.css";

const UserPage = ({ match }) => {
  const [userEmail, setUserEmail] = useState("");
  const [news, setNews] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchUserData = () => {
      const email = match.params.email;
      setUserEmail(email);
    };

    fetchUserData();
    fetchNews();
  }, [match.params.email]);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=tr&language=tr&apiKey=3ab15482ea8640b4b2980db973cbc9bb"
      );
      if (response.ok) {
        const data = await response.json();
        setNews(data.articles);
      } else {
        console.error("Haberleri alırken bir hata oluştu:", response.status);
      }
    } catch (error) {
      console.error("Haberleri alırken bir hata oluştu:", error);
    }
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  return (
    <div className="user-page">
      <h1>Hoş geldiniz {userEmail}!</h1>

      <h2 style={{ textAlign: "center" }}>EN GÜNCEL HABERLER</h2>
      <div className="news-container">
        {news.length > 0 ? (
          news.map((article) => (
            <div
              className="news-card"
              key={article.title}
              onClick={() => handleArticleClick(article)}
            >
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              {selectedArticle && selectedArticle.title === article.title && (
                <div className="article-details">
                  <p>{selectedArticle.content}</p>
                  <div className="read-more">
                    <a
                      href={selectedArticle.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ backgroundColor: "#4CAF50" }}
                    >
                      Haberin Tamamını Oku
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>Haberler yükleniyor...</p>
        )}
      </div>

      {selectedArticle && (
        <div className="article-details">
          <h3>{selectedArticle.title}</h3>
          <p>{selectedArticle.content}</p>
        </div>
      )}
    </div>
  );
};

export default UserPage;

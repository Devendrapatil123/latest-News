import { useEffect, useState } from "react";
import image from "../components/ogndtv.png";
const NewsItem = ({ category }) => {
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=7bd9ac9a089749e3b78d9adf08266882`
    );
    let data = await response.json();
    setArticles(data.articles);
  };
  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <>
      {articles.map((news) => {
        return (
          <>
            <div 
              className="card bg-light text-dark ms-5 d-inline-block my-5 mx-3 py-2 px-2"
              style={{ maxWidth: "380px" }}
            >
              <img
                src={news.urlToImage ? news.urlToImage : image}
                style={{ height: "200px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{news.title.slice(0, 50)} </h5>
                <p className="card-text">
                  {news.description
                    ? news.description.slice(0, 90)
                    : "it is information about something that has just happened"}
                </p>
                <a href={news.url} className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default NewsItem;

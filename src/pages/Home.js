import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Home = (props) => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);

      const response = await axios(
        `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8d7a900306b34a278dc3f8c835b91f1a&page=1&pageSize=${props.pageSize}`
      );
      setNews(response.data.articles);
      console.log(response.data.articles);
      setLoading(false);
    };
    getNews();
  }, []);

  const updateNews = (pageNo) => {};

  const handlePrev = async () => {
    const response = await axios(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${
        props.category
      }&apiKey=8d7a900306b34a278dc3f8c835b91f1a&page=${page - 1}&pageSize=${
        props.pageSize
      }`
    );
    console.log(response.data.articles);
    // setPage(page - 1);
    setNews(response.data.articles);
  };

  const handleNext = async () => {
    // console.log("next");

    const response = await axios(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${
        props.category
      }&apiKey=8d7a900306b34a278dc3f8c835b91f1a&page=${page + 1}&pageSize=${
        props.pageSize
      }`
    );
    // setNews(response.data.articles);
    console.log(response.data.articles);

    // setPage(page + 1);
    setNews(response.data.articles);
  };

  return (
    <>
      <div className=" w-full h-full mt-4">
        <div className="p-4  flex items-center justify-between w-full px-44">
          <button
            // disabled={setPage <= 1}
            type="button"
            className="bg-red-300 p-3 rounded-lg cursor-pointer"
            onClick={handlePrev}
          >
            &larr; Prev
          </button>
          <button
            className="bg-red-300  p-3 rounded-lg cursor-pointer"
            onClick={handleNext}
          >
            Next &rarr;
          </button>
        </div>
        {loading ? (
          <h1 className="text-center font-extrabold m-auto text-2xl">
            Loading...
          </h1>
        ) : (
          news.map((article) => (
            <div className=" p-10 border-t-orange-300 ">
              <img
                className="w-[50%] h-[350px] m-auto border-4 rounded-2xl"
                src={article.urlToImage}
                alt=""
              />

              <h1 className="m-auto text-center font-bold mt-3">
                {article.title ? article.title : ""}
              </h1>
              <p className="w-[50%] text-center m-auto">
                {article.description ? article.description.slice(0, 150) : ""}
                <span className="m-auto text-center w-[50%] font-bold cursor-pointer">
                  <a href={article.url} target="_blank" rel="noreferrer">
                    ...Read more...
                  </a>
                </span>
                <p className="m-auto text-center font-bold mt-3 ">
                  <span>By </span>
                  {article.author ? article.author : "unknown"} on{" "}
                  {new Date(article.publishedAt).toGMTString()}
                </p>
              </p>
            </div>
          ))
        )}
      </div>
      <div className="p-4  flex items-center justify-between w-full px-44">
        <button
          // disabled={setPage <= 1}
          type="button"
          className="bg-red-300 p-3 rounded-lg cursor-pointer"
          onClick={handlePrev}
        >
          &larr; Prev
        </button>
        <button
          className="bg-red-300  p-3 rounded-lg cursor-pointer"
          onClick={handleNext}
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
};

export default Home;

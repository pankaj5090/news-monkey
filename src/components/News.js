import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
// import articles from '../top_headlines.json';

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // document.title = `${this.capitalizeFirstLetter(props.category)} News`;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let response = await fetch(url);
    let parsedResp = await response.json();
    setArticles(parsedResp.articles);
    setTotalResults(parsedResp.totalResults);
    setLoading(false);
  };
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let response = await fetch(url);
    let parsedResp = await response.json();
    setArticles(articles.concat(parsedResp.articles));
    setTotalResults(parsedResp.totalResults);
  };

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <>
      <h1 className="text-center" style={{ marginTop: "60px" }}>
        News - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loader />}
      >
        <div className="container">
          <div className="row my-3">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    desc={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    url={element.url}
                    imageUrl={element.urlToImage}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

News.defaultProps = {
  country: "in",
  category: "business",
  pageSize: 5,
};

News.propType = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

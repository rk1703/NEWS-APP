import React, { useEffect, useState } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

  // const style = { '@media (max-width: 500px)': {
    
  // },};

  const [articles, setArticles] = useState([]);
  // eslint-disable-next-line 
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line 
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // dad=props.mode;
  // (loading);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pagesize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(50);
    // (parseData);
    // ("cdm", page);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pagesize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    // (parseData);
    // ("cdm", page);
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <div className="container my-3 mx-auto">
        <div className="my-10">
          <h2
            className={`text-center text-${
              props.mode === "light" ? "Dark" : "light"
            }`}
            style={{ marginTop: "65px" }}
          >
            NEWS-APP: Top {capitalizeFirstLetter(props.category)} News-Headlines{" "}
          </h2>
        </div>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner mode={props.mode} />}
          className="p-0"
        >
          <div className="row container "style={{width :"fit-content"}}>
            {articles.map((element) => {
              return (
                <div className="col-lg-4 col-md-6"  key={element.url}>
                  <Newsitems
                    mode={props.mode}
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    time={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};
News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};

News.defaultProps = {
  pageSize: 6,
  country: "in",
  category: "general",
};

export default News;

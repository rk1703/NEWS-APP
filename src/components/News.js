import React, { useEffect, useState } from "react";
import Newsitems from "./Newsitems";
// import Spinner from "./Spinner";
import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

  // const style = { '@media (max-width: 500px)': {
    
  // },};
  console.log("news is load");

  const [articles, setArticles] = useState([]);
  // eslint-disable-next-line 
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line 
  const [page, setPage] = useState(1);
  // const [totalResults, setTotalResults] = useState(0);
  const webUrl = `https://api.newscatcherapi.com/v2/`;

  // dad=props.mode;
  // (loading);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    setLoading(true);
    let url = `${webUrl}latest_headlines?countries=IN&lang=en&topic=${props.topic}&page_size=3`;
    let data = await fetch(url,{
      method:'GET',
      mode:'cors',
      headers:{
        'Content-Type':'application/json',
        'x-api-key':'izoWEOsWKAck2UgttmTP9zI1fgfGk2E2D2p8zx56VLU',
      }
    });
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(50);
    console.log(parseData);
    console.log("new",props.apiKey);
    console.log(process.env.NEWSCATCHER_NEWS_API);
    // (parseData);
    // ("cdm", page);
    setArticles(parseData.articles);
    console.log("articles",articles)
    // setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  // const fetchMoreData = async () => {
  //   setLoading(true);
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     props.country
  //   }&category=${props.category}&apiKey=${props.apiKey}&page=${
  //     page + 1
  //   }&pagesize=${props.pageSize}`;
  //   setPage(page + 1);
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   // (parseData);
  //   // ("cdm", page);
  //   console.log(parseData)
  //   setArticles(articles.concat(parseData.articles));
  //   setTotalResults(parseData.totalResults);
  //   setLoading(false);
  // };

  return (
    <>
      <div className="container my-3 mx-auto">
        <div className="mt-4 pt-3">
          <h2
            className={`text-center text-${
              props.mode === "light" ? "Dark" : "light"
            }`}
            style={{ marginTop: "65px" }}
          >
            NEWS-APP: Top {capitalizeFirstLetter(props.topic)} News-Headlines{" "}
          </h2>
        </div>
        
        {/* <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner mode={props.mode} />}
          className="p-0"
        > */}
          <div className="row container "style={{width :"fit-content"}}>
            {articles.map((element) => {
              return (
                <div className="col-lg-4 col-md-6"  key={element._id}>
                  <Newsitems
                    mode={props.mode}
                    title={element.title}
                    description={element.summary}
                    imageUrl={element.media}
                    url={element.link}
                    author={element.author}
                    time={element.published_date}
                    source={element.rights}
                  />
                </div>
              );
            })}
          </div>
        {/* </InfiniteScroll> */}
      </div>
    </>
  );
};
News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  topic: PropTypes.string,
};

News.defaultProps = {
  pageSize: 6,
  country: "IN",
  topic: "news",
};

export default News;

import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
// import articles from '../top_headlines.json';

export default class NewsClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} News`;
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // Specifies the default values for props:
  static defaultProps = {
    country: "in",
    category: "business",
    pageSize: 5,
  };

  static propType = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let response = await fetch(url);
    let parsedResp = await response.json();
    this.setState({
      articles: parsedResp.articles,
      totalResults: parsedResp.totalResults,
      loading: false,
    });
  }
  // Uncomment this code in case you want previous and next button
  // handlePreviousClick = async () => {
  //   await this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };
  // handleNextClick = async () => {
  //   await this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  fetchMoreData = () => {
    this.setState({ page: this.state.page + 1 }); //when state update componentDidUpdate will call
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let response = await fetch(url);
      let parsedResp = await response.json();
      this.setState({
        articles: this.state.articles.concat(parsedResp.articles),
        totalResults: parsedResp.totalResults,
      });
    }
  }
  async componentDidMount() {
    this.updateNews();
  }
  render() {
    return (
      <>
        <h2 className="text-center" style={{ margin: "35px,0px" }}>
          News - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h2>
        {/* Uncomment this code if u want previous and next button
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              Math.ceil(this.state.totalResults / this.props.pageSize) <=
              this.state.page
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
        {/* {this.state.loading && <Loader />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loader />}
        >
          {/* {!this.state.loading &&
            this.state.articles.map((element) => { */}
          <div className="container">
            <div className="row my-3">
              {this.state.articles.map((element) => {
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
}

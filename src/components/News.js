import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loader from "./Loaderr"
import PropTypes from 'prop-types'
import error404 from './error404.jpg'
import Loader2 from "./loader2"
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

  static defaultProps = {
    country: "in",
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
  }


  articles = [];
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0
    };
    let string = this.props.category;
    document.title = `NewsWave - ${string.charAt(0).toUpperCase() + string.slice(1)} `
  }


  updateNews = async (pageNo) => {
    this.props.setProgress(10);
    this.setState({ loading: true })
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${pageNo}&pageSize=9`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: pageNo,
      loading: false
    })
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });

    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=9`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,

    })
  }
  async componentDidMount() {
    this.updateNews(1);

  }


  render() {
    return (
      <div className="container " style={{ marginTop: "6%" }}>


        <h2 className="text-center m-5">{this.props.heading}</h2>


        {this.state.loading && <Loader />}

        {this.state.articles.length === 0 && !this.state.loading && (
          <div className="text-center container" >
            <img src={error404} alt="error" style={{ width: "50%" }} />
          </div>
        )}


        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loader2 />}
        >
          <div className="container">
            <div className="row">

              {!this.state.loading && this.state.articles.map((element) => {

                return (

                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      NewsUrl={element.url}
                      date={element.publishedAt}
                      source={element.source.name}
                      author={element.author ? element.author.slice(0, 20) : "Unknown"}
                    />
                  </div>
                );
              })}

            </div>
          </div>
        </InfiniteScroll>


        {/* <div className="d-flex justify-content-between my-5">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-primary btn-sm"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Prev
          </button>
          <button
            type="button"
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 9)}
            className="btn btn-primary  btn-sm"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

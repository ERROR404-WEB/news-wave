import React, { Component } from 'react'

export default class Newsitem extends Component {

  render() {
    let { title, description, imageUrl, NewsUrl, author, date ,source} = this.props;
    return (

      <div>
        <div className="card" style={{ margin: "3%", height: "470px" }}>
          <span style={{left:"50%",zIndex:"1"}}className="position-absolute top-0  translate-middle badge rounded-pill bg-danger">
            {source}
           
          </span>
          <img src={imageUrl ? imageUrl : "https://static.vecteezy.com/system/resources/previews/000/197/882/large_2x/vector-news-headlines-background-with-earth-planet.jpg"} className="card-img-top" alt="newsimage" style={{ height: "12rem" }} />

          <div className="card-body">
            <h5 className="card-title">{title?title:""}</h5>
            <p className="card-text">{description ? description.slice(0, 100) : ""}...</p>

            <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toUTCString().slice(0, 17)}</small></p>
            <a href={NewsUrl} target='__blank' className="btn btn-sm btn-primary" style={{ bottom: "10px", position: "absolute" }}>Read More</a>

          </div>
        </div>
      </div>
    )
  }
}

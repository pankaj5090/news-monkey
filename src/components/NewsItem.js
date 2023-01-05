import React from "react";

export default function NewsItem(props) {
  let { title, desc, url, imageUrl, author, publishedAt, source } = props;
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "absolute",
          right: "0",
        }}
      >
        <span className=" badge rounded-pill bg-danger">{source.name}</span>
      </div>
      <img
        src={
          imageUrl
            ? imageUrl
            : "https://images.moneycontrol.com/static-mcnews/2022/11/Live-News-Blog-1011_001-2-770x403.jpg"
        }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{desc}...</p>
        <p className="card-text">
          <small className="text-muted">
            Last updated by {author ? author : "Unknown"} on {publishedAt}
          </small>
        </p>
        <a href={url} target="_blank" rel="noreferrer" className="card-link">
          Read more..
        </a>
      </div>
    </div>
  );
}

import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <>
      <div className="card">
        <img src={url} className="card-img-top" alt={title}></img>
        <div className="card-body">
          <p className="card-title"> {title} </p>
        </div>
      </div>
    </>
  );
};

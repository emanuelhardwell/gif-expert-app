import React from "react";
import PropTypes from "prop-types";

export const GifGridItem = ({ title, url }) => {
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

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

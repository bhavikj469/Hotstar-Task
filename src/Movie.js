import React from "react";
import "./Movie.css";

const Movie = ({ img }) => {
  return (
    <div className="media">
      <img src={img} alt="" />
    </div>
  );
};

export default Movie;

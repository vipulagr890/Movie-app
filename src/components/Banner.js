import React from "react";
import banner from "../bannerimage.jpg";
import Loader from "./Loader";

const Banner = () => {
  let movies = banner;

  return (
    <>
      {movies.length === 0 ? (
        <Loader />
      ) : (
        <div className="card banner-card">
          <img src={movies} className="card-img-top banner-img" alt="..." />
          <h5 className="card-title banner-title">Card title</h5>
          <p className="card-text banner-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      )}
    </>
  );
};

export default Banner;

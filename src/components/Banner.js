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
          <h5 className="card-title banner-title">Jurassic World</h5>
          <p className="card-text banner-text">
            Twenty-two years after the events of Jurassic Park, Isla Nublar now
            features a fully functioning dinosaur theme park, Jurassic World, as
            originally envisioned by John Hammond.
          </p>
        </div>
      )}
    </>
  );
};

export default Banner;

import React, { useState } from "react";
import movie from "../bannerimage.jpg";
import { v4 as uuid } from "uuid";
import Loader from "./Loader";

const Movies = () => {
  let movies = [
    { x: "x" },
    { x: "y" },
    { x: "x" },
    { x: "y" },
    { x: "x" },
    { x: "y" },
    { x: "y" },
    { x: "x" },
    { x: "y" },
  ];

  const [pages] = useState([1, 2, 3]);

  return (
    <>
      {movies.length === 0 ? (
        <Loader />
      ) : (
        <div style={{ textAlign: "center" }}>
          <h3 style={{ marginBottom: "1rem" }}>
            <strong>Trending</strong>
          </h3>
          <div className="movies-list">
            {movies.map((moviess) => {
              return (
                <div key={uuid()} className="card movie-card">
                  {
                    <div>
                      <img
                        src={movie}
                        className="card-img-top movie-img"
                        alt="..."
                      />
                      <div className="content-wrapper">
                        <h5 className="movie-title">Card title</h5>
                        <a href="movies" className="btn btn-primary movie-btn">
                          Add to Favourite
                        </a>
                      </div>
                    </div>
                  }
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a href="1" className="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>

                {pages.map((page) => {
                  return (
                    <li className="page-item">
                      <a href={page} className="page-link">
                        {page}
                      </a>
                    </li>
                  );
                })}
                <li className="page-item">
                  <a href="google.com" className="page-link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Movies;

import React, { useEffect, useState } from "react";
import movie from "../bannerimage.jpg";
import { v4 as uuid } from "uuid";
import Loader from "./Loader";
import axios from "axios";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    return async () => {
      let res = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=9091a453a803592ba02bafa6bb228728&page=${page}`
      );
      let data = res.data;
      // console.log(data.results);
      setMovies([...data.results]);
      console.log(movies);
    };
  }, [page]);

  const handlePrev = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const handleFav = () => {};

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
            {movies.map((movie) => {
              return (
                <div key={uuid()} className="card movie-card">
                  {
                    <div>
                      <img
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        className="card-img-top movie-img"
                        alt="..."
                      />
                      <div className="content-wrapper">
                        <h5 className="movie-title">{movie.title}</h5>
                        <a
                          className="btn btn-primary movie-btn"
                          onClick={handleFav}
                        >
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
                  <a
                    className="page-link"
                    aria-label="Previous"
                    onClick={handlePrev}
                    style={page === 1 ? { opacity: "50%" } : { opacity: "100%" }}
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>

                <li className="page-item">
                  <a href={page} className="page-link">
                    {page}
                  </a>
                </li>

                <li className="page-item">
                  <a
                    className="page-link"
                    aria-label="Next"
                    onClick={handleNext}
                  >
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

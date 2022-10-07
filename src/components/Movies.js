import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Loader from "./Loader";
import axios from "axios";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [Favorites, setfavorites] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=9091a453a803592ba02bafa6bb228728&page=${page}`
      )
      .then((resp) => setMovies([...resp.data.results]));
  }, [page]);

  const handlePrev = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const handleFav = (movie) => {
    let favMovieData = JSON.parse(localStorage.getItem("movie-app") || "[]");
    if (Favorites.includes(movie.id)) {
      favMovieData = favMovieData.filter((m) => m.id !== movie.id);
    } else {
      favMovieData.push(movie);
    }
    localStorage.setItem("movie-app", JSON.stringify(favMovieData));
    handleFavouritesState();
  };
  const handleFavouritesState = () => {
    let oldData = JSON.parse(localStorage.getItem("movie-app") || "[]");
    let temp = oldData.map((movie) => movie.id);
    setfavorites([...temp]);
  };

  return (
    <>
      <h3 style={{ marginBottom: "1rem", textAlign: "center" }}>
        <strong>Trending</strong>
      </h3>
      {movies.length === 0 ? (
        <Loader className="movies-list" />
      ) : (
        <div style={{ textAlign: "center" }}>
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
                        <button
                          className="btn btn-primary movie-btn"
                          onClick={() => handleFav(movie)}
                        >
                          {Favorites.includes(movie.id)
                            ? "Remove from favorite"
                            : "Add to favorite"}
                        </button>
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
                  <button
                    className="page-link"
                    aria-label="Previous"
                    onClick={handlePrev}
                    style={
                      page === 1 ? { opacity: "50%" } : { opacity: "100%" }
                    }
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </button>
                </li>

                <li className="page-item">
                  <button className="page-link">{page}</button>
                </li>

                <li className="page-item">
                  <button
                    className="page-link"
                    aria-label="Next"
                    onClick={handleNext}
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </button>
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

import React, { useEffect, useState } from "react";

const Favourites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let moviedata = JSON.parse(localStorage.getItem("movie-app") || "[]");
    console.log(moviedata);
    setMovies([...moviedata]);
  }, []);

  return (
    <div className="main">
      <div className="row">
        <div className="col-3">
          <ul className="list-group favorite-genre">
            <li className="list-group-item">All genres</li>
            <li className="list-group-item">Action</li>
            <li className="list-group-item">Comedy</li>
            <li className="list-group-item">Horror</li>
            <li className="list-group-item">Sci-Fi</li>
          </ul>
        </div>
        <div className="col-9 table-container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Popularity</th>
                <th scope="col">Rating</th>
              </tr>
            </thead>
            <tbody>
              {movies &&
                movies.map((movie) => {
                  return (
                    <tr key={movie.original_name || movie.original_title}>
                      <td>{movie.original_name || movie.original_title}</td>
                      <td>{movie.genre}</td>
                      <td>{movie.popularity}</td>
                      <td>{movie.vote_average}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Favourites;

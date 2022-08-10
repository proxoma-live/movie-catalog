import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { url, key } from "../../config";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import Movie from "../Movie";
import MovieContainer from "../../containers/MovieContainer";
import Pagination from "../Pagination";

function MovieList() {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: movies,
    loading,
    error,
  } = useFetchMovies(`${url}discover/movie?api_key=${key}&page=${currentPage}`);

  console.log("MovieList component rendered");
  const paginate = (pageNumber: number) => {
    console.log("Paginate function ALMOST ran");

    setCurrentPage(pageNumber);

    console.log("Paginate function ran");
  };

  return (
    <div>
      {loading && <div className="center">Loading data...</div>}
      {error && <div className="center">{error}</div>}

      {!loading && !error && (
        <MovieContainer>
          {movies &&
            movies.map((movie: object, index: number) => (
              <Movie movieProps={movie} key={index} />
            ))}
        </MovieContainer>
      )}

      <Pagination paginate={paginate} />
    </div>
  );
}

export default MovieList;

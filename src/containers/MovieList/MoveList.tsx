import { useParams } from "react-router-dom";

import { URL, KEY } from "../../config";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import Movie from "../../components/Movie";
import MovieContainer from "../MovieContainer";
import Pagination from "../../components/Pagination";
import Space from "../../pages/Space";

const MovieList = () => {
  const { page }: any = useParams();

  const {
    data: movies,
    loading,
    error,
  } = useFetchMovies(`${URL}discover/movie?api_key=${KEY}&page=${page}`);

  return (
    <div>
      {loading && <div className="center">Loading data...</div>}
      {error && <div className="center">{error}</div>}

      {!loading && !error && (
        <MovieContainer>
          {movies &&
            movies.map((movie, index) => (
              <Movie movieProps={movie} key={index} />
            ))}
        </MovieContainer>
      )}

      <Pagination />
      <Space />
    </div>
  );
};

export default MovieList;

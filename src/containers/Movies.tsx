import { useParams, useHistory } from "react-router-dom";

import Movie from "../components/Movie";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination/Pagination";
import { useFetchMovies } from "../hooks/useFetchMovies";
import { BACKDROP_SIZE, IMG_BASE_URL } from "../config";

interface MovieInterface {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Props {
  containerClassName: string;
  searchTerm: string | number;
}

const Movies: React.FC<Props> = (props) => {
  const { searchTerm, containerClassName } = props;

  const { page }: any = useParams();
  const history = useHistory();

  const { movies, loading, error, pages } = useFetchMovies(page, searchTerm);

  const handleClick = (id: string | number) => history.push(`/movie/${id}`);

  const handlePageClick = (event: any) =>
    history.push(`/page/${event.selected + 1}`);

  return (
    <>
      {loading && <Spinner />}
      {error && <div className="center">{error}</div>}

      {!loading && !error && movies && (
        <div className={containerClassName}>
          {movies.map((movie: MovieInterface) => (
            <Movie
              {...movie}
              handleClick={handleClick}
              full_backdrop_path={
                IMG_BASE_URL + BACKDROP_SIZE + movie.backdrop_path
              }
              full_movie_size={IMG_BASE_URL + BACKDROP_SIZE + movie.poster_path}
            />
          ))}
        </div>
      )}

      {pages && <Pagination onPageChange={handlePageClick} />}
    </>
  );
};

export default Movies;

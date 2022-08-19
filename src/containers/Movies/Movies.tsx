import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { useFetchMovies } from "../../hooks/useFetchMovies";
import Movie from "../../components/Movie";
import Pagination from "../Pagination";
import Space from "../../pages/Space";
import Spinner from "../../components/Spinner";

import styles from "./movies.module.css";

interface movie {
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

const Movies: React.FC<{
  searchTerm: string | number;
}> = ({ searchTerm }) => {
  const { page }: any = useParams();
  const history = useHistory();

  const { data: movies, loading, error } = useFetchMovies(page, searchTerm);

  const handleClick = (id: string | number) => {
    history.push(`/movie/${id}`);
  };

  return (
    <>
      {loading && <Spinner />}
      {error && <div className="center">{error}</div>}

      {console.log("movies", movies)}

      {!loading && !error && movies && (
        <div className={styles.container}>
          {movies.map((movie: movie) => (
            <Movie {...movie} handleClick={handleClick} />
          ))}
        </div>
      )}

      {!loading && <Pagination />}
      {!loading && <Space />}
    </>
  );
};

export default Movies;

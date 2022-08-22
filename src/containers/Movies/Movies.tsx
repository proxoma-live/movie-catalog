import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ReactPaginate from "react-paginate";

import { useFetchMovies } from "../../hooks/useFetchMovies";
import Movie from "../../components/Movie";
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

  const { movies, loading, error, pages } = useFetchMovies(page, searchTerm);

  const handleClick = (id: string | number) => {
    history.push(`/movie/${id}`);
  };

  const handlePageClick = (event: any) => {
    console.log("event target", event.selected);
    history.push(`/page/${event.selected + 1}`);
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

      {pages && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          pageCount={500}
          containerClassName={styles.pagination}
          breakClassName={styles.li}
          pageClassName={styles.li}
          renderOnZeroPageCount={() => {}}
        />
      )}
      {!loading && <Space />}
    </>
  );
};

export default Movies;

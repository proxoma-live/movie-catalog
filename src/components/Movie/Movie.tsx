import { sliceWord } from "../../utils/sliceWord";
import { IMG_BASE_URL, BACKDROP_SIZE, MOVIE_SIZE } from "../../config";

import styles from "./movie.module.css";

interface Props {
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
  handleClick: (id: string | number) => void;
}

const Movie: React.FC<Props> = ({
  title,
  backdrop_path,
  poster_path,
  id,
  release_date,
  overview,
  vote_average,
  handleClick,
}) => {
  return (
    <div
      className={styles.card}
      style={
        backdrop_path !== null
          ? {
              backgroundImage: `linear-gradient(rgb(0,0,0,0.4), rgb(0,0,0,0.4)) ,url(${
                IMG_BASE_URL + BACKDROP_SIZE + backdrop_path
              })`,
            }
          : undefined
      }
    >
      <div className={styles.imgContainer} onClick={() => handleClick(id)}>
        <img
          src={IMG_BASE_URL + MOVIE_SIZE + poster_path}
          className={styles.img}
          alt="movie"
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.coreInfo}>
          <span
            className={
              vote_average > 8 ? styles.voteAverageGreen : styles.voteAverage
            }
          >
            {vote_average}
          </span>{" "}
          | {release_date.slice(0, 4)}
        </span>
        <p className={styles.desc}>{sliceWord(overview, 200)}</p>
      </div>
    </div>
  );
};

export default Movie;

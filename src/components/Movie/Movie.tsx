import { useHistory } from "react-router-dom";

import { sliceWord } from "../../functions/sliceWord";
import { IMG_BASE_URL, BACKDROP_SIZE } from "../../config";

import styles from "./movie.module.css";

interface Props {
  movieProps: {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: Array<number>;
    id?: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
  };
  key: number;
}

const Movie: React.FC<Props> = ({ movieProps }) => {
  const history = useHistory();

  const {
    title,
    backdrop_path,
    poster_path,
    id,
    release_date,
    overview,
    vote_average,
  } = movieProps as any;

  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
        url(${IMG_BASE_URL + BACKDROP_SIZE + backdrop_path})`,
      }}
    >
      <div
        className={styles.imgContainer}
        onClick={() => history.push(`/movie/${id}`)}
      >
        <img
          src={IMG_BASE_URL + BACKDROP_SIZE + poster_path}
          className={styles.img}
          alt=""
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
          | {release_date && release_date.slice(0, 4)}
        </span>
        <p className={styles.desc}>{overview && sliceWord(overview, 200)}</p>
      </div>
    </div>
  );
};

export default Movie;

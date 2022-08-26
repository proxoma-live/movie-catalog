import { sliceWord } from "../../utils/sliceWord";

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
  full_backdrop_path: string;
  full_movie_size: string;
  handleClick: (id: string | number) => void;
}

const Movie: React.FC<Props> = ({
  title,
  backdrop_path,
  id,
  release_date,
  overview,
  vote_average,
  full_backdrop_path,
  full_movie_size,
  handleClick,
}) => {
  return (
    <div
      className={styles.card}
      style={
        backdrop_path !== null
          ? {
              backgroundImage: `linear-gradient(rgb(0,0,0,0.4), rgb(0,0,0,0.4)) ,url(${full_backdrop_path})`,
            }
          : undefined
      }
    >
      <div className={styles.imgContainer} onClick={() => handleClick(id)}>
        <img src={full_movie_size} className={styles.img} alt="movie" />
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

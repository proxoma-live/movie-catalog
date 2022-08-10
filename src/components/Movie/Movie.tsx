import React from "react";

import styles from "./movie.module.css";

//Movie Object
// adult: false
// backdrop_path: "/p1F51Lvj3sMopG948F5HsBbl43C.jpg"
// genre_ids: (3) [28, 12, 14]
// id: 616037
// original_language: "en"
// original_title: "Thor: Love and Thunder"
// overview: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late."
// popularity: 10909.273
// poster_path: "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"
// release_date: "2022-07-06"
// title: "Thor: Love and Thunder"
// video: false
// vote_average: 6.8
// vote_count: 1731

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

let url = "https://api.themoviedb.org/3/";
const img_path = "https://image.tmdb.org/t/p/w1280";

const Movie: React.FC<Props> = ({ movieProps }) => {
  const {
    title,
    backdrop_path,
    poster_path,
    id,
    genre_ids,
    release_date,
    overview,
    vote_average,
  } = movieProps;

  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
        url(${img_path + backdrop_path})`,
      }}
    >
      <div className={styles.imgContainer}>
        <img
          src={img_path + poster_path}
          alt="image here"
          className={styles.img}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.coreInfo}>
          <span className={styles.voteAverage}>{vote_average}</span> |{" "}
          {release_date && release_date.slice(0, 4)}
        </span>
        <p className={styles.desc}>{overview && overview.slice(0, 200)}</p>
      </div>
    </div>
  );
};

export default Movie;

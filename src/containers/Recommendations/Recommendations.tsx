import { useHistory } from "react-router-dom";

import Rec from "../../components/Recommendation";

import styles from "./recommendations.module.css";

interface Props {
  recs: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    media_type: string;
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
  }[];
}

const Recommendations: React.FC<Props> = ({ recs }) => {
  const history = useHistory();

  const handleClick = (id: string | number) => {
    history.push(`/movie/${id}`);
  };

  return (
    <>
      <h1 className={styles.header}>Recommendations</h1>
      {recs && (
        <div className={styles.recommendations}>
          {recs.map((rec) => (
            <Rec
              poster_path={rec.poster_path}
              title={rec.title}
              genre_ids={rec.genre_ids}
              id={rec.id}
              handleClick={handleClick}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Recommendations;

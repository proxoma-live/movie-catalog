import { IMG_BASE_URL, POSTER_SIZE } from "../../config";

import styles from "./recommendation.module.css";

interface Props {
  poster_path: string;
  title: string;
  genre_ids: number[];
  id: number;
  handleClick: (id: string | number) => void;
}

const Recommendation: React.FC<Props> = ({
  poster_path,
  title,
  genre_ids,
  id,
  handleClick,
}) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={IMG_BASE_URL + POSTER_SIZE + poster_path}
        alt="poster"
        onClick={() => handleClick(id)}
      />
      <h6>{title}</h6>
    </div>
  );
};

export default Recommendation;

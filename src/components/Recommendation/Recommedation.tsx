import styles from "./recommendation.module.css";

interface Props {
  poster_path: string;
  title: string;
  genre_ids: number[];
  id: number;
  full_poster_path: string;
  handleClick: (id: string | number) => void;
}

const Recommendation: React.FC<Props> = ({
  title,
  id,
  full_poster_path,
  handleClick,
}) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={full_poster_path}
        alt="poster"
        onClick={() => handleClick(id)}
      />
      <h6>{title}</h6>
    </div>
  );
};

export default Recommendation;

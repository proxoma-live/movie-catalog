import styles from "./movieCard.module.css";

function MovieCard() {
  return (
    <div className={styles.container}>
      <img src="" alt="" className={styles.cover} />
      <p className={styles.title}>The Black Phone</p>
      <p className={styles.genre}>Horror</p>
    </div>
  );
}

export default MovieCard;

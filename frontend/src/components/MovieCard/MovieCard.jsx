import styles from "./MovieCard.module.css";

const MovieCard = ({ title, poster, year, onClick, movie }) => {
  return (
    <div className={styles.card} onClick={() => onClick(movie)}>
      <div className={styles.card__image}>
        <img src={poster} alt={title} className={styles.posterImage} />
      </div>
      <div className={styles.card__title}>{title}</div>
      <div className={styles.card__year}>{year}</div>
    </div>
  );
};

export default MovieCard;

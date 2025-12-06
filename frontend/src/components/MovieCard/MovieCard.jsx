import styles from "./MovieCard.module.css";

const MovieCard = ({ title, poster, year, description, rating, genre }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={poster} alt={title} className={styles.posterImage} />
      </div>
      <div className={styles.card__title}>{title}</div>
      <div className={styles.card__year}>{year}</div>
      {/* <div className={styles.card__genre}>{genre.join(", ")}</div>
      <div className={styles.card__description}>{description}</div>
      <div className={styles.card__rating}>{rating}</div> */}
    </div>
  );
};

export default MovieCard;

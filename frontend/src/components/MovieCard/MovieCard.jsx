import styles from "./MovieCard.module.css";

const MovieCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>Тут картинка</div>
      <div className={styles.card__content}>
        <div className={styles.card__title}>Название фильма</div>
        <div className={styles.card__year}>Год выхода</div>
        <div className={styles.card__genre}>Категории</div>
        <div className={styles.card__description}>Описание</div>
        <div className={styles.card__rating}>Рейтинг</div>
      </div>
    </div>
  );
};

export default MovieCard;

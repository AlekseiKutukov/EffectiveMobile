import ReactDOM from "react-dom";
import styles from "./Modal.module.css"; // Создайте стили для модального окна

const Modal = ({ movie, onClose }) => {
  const modalRoot = document.getElementById("modal-root");

  // Если фильм не передан - не рендерим
  if (!movie) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.modal} onClick={onClose}>
      <div
        className={styles.modal__content}
        // Останавливаем всплытие, чтобы клик внутри модального окна не закрывал его
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.modal__close} onClick={onClose}>
          &times;
        </button>

        {/*Информация о фильме */}
        <div className={styles.modal__poster}>
          <img
            src={movie.poster}
            alt={movie.title}
            className={styles.modal__posterImg}
          />
        </div>

        <div className={styles.modal__info}>
          <h2>{movie.title}</h2>
          <div className={styles.modal__year}>{movie.year}</div>

          <ul className={styles.modal__genre}>
            {movie.genre.map((genreItem, index) => (
              <li key={index} className={styles.modal__genreItem}>
                {genreItem}
              </li>
            ))}
          </ul>

          <div className={styles.modal__description}>{movie.description}</div>
          <div className={styles.modal__rating}>
            <div className={styles.modal__ratingBlock}>{movie.rating}</div>
          </div>
        </div>
      </div>
    </div>,
    modalRoot // Узел DOM, куда будет рендериться модальное окно
  );
};

export default Modal;

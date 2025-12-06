import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import Modal from "../../components/Modal/Modal";
import styles from "./Main.module.css";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const DEFAULT_POSTER_PATH = "/images/default.avif";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Состояние для выбранного фильма (содержит объект фильма или null)
  const [selectedMovie, setSelectedMovie] = useState(null);

  //  открытие модального окна
  const handleMovieClick = (movieData) => {
    setSelectedMovie(movieData);
  };

  // закрытие модального окна
  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE_URL}/movies`);
        if (!res.ok) throw new Error("Ошибка при загрузке данных");
        const data = await res.json();
        console.log("Полученные данные:", data);
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (error) {
    return <main className={styles.contentWrapper}>Ошибка: {error}</main>;
  }

  if (loading) {
    return <main className={styles.contentWrapper}>Загрузка фильмов...</main>;
  }

  return (
    <main className={styles.contentWrapper}>
      {movies.length > 0 ? (
        <div className={styles.moviesAll}>
          {movies.map((movie) => {
            // проверяем есть постер к фильму
            const posterPath = movie.poster
              ? movie.poster
              : DEFAULT_POSTER_PATH;

            // Создаем полный объект фильма для передачи в Modal
            const fullMovieData = {
              ...movie,
              poster: `${API_BASE_URL}${posterPath}`, // Добавляем полный URL в объект
            };

            // ------------------------------------------------

            return (
              <MovieCard
                key={movie.id}
                movie={fullMovieData}
                onClick={handleMovieClick}
                title={movie.title}
                year={movie.year}
                description={movie.description}
                rating={movie.rating}
                genre={movie.genre}
                poster={fullMovieData.poster}
              />
            );
          })}
        </div>
      ) : (
        <p>Фильмы не найдены.</p>
      )}

      {/* Рендеринг модального окна */}
      {selectedMovie && (
        <Modal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </main>
  );
};

export default Main;

import { useEffect, useState, useMemo } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import Modal from "../../components/Modal/Modal";
import { movieUtils } from "../../utils/movieUtils";
import styles from "./Main.module.css";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Main = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Состояние для выбранного фильма (содержит объект фильма или null)
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = useMemo(() => {
    if (!searchQuery) {
      return movies; // Если запрос пуст, показываем все фильмы
    }

    return movies.filter((movie) =>
      // Проверяем, включает ли название фильма поисковый запрос
      movie.title.toLowerCase().includes(searchQuery)
    );
  }, [movies, searchQuery]);

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

        // Применяем преобразование к каждому объекту в массиве
        const transformedData = data.map(movieUtils);

        // console.log("Полученные данные:", transformedData);
        setMovies(transformedData); // Устанавливаем уже готовые данные
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
      {filteredMovies.length > 0 ? (
        <div className={styles.moviesAll}>
          {filteredMovies.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={handleMovieClick}
                title={movie.title}
                year={movie.year}
                description={movie.description}
                rating={movie.rating}
                genre={movie.genre}
                poster={movie.poster}
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

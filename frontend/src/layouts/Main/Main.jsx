import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./Main.module.css";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const DEFAULT_POSTER_PATH = "/images/default.avif";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
            const posterUrl = `${API_BASE_URL}${posterPath}`;
            // ------------------------------------------------

            return (
              <MovieCard
                key={movie.id}
                title={movie.title}
                year={movie.year}
                description={movie.description}
                rating={movie.rating}
                genre={movie.genre}
                poster={posterUrl}
              />
            );
          })}
        </div>
      ) : (
        <p>Фильмы не найдены.</p>
      )}
    </main>
  );
};

export default Main;

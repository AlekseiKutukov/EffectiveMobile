const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const DEFAULT_POSTER_PATH = "/images/default.avif";

/**
 * Преобразует объект фильма, добавляя полный абсолютный URL для постера.
 */

export const movieUtils = (movieData) => {
  // 1. Определяем относительный путь: либо из данных, либо по умолчанию
  const posterPath = movieData.poster ? movieData.poster : DEFAULT_POSTER_PATH;

  // 2. Создаем и возвращаем полный объект фильма
  return {
    ...movieData,
    poster: `${API_BASE_URL}${posterPath}`, // Добавляем полный абсолютный URL
  };
};

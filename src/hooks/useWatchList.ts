import type { Film } from '@/types/film.types';
import { useEffect, useState } from 'react';

export function useWatchList(initialFilms: Film[]) {
  const [films, setFilms] = useState(initialFilms);
  const watchedCount = films.filter((film) => film.watched).length;
  const statString = `(${watchedCount}/${films.length}) zhlédnuto`;

  const toggleWatched = (title: Film['title']) => {
    setFilms((prev) =>
      prev.map((film) => (film.title === title ? { ...film, watched: !film.watched } : film))
    );
  };

  const markAllAsWatched = () => {
    setFilms((prev) => prev.map((f) => ({ ...f, watched: true })));
  };

  useEffect(() => {
    document.title = `Watchlist ${statString}`;
  }, [films, statString]);

  return { films, toggleWatched, markAllAsWatched, statString };
}

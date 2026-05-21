import type { Film } from '@/types/film.types';
import { useState } from 'react';

export function useWatchList(initialFilms: Film[]) {
  const [films, setFilms] = useState(initialFilms);

  const toggleWatched = (title: Film['title']) => {
    setFilms((prev) =>
      prev.map((film) => (film.title === title ? { ...film, watched: !film.watched } : film))
    );
  };

  const markAllAsWatched = () => {
    setFilms((prev) => prev.map((f) => ({ ...f, watched: true })));
  };

  return { films, toggleWatched, markAllAsWatched };
}

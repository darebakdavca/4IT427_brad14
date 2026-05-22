import type { Film } from "@/types/film.types";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const initialFilms: Film[] = [
  {
    id: '1',
    title: 'The Matrix',
    year: 1999,
    genre: 'Sci-Fi',
    rating: 11,
    watched: true,
  },
  {
    id: '2',
    title: 'Parasite',
    year: 2019,
    genre: 'Thriller',
    rating: 10,
    watched: true,
  },
  {
    id: '3',
    title: 'Dune',
    year: 2021,
    genre: 'Sci-Fi',
    rating: 8,
    watched: false,
  },
];

type AddFilmDataType = {
  title: string;
  year: number;
  genre: string;
  rating: number;
}

type WatchListContextType = {
  films: Film[];
  addFilm: (addFilmData: AddFilmDataType) => void;
  removeFilm: (id: Film['id']) => void;
  toggleWatched: (id: Film['id']) => void;
  markAllAsWatched: () => void;
  statString: string;
}

const WatchListContext = createContext<WatchListContextType | undefined>(undefined)

export function WatchListProvider({ children }: { children: ReactNode }) {
  const [films, setFilms] = useState(initialFilms);
  const watchedCount = films.filter((film) => film.watched).length;
  const statString = `(${watchedCount}/${films.length}) zhlédnuto`;

  const toggleWatched = (id: Film['id']) => {
    setFilms((prev) =>
      prev.map((film) => (film.id === id ? { ...film, watched: !film.watched } : film))
    );
  };

  const markAllAsWatched = () => {
    setFilms((prev) => prev.map((f) => ({ ...f, watched: true })));
  };

  const addFilm = (addFilmData: AddFilmDataType) => {
    const newFilm = {
      ...addFilmData,
      id: crypto.randomUUID(),
      watched: false
    }
    setFilms((prev) => [newFilm, ...prev])
    return true
  };

  const removeFilm = (id: Film['id']) => {
    setFilms((prev) => prev.filter((film) => film.id !== id))
    return true
  }

  useEffect(() => {
    document.title = `Watchlist ${statString}`;
  }, [films, statString]);

  return <WatchListContext.Provider value={{
    films, toggleWatched, markAllAsWatched, addFilm, removeFilm, statString
  }}>
    {children}
  </WatchListContext.Provider >
}



// eslint-disable-next-line react-refresh/only-export-components
export function useWatchList() {
  const context = useContext(WatchListContext);

  if (!context) throw new Error('Hook must be used within WatchListProvider.')

  return context;
}
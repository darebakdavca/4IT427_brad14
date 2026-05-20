import { useState } from 'react';
import { FilmList } from '@/components/FilmList';

export interface Film {
  title: string;
  year: number;
  genre: string;
  rating: number;
  watched: boolean;
}

const initialFilms: Film[] = [
  {
    title: 'The Matrix',
    year: 1999,
    genre: 'Sci-Fi',
    rating: 11,
    watched: true,
  },
  {
    title: 'Parasite',
    year: 2019,
    genre: 'Thriller',
    rating: 10,
    watched: true,
  },
  {
    title: 'Dune',
    year: 2021,
    genre: 'Sci-Fi',
    rating: 8,
    watched: false,
  },
];

function App() {
  const [films] = useState<Film[]>(initialFilms);

  return (
    <>
      <h1>Film Watchlist</h1>
      <FilmList films={films} />
    </>
  );
}

export default App;

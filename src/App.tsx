import { useState } from 'react';
import { FilmCard } from '@/components/FilmCard';

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

  const handleToggleWatched = (title: Film['title']) => {
    console.log(`Toggle watch clicked on film ${title}`)
  }

  return (
    <div className='p-5'>
      <h1 className='text-3xl font-bold mb-5'>Film Watchlist</h1>
      <div className='grid gap-4'>
        {films?.map((film, index) => (
          <FilmCard key={index} {...film} onToggleWatched={handleToggleWatched} />
        ))}
      </div>
    </div>
  );
}

export default App;

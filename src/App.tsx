import { FilmCard } from '@/components/FilmCard';
import { Button } from '@/components/ui/button';
import { IoMdCheckmark } from 'react-icons/io';
import type { Film } from '@/types/film.types';
import { useWatchList } from '@/hooks/useWatchList';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';



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
  const { films, toggleWatched, markAllAsWatched, statString } = useWatchList(initialFilms);

  return (
    <div className='p-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 mb-5 gap-2'>
        <h1 className='text-2xl font-bold flex items-center gap-3 flex-wrap'>
          Film Watchlist
          <span className='text-base'>
            {` ${statString}`}
          </span>
        </h1>
        <div className='flex gap-2 justify-end w-full'>
          <Button onClick={markAllAsWatched} className='grow md:grow-0'>
            Označit vše jako zhlédnuté
            <IoMdCheckmark />
          </Button>
          <ThemeSwitcher className='' />
        </div>
      </div>
      <div className='grid gap-4'>
        {films.length === 0 ? (
          <p className='text-muted-foreground'>No films provided.</p>
        ) : (
          films.map((film, index) => (
            <FilmCard key={index} {...film} onToggleWatched={() => toggleWatched(film.title)} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;

import { FilmCard } from '@/components/FilmCard';
import { Button } from '@/components/ui/button';
import { IoMdCheckmark } from 'react-icons/io';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { useWatchList } from '@/contexts/WatchListContext';
import { AddFilmForm } from '@/components/AddFilmForm';
import { Dialog } from '@/components/ui/dialog';
import { MarkAllAsWatchedBtn } from '@/components/MakrAllAsWatchedBtn';


function App() {
  const { toggleWatched, films, statString } = useWatchList();

  return (
    <div className='p-5 grid gap-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <h1 className='text-2xl font-bold flex items-center gap-3 flex-wrap'>
          Film Watchlist
          <span className='text-base'>
            {` ${statString}`}
          </span>
        </h1>
        <div className='flex gap-2 justify-end w-full'>
          {films.length > 0 && <MarkAllAsWatchedBtn />}
          <ThemeSwitcher className='' />
        </div>
      </div>
      <AddFilmForm />
      <div className='grid gap-4'>
        {films.length === 0 ? (
          <p className='text-muted-foreground'>No films provided.</p>
        ) : (
          films.map((film) => (
            <FilmCard key={film.id} {...film} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;

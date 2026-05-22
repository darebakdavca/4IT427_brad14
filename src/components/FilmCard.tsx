import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useWatchList } from '@/contexts/WatchListContext';
import type { Film } from '@/types/film.types';
import { IoMdCheckmark } from 'react-icons/io';
import { IoTrashOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';


export function FilmCard({ id, title, year, genre, rating, watched }: Film) {
  const isRatingValid = rating > 0 && rating <= 10
  const { removeFilm, toggleWatched } = useWatchList();


  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex justify-between items-center'>
          <span>
            {title} ({year})
          </span>
          <SeenStatus watched={watched} />
        </CardTitle>
        <CardDescription>Žánr: {genre} | {' '}
          {isRatingValid ? `Hodnocení: ${rating} / 10` : 'Neplatné hodnocení'}</CardDescription>
      </CardHeader>
      <CardFooter>
        <div className='flex justify-start gap-2'>
          <Button onClick={() => toggleWatched(id)}>
            Změnit stav zhlédnutí
          </Button>
          <Button onClick={() => removeFilm(id)} variant={'destructive'}>
            <IoTrashOutline />
            <span className='hidden sm:inline'>
              Odebrat
            </span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}


function SeenStatus({ watched }: { watched: boolean }) {
  return (
    <div>
      {watched ? (
        <div className='inline-flex items-center gap-2'>
          <IoMdCheckmark className='text-green-500' />
          Zhlédnuto
        </div>
      ) :
        (
          <div className='inline-flex items-center gap-2'>
            <RxCross2 className='text-red-500' />
            Nezhlédnuto
          </div>
        )}
    </div>
  );
}
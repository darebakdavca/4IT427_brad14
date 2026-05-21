import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Film } from '@/types/film.types';
import { IoMdCheckmark } from 'react-icons/io';

interface FilmCardProps extends Film {
  onToggleWatched: (title: string) => void;
}

export function FilmCard({ title, year, genre, rating, watched, onToggleWatched }: FilmCardProps) {
  const isRatingValid = rating > 0 && rating <= 10


  return (
    <Card>
      <CardHeader>
        <CardTitle>{title} ({year})</CardTitle>
        <CardDescription>Žánr: {genre} | {' '}
          {isRatingValid ? `Hodnocení: ${rating} / 10` : 'Neplatné hodnocení'}</CardDescription>
      </CardHeader>
      <CardContent
        className={`overflow-hidden transition-all duration-200 ease-out ${watched ? 'max-h-8 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-1'
          }`}
      >
        <div className='inline-flex items-center gap-2'>
          <IoMdCheckmark />
          Zhlédnuto
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => onToggleWatched(title)}>
          Změnit stav zhlédnutí
        </Button>
      </CardFooter>
    </Card>
  );
}

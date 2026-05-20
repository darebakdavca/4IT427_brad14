import type { Film } from '@/App';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

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
      <CardContent>
        {watched && (
          <div className='inline-flex items-center gap-2'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              style={{ width: '20px' }}
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            Shlédnuto
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={() => onToggleWatched(title)}>
          Změnit stav shlédnutí
        </Button>
      </CardFooter>
    </Card>
  );
}

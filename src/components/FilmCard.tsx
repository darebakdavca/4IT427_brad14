import type { Film } from '@/App';

interface FilmCardProps extends Film {
  onToggleWatched: (title: string) => void;
}

export function FilmCard({ title, year, genre, rating, watched, onToggleWatched }: FilmCardProps) {
  const isRatingValid = rating > 0 && rating <= 10

  return (
    <div className="card">
      <h2>
        {title} ({year})
      </h2>
      <p>
        Žánr: {genre} | {' '}
        {isRatingValid ? `Hodnocení: ${rating} / 10` : 'Neplatné hodnocení'}
      </p>

      {watched && (
        <div>
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
      <button onClick={() => onToggleWatched(title)}>
        Změnit stav shlédnutí
      </button>
    </div>
  );
}

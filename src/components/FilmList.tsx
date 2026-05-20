import type { Film } from '@/App';
import { FilmCard } from '@/components/FilmCard';

interface FilmListProps {
  films: Film[];
}

export function FilmList({ films }: FilmListProps) {
  const handleToggleWatched = (title: Film['title']) => {
    console.log(`Toggle watch clicked on film ${title}`)
  }

  return (
    <div>
      {films?.map((film, index) => (
        <FilmCard key={index} {...film} onToggleWatched={handleToggleWatched} />
      ))}
    </div>
  )
}
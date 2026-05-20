import type { Film } from '@/App';
import { FilmCard } from '@/components/FilmCard';

interface FilmListProps {
  films: Film[];
}

export function FilmList({ films }: FilmListProps) {
  if (!films) return (<p>Žádné dostupné filmy</p>)

  const toggleWatched = (title: Film['title']) => {
    console.log(`Toggle watch clicked on film ${title}`)
  }

  return (
    <div>
      {films?.map((film, index) => (
        <FilmCard key={index} {...film} onToggleWatched={toggleWatched} />
      ))}
    </div>
  )
}
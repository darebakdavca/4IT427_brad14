import { FilmCard } from "@/components/films/FilmCard";
import { useWatchList } from "@/contexts/WatchListContext";

export function WatchListPage() {
  const { films } = useWatchList();
  return (
    <>
      {films.length === 0 ? (
        <p className='text-muted-foreground text-center'>No films provided.</p>
      ) : (
        films.map((film) => (
          <FilmCard key={film.id} {...film} />
        ))
      )}
    </>
  );
}
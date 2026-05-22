import { useWatchList } from "@/contexts/WatchListContext";

export function StatsPage() {
  const { films } = useWatchList();
  return (
    <div>
      <p>Here would be some fun stats...</p>
    </div>
  );
}
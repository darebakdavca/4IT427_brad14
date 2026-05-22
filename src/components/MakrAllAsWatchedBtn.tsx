import { Button } from "@/components/ui/button";
import { useWatchList } from "@/contexts/WatchListContext";
import { IoMdCheckmark } from "react-icons/io";

export function MarkAllAsWatchedBtn() {
  const { markAllAsWatched } = useWatchList();

  return (
    <Button onClick={markAllAsWatched} className='grow md:grow-0'>
      Označit vše jako zhlédnuté
      <IoMdCheckmark />
    </Button>
  );
}
import { AddFilmForm } from "@/components/AddFilmForm";
import { MarkAllAsWatchedBtn } from "@/components/MakrAllAsWatchedBtn";
import { NavMenu } from "@/components/NavMenu";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useWatchList } from "@/contexts/WatchListContext";
import { NavLink, Outlet } from "react-router-dom";

export function FilmsLayout() {
  const { films, statString } = useWatchList();

  return (
    <div className='p-5 grid gap-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <NavLink to={"/"}>
          <h1 className='text-2xl font-bold flex items-center gap-3 flex-wrap'>
            Film Watchlist
            <span className='text-base'>
              {` ${statString}`}
            </span>
          </h1>
        </NavLink>
        <NavMenu />
      </div>
      <div className="gap-4 grid">
        <div className='flex gap-2 justify-end w-full'>
          {films.length > 0 && <MarkAllAsWatchedBtn />}
          <ThemeSwitcher className='' />
        </div>
        <AddFilmForm />
      </div>
      <main className='grid gap-4'>
        <Outlet />
      </main>
    </div>
  );
}
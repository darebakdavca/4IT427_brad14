import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export function NavMenu() {
  return (
    <nav className="flex justify-end">
      <NavLink to={"/films"} end>
        {({ isActive }) =>
          <Button variant={'link'} className={isActive ? 'underline' : ''}>
            Watchlist
          </Button>
        }
      </NavLink>
      <NavLink to={"/films/stats"}>
        {({ isActive }) =>
          <Button variant={'link'} className={isActive ? 'underline' : ''}>
            Stats
          </Button>
        }
      </NavLink>
    </nav>
  );
}
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export function WelcomePage() {
  return (
    <div className="mx-auto min-w-2xl max-w-5xl flex justify-center items-center h-svh">
      <div className="text-center bg-muted p-5 rounded-xl grid gap-4 w-96">
        <h1 className="text-4xl font-bold">Vítejte</h1>
        <p className="text-muted-foreground">Přidávej si filmy do watchlistu, hodnoť je a spravuj jejich zhlédnutí.</p>
        <NavLink to={"/films"}>
          <Button className="w-full">Zobrazit film watchlist</Button>
        </NavLink>
      </div>
    </div>
  );
}
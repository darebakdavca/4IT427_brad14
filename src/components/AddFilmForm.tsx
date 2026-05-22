import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider";
import { useWatchList } from "@/contexts/WatchListContext";
import { useState, type FormEvent } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function AddFilmForm() {
  const { addFilm } = useWatchList();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const [title, setTitle] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [rating, setRating] = useState<number>(5);


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addFilm({
      title, year: Number.parseInt(year), genre, rating
    })
    setIsOpen(false);

    setRating(5);
    setGenre('')
    setTitle('')
    setYear('')

    navigate('/films')
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant={'secondary'} className="w-full">
            <FaPlus />
            Přidat nový film</Button>
        </DialogTrigger>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <DialogHeader className="mb-5">
              <DialogTitle>Přidat nový film</DialogTitle>
              <DialogDescription>
                Zadejte údaje o filmu. Po dokončení změny uložte.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="title">Název</FieldLabel>
                <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Borat" />
                <FieldDescription>
                  Název filmu
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="year">Rok</FieldLabel>
                <Input id="year" value={year} onChange={(e) => setYear(e.target.value)} type="number" placeholder="1999" />
                <FieldDescription>
                  Rok vydání
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="genre">Žánr</FieldLabel>
                <Input id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} type="text" placeholder="komedie" />
                <FieldDescription>
                  Hlavní žánr
                </FieldDescription>
              </Field>
              <Field>
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="rating">Hodnocení</FieldLabel>
                  <span className="text-sm font-medium">{rating}/10</span>
                </div>
                <Slider id="rating" min={1} value={[rating]} max={10} step={1} onValueChange={(value) => setRating(value[0])} />
                <FieldDescription>
                  Vaše hodnocení filmu
                </FieldDescription>
              </Field>
              <Field orientation="horizontal">
                <Button type="submit">Uložit</Button>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Zrušit
                  </Button>
                </DialogClose>
              </Field>
            </FieldGroup >
          </form>
        </DialogContent>
      </Dialog >
    </>
  );
}

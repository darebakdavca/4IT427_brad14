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

export function AddFilmForm() {
  const { addFilm } = useWatchList();

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
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant={'secondary'} className="w-full">
            <FaPlus />
            Add new film</Button>
        </DialogTrigger>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <DialogHeader className="mb-5">
              <DialogTitle>Add new film</DialogTitle>
              <DialogDescription>
                Add new film data here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="title">Title</FieldLabel>
                <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Your title" />
                <FieldDescription>
                  The title of your film
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="year">Year</FieldLabel>
                <Input id="year" value={year} onChange={(e) => setYear(e.target.value)} type="number" placeholder="1999" />
                <FieldDescription>
                  Year of release
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="genre">Genre</FieldLabel>
                <Input id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} type="text" placeholder="comedy" />
                <FieldDescription>
                  The main genre
                </FieldDescription>
              </Field>
              <Field>
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="title">Rating</FieldLabel>
                  <span className="text-sm font-medium">{rating}/10</span>
                </div>
                <Slider min={1} value={[rating]} max={10} step={1} onValueChange={(value) => setRating(value[0])} />
                <FieldDescription>
                  The rating you give
                </FieldDescription>
              </Field>
              <Field orientation="horizontal">
                <Button type="submit">Submit</Button>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancel
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
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

export function ThemeSwitcher({ className }: { className: string }) {
  const { theme, triggerTheme } = useTheme();
  return (

    <Button className={cn(className)} variant='secondary' onClick={triggerTheme}>
      <span className='inline-flex items-center gap-2'>
        {theme === 'dark' ?
          <>
            <MdOutlineWbSunny />
            <span className="hidden md:block">
              Světlý režim
            </span>

          </>
          :
          <>
            <IoMoonOutline />
            <span className="hidden md:block">
              Tmavý režim
            </span>
          </>
        }
      </span>
    </Button>
  );
}
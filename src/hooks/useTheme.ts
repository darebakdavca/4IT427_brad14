import type { Theme } from '@/types/theme.types';
import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');
  const triggerTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return { theme, setTheme, triggerTheme };
}

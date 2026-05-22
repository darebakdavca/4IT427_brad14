import type { Theme } from '@/types/theme.types';
import { useEffect, useState } from 'react';

function getDeviceTheme(): Theme {
  if (window.matchMedia('(prefers-color-scheme: dark').matches) {
    return 'dark';
  }

  return 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getDeviceTheme);

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

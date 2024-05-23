import React from 'react';
import { useTheme } from '../Context/ThemeContext';
import { useAtom } from 'jotai';
import { countAtom } from './atoms';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Toggle to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
};

export default ThemeToggler;

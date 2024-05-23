import React from 'react';
import { useTheme } from '../Context/ThemeContext';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Toggle to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
};

export default ThemeToggler;

import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import './App.css';

const App = () => {
  const [category, setCategory] = useState('general');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    
    return localStorage.getItem('darkMode') === 'true';
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode); // Save preference to localStorage
      return newMode;
    });
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar setCategory={setCategory} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <NewsBoard category={category} />
    </div>
  );
};

export default App;

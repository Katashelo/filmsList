import React, { useEffect, useState } from 'react';
import './app.css'
import ThemeButton from './ThemeButton';
import FilmsPopulars111 from './FilmsPopular111';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopRatedMovies from './TopRatedMovies';
import TVShow from './TVShow';



const App = (props) => {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (



    <div >
      <div onClick={toggleTheme}>
        <ThemeButton />
      </div>
      <Navbar />
      <Routes>

        <Route path="/" exact element={<FilmsPopulars111 />} />
        <Route path="/TopRatedMovies" element={<TopRatedMovies />} />
        <Route path="/TVShows" element={<TVShow />} />
      </Routes>



    </div>
  );
}


export default App;



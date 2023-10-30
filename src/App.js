import React, { useEffect, useState } from 'react';
import './app.css'
import { Route, Routes } from 'react-router-dom';
import FilmsPopulars111 from './body/FilmsPopular/FilmsPopular111';
import TopRatedMovies from './body/TopRank/TopRatedMovies';
import TVShow from './body/TVShow/TVShow';
import ThemeButton from './ThemeButton/ThemeButton';
import Navbar from './Navbar/Navbar';
import MyFavoriteFilms from './body/MyFavorite/MyFavoriteFilms';




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
        <Route path="/MyFavoriteFilms" element={<MyFavoriteFilms />} />
        <Route path="/" exact element={<FilmsPopulars111 />} />
        <Route path="/TopRatedMovies" element={<TopRatedMovies />} />
        <Route path="/TVShows" element={<TVShow />} />
      </Routes>



    </div>
  );
}


export default App;



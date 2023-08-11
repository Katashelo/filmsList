import React, { useState } from "react";
import PopUp from "./PopUp";
import Pagination from "./Pagination";
import useFetchMovies from "./useFetchMovies";

const TopRatedMovies = () => {
    const [isToggleOn, setIsToggleOn] = useState(true)
    const url = "https://api.themoviedb.org/3/rated/movies?api_key=5be5ccee10320c70ef1f2aeeb98d3a41"
    const { items, isLoaded, error, currentPage, totalPage } = useFetchMovies(url)

    const handleClick = () => {
        if (isToggleOn === true) {
            setIsToggleOn(false);
        } else {
            setIsToggleOn(true)
        }

    }
    if (error) {
        return <div>Помилка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Завантаження...</div>;
    } else {

        const imagePath = "https://image.tmdb.org/t/p/w300"

        const Ranking = (props) => {
            return <button onClick={handleClick}>
                {isToggleOn ? "Rate Switch" : props.rnk + " " + 'Hide Rate'}
            </button>
        }
        return (
            <div>
                <h1 className='title' > Ranking Movies </h1>
                <Pagination />
                <ul className='app-wrapper' >
                    {items && items.items.map(item => (
                        <li key={item.id}>
                            <div  >{item.title} </div>
                            <div >
                                <PopUp image={item.poster_path} imagePath={imagePath} relise={item.release_date} rank={item.popularity} />
                            </div>
                            <Ranking rnk={item.popularity} />
                            <div className='overview' >{item.overview}</div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TopRatedMovies;
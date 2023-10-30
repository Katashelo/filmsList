import React from "react";

import Pagination from "../../Pagination/Pagination";
import useFetchMovies from "../../API/useFetchMovies";

const TopRatedMovies = () => {

    const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=5be5ccee10320c70ef1f2aeeb98d3a41&language=en-US&page=1"
    const { items, isLoaded, error, currentPage, totalPage } = useFetchMovies(url)

    if (error) {
        return <div>Помилка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Завантаження....</div>;
    } else {


        const itemy = []
       items.items.map(arr => (
        itemy.push(arr)
       ))

        return (
            <div>
                <h1 className='title' > Ranking Movies </h1>
                <Pagination elements={itemy.length} items={items.items} />
            </div>
        );
    }
}

export default TopRatedMovies;
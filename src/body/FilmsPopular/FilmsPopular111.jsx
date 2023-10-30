import React, { useEffect, useState } from "react";
import Pagination from "../../Pagination/Pagination";
import useFetchMovies from "../../API/useFetchMovies";


const FilmsPopulars111 = (props) => {


    const url = "https://api.themoviedb.org/3/movie/popular?api_key=5be5ccee10320c70ef1f2aeeb98d3a41&language=en-US"
    const { items, isLoaded, error, currentPage, totalPage } = useFetchMovies(url)


    if (error) {
        return <div>Помилка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Завантаження...</div>;
    } else {

     

        
        const itemy = []
       items.items.map(arr => (
        itemy.push(arr)
       ))
       
        console.log(itemy.length, 'dlina')
        return (
            <div>
                <h1 className='title' > Favourite Movies </h1>
                <Pagination elements={itemy.length} items={items.items}/>
            </div>
        );
    }
}


export default FilmsPopulars111;
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import PopUp from "./PopUp";
import useFetchMovies from "./useFetchMovies";

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
                {/* <ul className='app-wrapper' >
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
                </ul> */}
            </div>
        );
    }
}


export default FilmsPopulars111;
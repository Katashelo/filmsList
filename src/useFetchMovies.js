import React, {  useEffect, useState } from "react";

const useFetchMovies = (url) => {

 
    const [items, setItems] = useState()
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ error, setError ] = useState(null)
    const [ currentPage, setCurrentPage ] = useState()
    const [ totalPage, setTotalPage ] = useState()

    // const [data, setData] = useState();
    // const [error, setError] = useState();
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded({
                        isLoaded: true,
                    });
                    setItems({
                        items: result.results
                    })
                },
                (error) => {
                    setIsLoaded({
                        isLoaded: true,
                        error
                    });
                }
            )
    }, [])

console.log(items, 'items')
    return { items, isLoaded, error, currentPage, totalPage };
};


export default useFetchMovies;
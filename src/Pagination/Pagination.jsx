import React from "react";
import { useState } from "react";
import PopUp from "../ModalWindow/PopUp";
import { useDispatch } from 'react-redux';
import { addToFilm } from "../store/action";
import { initialState } from "../store/initialState";

const Pagination = (props) => {

  const [currentPage, setcurrentPage] = useState(1)
  const [totalFilms] = useState(props.elements)
  const [filmsPerPage] = useState(5)

  const lastFilmsIndex = currentPage * filmsPerPage
  const firstFilmsIndex = lastFilmsIndex - filmsPerPage
  const currentFilms = props.items.slice(firstFilmsIndex, lastFilmsIndex)
  console.log(currentFilms)

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalFilms / filmsPerPage); i++) {
    pageNumbers.push(i)
  }

  const handlePageAdd = () => {
    setcurrentPage(currentPage + 1);
  }
  const handlePageMinus = () => {
    setcurrentPage(currentPage - 1)
  }
  const Ranking = (props) => {
    const [isToggleOn, setIsToggleOn] = useState(true)
    const handleClick = () => {
      if (isToggleOn === true) {
        setIsToggleOn(false);
      } else {
        setIsToggleOn(true)
      }
    }
    return <button onClick={handleClick}>
      {isToggleOn ? "Rate Switch" : props.rnk + " " + 'Hide Rate'}
    </button>
  }

const dispatch = useDispatch()
const handleAddFilm = item => {
  dispatch(addToFilm(item))
}
const AddMyFavorite = (props) => (
  <button onClick={handleAddFilm(props.item)} >Add to my favorite</button>
)
  const imagePath = "https://image.tmdb.org/t/p/w300"
  return (
    <div>
      <div> All Pages: {pageNumbers.length}</div>
      <div>Current Page: {currentPage}</div>

      <button
        onClick={handlePageMinus}
        disabled={currentPage === 1}
      >
        Previous Page
      </button>

      <button
        onClick={handlePageAdd}
        disabled={currentPage === pageNumbers.length}
      >
        Next Page
      </button>
      <ul className='app-wrapper' >
        {currentFilms.map(item => (
          <li key={item.id} >
            <div> {item.title} </div>
            <div >
              <PopUp image={item.poster_path} imagePath={imagePath} relise={item.release_date} rank={item.popularity} />
              {/* <AddMyFavorite item={item.title} /> */}
              <button onClick={handleAddFilm(item.title)} >Add to my favorite</button>
            </div>
            <Ranking rnk={item.popularity} />
            <div className='overview' >{item.overview}</div>
          </li>
        ))}
      </ul>



    </div>
  )
}

export default Pagination;
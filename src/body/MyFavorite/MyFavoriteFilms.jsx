import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filmsItemSelector } from "../../store/selectors";
import { initialState } from "../../store/initialState";
import { removeFilm } from "../../store/action";

const MyFavoriteFilms = () => {
    const filmsItem = useSelector(filmsItemSelector)
    const dispatch = useDispatch()
    const handleRemoveFilms = (id) => {
        dispatch(removeFilm(id))
    }
    console.log(filmsItem, 'prov' )
    return <div>
        {/* {filmsItem.length !== 0
            ? filmsItem.map(item => {
                <div>
                    <div>{item}</div>
                    <button onClick={handleRemoveFilms} >Delete</button>
                </div> })
            : 'add your favorite films'
        } */}
        <div>{filmsItem}</div>
    </div>


}
export default MyFavoriteFilms;
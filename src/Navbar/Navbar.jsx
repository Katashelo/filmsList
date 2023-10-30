import React from "react";
import { Link} from "react-router-dom";



const Navbar = () => {



return <div className="navbar" >
    <Link to="/MyFavoriteFilms"> My Favorite Films </Link>
    <Link to="/" >Films Popular </Link>
    <Link to="/TopRatedMovies" >Top Rated Movies </Link>
    <Link to="/TVShows"  >TV Shows </Link>
    
</div>
}






export default Navbar;